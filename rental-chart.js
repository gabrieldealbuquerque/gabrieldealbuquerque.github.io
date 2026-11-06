(() => {
  "use strict";

  const copy = {
    pt: {
      all: "Todos",
      apartment: "Apartamentos",
      house: "Casas",
      filters: "Filtrar por tipo de imóvel",
      count: "imóveis",
      mape: "MAPE",
      observed: "Aluguel anunciado",
      predicted: "Aluguel previsto",
      unit: "R$ / mês",
      type: "Tipo",
      error: "Erro percentual",
      apartmentOne: "Apartamento",
      houseOne: "Casa",
      identity: "Previsão igual ao anúncio",
      plot: "Aluguéis anunciados e previstos, em escala logarítmica",
      instructions:
        "Passe o cursor ou toque para explorar. No gráfico, use as setas para percorrer os imóveis, Home e End para os extremos e Esc para limpar.",
      scale:
        "Os dois eixos usam escala logarítmica: distâncias iguais representam a mesma proporção, não o mesmo valor em reais.",
      method:
        "Previsões fora da amostra (OOF, 5 folds). Cada imóvel foi avaliado por um modelo que não o viu no treino. MAPE é a média dos erros percentuais absolutos.",
      empty: "Selecione um ponto para ver os valores de um imóvel real.",
    },
    en: {
      all: "All",
      apartment: "Apartments",
      house: "Houses",
      filters: "Filter by property type",
      count: "properties",
      mape: "MAPE",
      observed: "Advertised rent",
      predicted: "Predicted rent",
      unit: "R$ / month",
      type: "Type",
      error: "Absolute % error",
      apartmentOne: "Apartment",
      houseOne: "House",
      identity: "Prediction equals advertised rent",
      plot: "Advertised and predicted rents, on logarithmic axes",
      instructions:
        "Hover or tap to explore. On the chart, use arrow keys to browse properties, Home and End for the extremes, and Esc to clear.",
      scale:
        "Both axes use a logarithmic scale: equal distances represent the same ratio, rather than the same amount in reais.",
      method:
        "Out-of-fold predictions (OOF, 5 folds). Each property was evaluated by a model that did not see it during training. MAPE is the mean absolute percentage error.",
      empty: "Select a point to see the values of a real property.",
    },
    ja: {
      all: "すべて",
      apartment: "集合住宅",
      house: "一戸建て",
      filters: "物件種別で絞り込み",
      count: "件",
      mape: "MAPE",
      observed: "募集家賃",
      predicted: "予測家賃",
      unit: "R$ / 月",
      type: "種別",
      error: "絶対誤差（%）",
      apartmentOne: "集合住宅",
      houseOne: "一戸建て",
      identity: "予測と募集家賃が一致",
      plot: "募集家賃と予測家賃の対数散布図",
      instructions:
        "カーソルやタップで物件を選択できます。グラフ上では矢印キーで移動し、Home・Endで両端へ、Escで選択を解除できます。",
      scale:
        "両軸は対数目盛です。同じ距離は同じ金額ではなく、同じ比率を表します。",
      method:
        "学習対象外の予測（OOF、5分割）。各物件は、その物件を学習していないモデルで評価しています。MAPEは絶対パーセント誤差の平均です。",
      empty: "点を選択すると実際の物件の数値を確認できます。",
    },
  };
  const ns = "http://www.w3.org/2000/svg";
  const languageKey = (value) =>
    /^ja/i.test(value) ? "ja" : /^en/i.test(value) ? "en" : "pt";
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const svgEl = (tag, attributes = {}, text) => {
    const node = document.createElementNS(ns, tag);
    for (const [name, value] of Object.entries(attributes))
      node.setAttribute(name, value);
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function parseData(csv) {
    const lines = csv
      .replace(/^\uFEFF/, "")
      .trim()
      .split(/\r?\n/);
    if (
      lines.shift() !==
      "observed_rent_brl,predicted_rent_brl,property_type,fold"
    )
      throw new Error("Invalid chart columns");
    const rows = lines.map((line, id) => {
      const fields = line.split(",");
      if (
        fields.length !== 4 ||
        fields.some((value) => value.trim() !== value || !value)
      )
        throw new Error("Invalid chart row");
      const [observed, predicted] = fields.slice(0, 2).map(Number);
      const type = fields[2];
      const fold = Number(fields[3]);
      if (
        !Number.isFinite(observed) ||
        !Number.isFinite(predicted) ||
        observed <= 0 ||
        predicted <= 0 ||
        !["Apartamento", "Casa"].includes(type) ||
        !/^[0-4]$/.test(fields[3])
      )
        throw new Error("Invalid chart values");
      return {
        id,
        observed,
        predicted,
        type,
        fold,
        error: (Math.abs(predicted - observed) / observed) * 100,
      };
    });
    if (
      rows.length !== 3283 ||
      rows.filter((row) => row.type === "Apartamento").length !== 2655 ||
      rows.filter((row) => row.type === "Casa").length !== 628 ||
      new Set(rows.map((row) => row.fold)).size !== 5 ||
      rows.some(
        (row) =>
          Math.min(row.observed, row.predicted) < 500 ||
          Math.max(row.observed, row.predicted) > 40000,
      )
    ) {
      throw new Error("Unexpected chart dataset");
    }
    return rows.sort(
      (a, b) =>
        a.observed - b.observed || a.predicted - b.predicted || a.id - b.id,
    );
  }

  async function enhance(figure, chartId) {
    const target = figure.querySelector("[data-chart-interactive]");
    const fallback = figure.querySelector("[data-chart-fallback]");
    if (!target || !fallback || !figure.dataset.source) return;
    try {
      const response = await fetch(figure.dataset.source, {
        credentials: "same-origin",
      });
      if (!response.ok) throw new Error("Chart data unavailable");
      const allRows = parseData(await response.text());
      let language = languageKey(document.documentElement.lang);
      let filter = "all";
      let rows = allRows;
      let selected = null;
      let projected = [];
      let announceTimer;
      let resizeFrame;
      let lastWidth = 0;
      const shell = el("div", "rental-chart");
      const controls = el("div", "rental-chart__controls");
      const buttons = el("div", "rental-chart__filters");
      buttons.setAttribute("role", "group");
      const filterButtons = ["all", "apartment", "house"].map((key) => {
        const button = el("button", "rental-chart__filter");
        button.type = "button";
        button.dataset.rentalFilter = key;
        button.addEventListener("click", () => {
          filter = key;
          rows = allRows.filter(
            (row) =>
              key === "all" ||
              row.type === (key === "apartment" ? "Apartamento" : "Casa"),
          );
          if (selected && !rows.includes(selected)) selected = null;
          updateText();
          draw();
          announce(
            `${summary.textContent}. ${selected ? selectionText() : copy[language].empty}`,
          );
        });
        buttons.append(button);
        return button;
      });
      const summary = el("p", "rental-chart__summary");
      summary.dataset.chartSummary = "";
      controls.append(buttons, summary);
      const stage = el("div", "rental-chart__stage");
      const svg = svgEl("svg", {
        class: "rental-chart__plot",
        tabindex: "0",
        role: "img",
        "aria-describedby": `rental-instructions-${chartId} rental-scale-${chartId} rental-selection-${chartId}`,
      });
      svg.dataset.rentalPlot = "";
      stage.append(svg);
      const legend = el("div", "rental-chart__legend");
      const legendLabels = ["apartment", "house", "identity"].map((key) => {
        const item = el(
          "span",
          `rental-chart__legend-item rental-chart__legend-item--${key}`,
        );
        const mark = el("span", "rental-chart__legend-mark");
        mark.setAttribute("aria-hidden", "true");
        const label = el("span");
        item.append(mark, label);
        legend.append(item);
        return label;
      });
      const instructions = el("p", "rental-chart__instructions");
      instructions.id = `rental-instructions-${chartId}`;
      const readout = el("div", "rental-chart__readout");
      const hint = el("p", "rental-chart__hint");
      const values = el("dl", "rental-chart__values");
      const details = ["observed", "predicted", "type", "error"].map((key) => {
        const group = el("div");
        const label = el("dt");
        const value = el("dd");
        value.dataset.rentalValue = key;
        group.append(label, value);
        values.append(group);
        return { key, label, value };
      });
      readout.append(hint, values);
      const scale = el("p", "rental-chart__note");
      scale.id = `rental-scale-${chartId}`;
      const method = el("p", "rental-chart__note");
      const live = el("span", "rental-chart__sr");
      live.id = `rental-selection-${chartId}`;
      live.setAttribute("role", "status");
      live.setAttribute("aria-live", "polite");
      live.setAttribute("aria-atomic", "true");
      shell.append(
        controls,
        stage,
        legend,
        instructions,
        readout,
        scale,
        method,
        live,
      );
      target.replaceChildren(shell);

      const locale = () =>
        ({ pt: "pt-BR", en: "en-US", ja: "ja-JP" })[language];
      const number = (value, digits = 0) =>
        new Intl.NumberFormat(locale(), {
          minimumFractionDigits: digits,
          maximumFractionDigits: digits,
        }).format(value);
      const money = (value) => `R$ ${number(value, 2)}`;
      const propertyName = (row) =>
        copy[language][row.type === "Casa" ? "houseOne" : "apartmentOne"];
      const selectionText = () =>
        selected
          ? `${propertyName(selected)}. ${copy[language].observed}: ${money(selected.observed)}. ${copy[language].predicted}: ${money(selected.predicted)}. ${copy[language].error}: ${number(selected.error, 2)}%.`
          : copy[language].empty;
      function announce(message) {
        clearTimeout(announceTimer);
        announceTimer = setTimeout(() => {
          live.textContent = message;
        }, 160);
      }
      function updateReadout() {
        hint.textContent = selected
          ? propertyName(selected)
          : copy[language].empty;
        for (const { key, value } of details) {
          value.textContent = !selected
            ? "—"
            : key === "type"
              ? propertyName(selected)
              : key === "error"
                ? `${number(selected.error, 2)}%`
                : money(selected[key]);
        }
      }
      function updateText() {
        const t = copy[language];
        buttons.setAttribute("aria-label", t.filters);
        filterButtons.forEach((button, index) => {
          const key = ["all", "apartment", "house"][index];
          button.textContent = t[key];
          button.setAttribute("aria-pressed", String(filter === key));
        });
        const mape =
          rows.reduce((sum, row) => sum + row.error, 0) / rows.length;
        summary.textContent = `${number(rows.length)} ${t.count} · ${t.mape} ${number(mape, 2)}%`;
        svg.setAttribute("aria-label", `${t.plot}. ${summary.textContent}`);
        legendLabels.forEach((label, index) => {
          label.textContent = t[["apartment", "house", "identity"][index]];
        });
        instructions.textContent = t.instructions;
        scale.textContent = t.scale;
        method.textContent = t.method;
        details.forEach(({ key, label }) => {
          label.textContent = t[key];
        });
        updateReadout();
      }
      function draw() {
        const width = Math.max(
          240,
          stage.clientWidth || figure.clientWidth || 640,
        );
        const height = width < 520 ? 320 : 460;
        lastWidth = width;
        const margin = {
          left: width < 400 ? 55 : 66,
          right: 20,
          top: 24,
          bottom: 62,
        };
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;
        const logMin = Math.log(500);
        const logRange = Math.log(40000) - logMin;
        const x = (value) =>
          margin.left + ((Math.log(value) - logMin) / logRange) * plotWidth;
        const y = (value) =>
          margin.top +
          plotHeight -
          ((Math.log(value) - logMin) / logRange) * plotHeight;
        const t = copy[language];
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        svg.setAttribute("height", height);
        const fragment = document.createDocumentFragment();
        const ticks =
          width < 400
            ? [1000, 5000, 20000]
            : [500, 1000, 2000, 5000, 10000, 20000, 40000];
        ticks.forEach((tick) => {
          const label = tick >= 1000 ? `${tick / 1000}k` : String(tick);
          fragment.append(
            svgEl("line", {
              x1: x(tick),
              y1: margin.top,
              x2: x(tick),
              y2: height - margin.bottom,
              class: "rental-chart__grid",
            }),
            svgEl("line", {
              x1: margin.left,
              y1: y(tick),
              x2: width - margin.right,
              y2: y(tick),
              class: "rental-chart__grid",
            }),
            svgEl(
              "text",
              {
                x: x(tick),
                y: height - margin.bottom + 22,
                "text-anchor": "middle",
                class: "rental-chart__tick",
              },
              label,
            ),
            svgEl(
              "text",
              {
                x: margin.left - 10,
                y: y(tick) + 4,
                "text-anchor": "end",
                class: "rental-chart__tick",
              },
              label,
            ),
          );
        });
        fragment.append(
          svgEl("line", {
            x1: x(500),
            y1: y(500),
            x2: x(40000),
            y2: y(40000),
            class: "rental-chart__identity",
          }),
        );
        const paths = { Apartamento: "", Casa: "" };
        projected = rows.map((row) => {
          const px = x(row.observed);
          const py = y(row.predicted);
          const r = width < 400 ? 2 : 2.4;
          paths[row.type] +=
            row.type === "Casa"
              ? `M${px - r},${py - r}h${r * 2}v${r * 2}h-${r * 2}Z`
              : `M${px - r},${py}a${r},${r} 0 1,0 ${r * 2},0a${r},${r} 0 1,0 -${r * 2},0`;
          return { row, x: px, y: py };
        });
        for (const type of ["Apartamento", "Casa"])
          fragment.append(
            svgEl("path", {
              d: paths[type],
              class: `rental-chart__points rental-chart__points--${type === "Casa" ? "house" : "apartment"}`,
              "data-point-count": rows.filter((row) => row.type === type)
                .length,
            }),
          );
        fragment.append(
          svgEl(
            "text",
            {
              x: margin.left + plotWidth / 2,
              y: height - 13,
              "text-anchor": "middle",
              class: "rental-chart__axis-label",
            },
            `${t.observed} (${t.unit})`,
          ),
          svgEl(
            "text",
            {
              transform: `translate(15 ${margin.top + plotHeight / 2}) rotate(-90)`,
              "text-anchor": "middle",
              class: "rental-chart__axis-label",
            },
            `${t.predicted} (${t.unit})`,
          ),
        );
        fragment.append(
          svgEl("circle", {
            r: 7,
            class: "rental-chart__selection",
            visibility: "hidden",
          }),
        );
        svg.replaceChildren(fragment);
        updateSelection();
      }
      function updateSelection() {
        const point = projected.find(({ row }) => row === selected);
        const ring = svg.querySelector(".rental-chart__selection");
        ring.setAttribute("visibility", point ? "visible" : "hidden");
        if (point) {
          ring.setAttribute("cx", point.x);
          ring.setAttribute("cy", point.y);
        }
        updateReadout();
      }
      function select(row) {
        if (selected === row) return;
        selected = row;
        updateSelection();
        announce(selectionText());
      }
      function pick(event) {
        const rect = svg.getBoundingClientRect();
        const px =
          ((event.clientX - rect.left) * svg.viewBox.baseVal.width) /
          rect.width;
        const py =
          ((event.clientY - rect.top) * svg.viewBox.baseVal.height) /
          rect.height;
        let nearest = null;
        let distance = Infinity;
        for (const point of projected) {
          const candidate = (point.x - px) ** 2 + (point.y - py) ** 2;
          if (candidate < distance) {
            distance = candidate;
            nearest = point.row;
          }
        }
        if (nearest) select(nearest);
      }
      svg.addEventListener("pointermove", (event) => {
        if (event.pointerType === "mouse") pick(event);
      });
      svg.addEventListener("pointerdown", (event) => {
        pick(event);
      });
      svg.addEventListener("keydown", (event) => {
        if (
          ![
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "Escape",
          ].includes(event.key)
        )
          return;
        event.preventDefault();
        if (event.key === "Escape") {
          select(null);
          return;
        }
        const index = selected
          ? rows.indexOf(selected)
          : Math.floor(rows.length / 2);
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? rows.length - 1
              : Math.max(
                  0,
                  Math.min(
                    rows.length - 1,
                    index +
                      (["ArrowLeft", "ArrowDown"].includes(event.key) ? -1 : 1),
                  ),
                );
        select(rows[next]);
      });
      svg.addEventListener("focus", () => {
        if (!selected) select(rows[Math.floor(rows.length / 2)]);
      });
      document.addEventListener("portfolio:languagechange", (event) => {
        language = languageKey(
          event.detail?.language || document.documentElement.lang,
        );
        updateText();
        draw();
        if (selected) announce(selectionText());
      });
      updateText();
      target.hidden = false;
      draw();
      fallback.hidden = true;
      figure.dataset.chartReady = "true";
      if ("ResizeObserver" in window)
        new ResizeObserver(() => {
          if (stage.clientWidth === lastWidth) return;
          cancelAnimationFrame(resizeFrame);
          resizeFrame = requestAnimationFrame(draw);
        }).observe(stage);
      else
        window.addEventListener("resize", () => {
          cancelAnimationFrame(resizeFrame);
          resizeFrame = requestAnimationFrame(draw);
        });
    } catch {
      target.hidden = true;
      fallback.hidden = false;
      figure.dataset.chartReady = "false";
    }
  }
  document.querySelectorAll("[data-rental-chart]").forEach((figure, index) => {
    void enhance(figure, index);
  });
})();
