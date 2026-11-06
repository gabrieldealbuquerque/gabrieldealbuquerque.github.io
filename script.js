"use strict";

const translations = {
  pt: {
    rentRecognition: "Melhor precisão da turma na avaliação final de Inteligência Artificial · UFES",
    rentRepository: "Ver no GitHub",
    rentOverview: "Estimativa de aluguéis residenciais com XGBoost, engenharia de atributos e comparação entre imóveis semelhantes. O gráfico mostra como as previsões se aproximam dos valores anunciados.",
    rentMethod: "Validação cruzada em cinco grupos: cada imóvel foi avaliado por um modelo treinado nos outros grupos.",
    rentData: "Dados da validação (CSV)",
    rentMethodLink: "Como o modelo funciona",

    acctsyPreview: "Prévia do site da Acctsy",
    meridianPreview: "Prévia do site da Meridian",
    tovPreview: "Prévia do site do TOV",
    gamelabPreview: "Imagem oficial do jogo desenvolvido no UFES GameLab",
    rentPreview: "Gráfico de aluguel real e previsto em validação cruzada",

    title: "Gabriel de Albuquerque — Engenheiro de Software",
    description:
      "CTO na Acctsy e estudante de Ciência da Computação na UFES. Experiência em backend, full stack, inteligência artificial e desenvolvimento de jogos.",
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    navAbout: "Sobre",
    navWork: "Projetos",
    navContact: "Contato",
    languageLabel: "Idioma",
    role: "Engenheiro de Software · CTO na Acctsy",
    bio: "Trabalho com backend, aplicações web e inteligência artificial. Gosto de entender o problema, construir a solução e acompanhar seu funcionamento na prática.",
    education:
      "Ciência da Computação na UFES · conclusão prevista para o final de 2027.",
    resume: "Currículo em PDF",
    avatarAlt: "Avatar de Gabriel no GitHub",
    workTitle: "Experiência e projetos",
    acctsyRole: "CTO · atuação atual",
    acctsyDescription:
      "Desenvolvo um SaaS para escritórios de contabilidade, da arquitetura e das APIs à interface e à infraestrutura. O trabalho envolve processamento de documentos, análise financeira, relatórios e integração com modelos de IA.",
    acctsyDetail:
      "Backend multi-tenant, processamento assíncrono, engenharia de prompt e RAG.",
    meridianRole: "Software para clientes",
    meridianDescription:
      "Iniciativa de desenvolvimento de software sob demanda, criada por estudantes da UFES. Construímos soluções para clientes, conectando suas necessidades ao desenvolvimento de produtos web.",
    meridianDetail:
      "React e TypeScript, com backends Node.js ou PHP e persistência em SQLite.",
    tovTitle: "TOV · Escritório de advocacia",
    tovDescription:
      "Um dos projetos desenvolvidos em equipe pela Meridian: site institucional e painel próprio para publicação e gestão de artigos, aproximando o escritório de seus clientes.",
    meridianLinkedin: "Meridian no LinkedIn",
    rentTitle: "Previsão de aluguéis na Grande Vitória",
    rentDescription:
      "XGBoost e comparáveis. Melhor precisão da turma na avaliação final de IA.",
    gamelabRole: "Desenvolvimento de jogos",
    gamelabDescription:
      "Participei da criação do jogo I LOVE EATING TRASH no Roblox, contribuindo com o mapa, as mecânicas do jogo e o sistema de spawn aleatório.",
    gameLink: "Conhecer o jogo",
    academicTitle: "Projetos acadêmicos",
    allProjects: "Todos no GitHub",
    ebpfTitle: "Detecção de deadlock com eBPF",
    ebpfDescription:
      "Instrumentação de serviços TCP e recuperação da comunicação.",
    tcpTitle: "Desktop remoto via TCP",
    tcpDescription:
      "Transmissão de tela e controle de mouse e teclado por sockets.",
    mlTitle: "Redes neurais",
    mlDescription:
      "Implementações de classificação, regressão e redes neurais com NumPy e PyTorch.",
    dijkstraTitle: "Algoritmo de Dijkstra",
    dijkstraDescription:
      "Implementação com vetor para encontrar caminhos mínimos em grafos.",
    backendLabel: "Backend",
    frontendLabel: "Frontend",
    skillsTitle: "Tecnologias e áreas de atuação",
    aiLabel: "Inteligência artificial",
    aiSkills:
      "Integração com LLMs, engenharia de prompt, RAG, treinamento de ML e fine-tuning.",
    infraLabel: "Infraestrutura",
    contactTitle: "Contato",
    contactDescription:
      "Para conversar sobre projetos, tecnologia ou oportunidades.",
    copyEmail: "Copiar e-mail",
    emailCopied: "E-mail copiado.",
    emailFailed:
      "Não foi possível copiar. Selecione o endereço acima para copiá-lo.",
    backTop: "Voltar ao início",
  },
  en: {
    rentRecognition: "Highest accuracy in the class’s final Artificial Intelligence evaluation · UFES",
    rentRepository: "View on GitHub",
    rentOverview: "Residential rent estimates using XGBoost, feature engineering and comparable properties. The chart shows how predictions compare with advertised rents.",
    rentMethod: "Five-fold cross-validation: each property was evaluated by a model trained on the other folds.",
    rentData: "Validation data (CSV)",
    rentMethodLink: "How the model works",

    acctsyPreview: "Acctsy website preview",
    meridianPreview: "Meridian website preview",
    tovPreview: "TOV website preview",
    gamelabPreview: "Official thumbnail of the game developed at UFES GameLab",
    rentPreview: "Actual versus predicted rent in cross-validation",

    title: "Gabriel de Albuquerque — Software Engineer",
    description:
      "CTO at Acctsy and Computer Science student at UFES. Experience in backend, full-stack development, artificial intelligence and game development.",
    skip: "Skip to content",
    navLabel: "Main navigation",
    navAbout: "About",
    navWork: "Projects",
    navContact: "Contact",
    languageLabel: "Language",
    role: "Software Engineer · CTO at Acctsy",
    bio: "I work on backend systems, web applications and artificial intelligence. I enjoy understanding a problem, building a solution and seeing how it works in practice.",
    education: "Computer Science at UFES · expected graduation in late 2027.",
    resume: "Résumé PDF (Portuguese)",
    avatarAlt: "Gabriel's GitHub avatar",
    workTitle: "Experience & projects",
    acctsyRole: "CTO · current role",
    acctsyDescription:
      "I develop a SaaS platform for accounting firms, working across architecture, APIs, interfaces and infrastructure. The product brings together document processing, financial analysis, reporting and AI model integration.",
    acctsyDetail:
      "Multi-tenant backend, asynchronous processing, prompt engineering and RAG.",
    meridianRole: "Software for clients",
    meridianDescription:
      "A custom software development initiative founded by UFES students. We build solutions for clients, turning their needs into web products.",
    meridianDetail:
      "React and TypeScript, with Node.js or PHP backends and SQLite storage.",
    tovTitle: "TOV · Law firm",
    tovDescription:
      "One of Meridian's collaborative projects: a law firm website and a custom dashboard for publishing and managing articles, helping the firm connect with its clients.",
    meridianLinkedin: "Meridian on LinkedIn",
    rentTitle: "Rental price prediction in Greater Vitória",
    rentDescription:
      "XGBoost and comparable properties. Highest accuracy in the class's final AI evaluation.",
    gamelabRole: "Game development",
    gamelabDescription:
      "I took part in creating I LOVE EATING TRASH on Roblox, contributing to the map, game mechanics and random spawning system.",
    gameLink: "Explore the game",
    academicTitle: "Academic projects",
    allProjects: "All on GitHub",
    ebpfTitle: "Deadlock detection with eBPF",
    ebpfDescription: "Instrumenting TCP services and restoring communication.",
    tcpTitle: "Remote desktop over TCP",
    tcpDescription:
      "Screen streaming and mouse and keyboard control through sockets.",
    mlTitle: "Neural networks",
    mlDescription:
      "Classification, regression and neural networks implemented with NumPy and PyTorch.",
    dijkstraTitle: "Dijkstra's algorithm",
    dijkstraDescription:
      "Array-based implementation for finding shortest paths in graphs.",
    backendLabel: "Backend",
    frontendLabel: "Frontend",
    skillsTitle: "Technologies & areas of work",
    aiLabel: "Artificial intelligence",
    aiSkills:
      "LLM integration, prompt engineering, RAG, ML model training and fine-tuning.",
    infraLabel: "Infrastructure",
    contactTitle: "Contact",
    contactDescription:
      "Get in touch about projects, technology or opportunities.",
    copyEmail: "Copy email",
    emailCopied: "Email copied.",
    emailFailed:
      "Could not copy. Select the email address above to copy it manually.",
    backTop: "Back to top",
  },
  ja: {
    rentRecognition: "UFESの人工知能科目の最終評価でクラス最高の予測精度を達成",
    rentRepository: "GitHubで見る",
    rentOverview: "XGBoost、特徴量エンジニアリング、類似物件との比較を用いた住宅家賃の予測です。募集家賃と予測値の関係をグラフで確認できます。",
    rentMethod: "5分割交差検証を実施。各物件は、その物件を含まない他のグループで学習したモデルで評価しています。",
    rentData: "検証データ（CSV）",
    rentMethodLink: "モデルの仕組み",

    acctsyPreview: "AcctsyのWebサイトのプレビュー",
    meridianPreview: "MeridianのWebサイトのプレビュー",
    tovPreview: "TOVのWebサイトのプレビュー",
    gamelabPreview: "UFES GameLabで制作したゲームの公式画像",
    rentPreview: "交差検証における実際の家賃と予測値の比較",

    title: "Gabriel de Albuquerque — ソフトウェアエンジニア",
    description:
      "AcctsyのCTO、UFESの計算機科学専攻。バックエンド、フルスタック開発、AI連携、ゲーム開発に取り組んでいます。",
    skip: "本文へ移動",
    navLabel: "メインナビゲーション",
    navAbout: "自己紹介",
    navWork: "制作実績",
    navContact: "連絡先",
    languageLabel: "表示言語",
    role: "ソフトウェアエンジニア · Acctsy CTO",
    bio: "バックエンド、Webアプリケーション、AIの開発に取り組んでいます。課題を理解し、解決策を実装し、実際に使われるところまで関わることを大切にしています。",
    education:
      "エスピリトサント連邦大学（UFES）で計算機科学を専攻。2027年末に卒業予定。",
    resume: "履歴書PDF（ポルトガル語）",
    avatarAlt: "GabrielのGitHubアバター",
    workTitle: "経験・制作実績",
    acctsyRole: "CTO · 現職",
    acctsyDescription:
      "会計事務所向けSaaSの開発で、アーキテクチャ、API、画面、インフラまで担当しています。文書処理、財務分析、レポート作成、AIモデルとの連携に取り組んでいます。",
    acctsyDetail:
      "マルチテナントのバックエンド、非同期処理、プロンプトエンジニアリング、RAG。",
    meridianRole: "クライアント向け開発",
    meridianDescription:
      "UFESの学生が立ち上げた受託ソフトウェア開発のプロジェクトです。クライアントの課題に合わせたWebプロダクトをチームで開発しています。",
    meridianDetail:
      "ReactとTypeScript、Node.jsまたはPHPのバックエンド、SQLiteを使用。",
    tovTitle: "TOV · 法律事務所",
    tovDescription:
      "Meridianで共同開発したプロジェクトの一つです。法律事務所の紹介サイトと記事の公開・管理画面を制作し、顧客との接点を整えました。",
    meridianLinkedin: "MeridianのLinkedIn",
    rentTitle: "グランデ・ヴィトーリアの家賃予測",
    rentDescription:
      "XGBoostと類似物件を利用。AI科目の最終評価でクラス最高の予測精度を達成。",
    gamelabRole: "ゲーム開発",
    gamelabDescription:
      "Robloxのゲーム「I LOVE EATING TRASH」の制作に参加しました。マップ制作、ゲームの仕組み、ランダムスポーンシステムの開発に携わりました。",
    gameLink: "ゲームを見る",
    academicTitle: "大学でのプロジェクト",
    allProjects: "GitHubで一覧を見る",
    ebpfTitle: "eBPFによるデッドロック検出",
    ebpfDescription: "TCPサービスを監視し、停止した通信を復旧する実験。",
    tcpTitle: "TCPによるリモートデスクトップ",
    tcpDescription: "ソケット通信による画面転送とマウス・キーボード操作。",
    mlTitle: "ニューラルネットワーク",
    mlDescription:
      "NumPyとPyTorchによる分類・回帰・ニューラルネットワークの実装。",
    dijkstraTitle: "ダイクストラ法",
    dijkstraDescription: "配列を用いてグラフの最短経路を求める実装。",
    backendLabel: "バックエンド",
    frontendLabel: "フロントエンド",
    skillsTitle: "技術・専門分野",
    aiLabel: "人工知能",
    aiSkills:
      "LLM連携、プロンプトエンジニアリング、RAG、機械学習モデルの訓練、ファインチューニング。",
    infraLabel: "インフラ",
    contactTitle: "連絡先",
    contactDescription:
      "プロジェクト、技術、お仕事について、お気軽にご連絡ください。",
    copyEmail: "メールをコピー",
    emailCopied: "メールアドレスをコピーしました。",
    emailFailed:
      "コピーできませんでした。上のメールアドレスを選択してコピーしてください。",
    backTop: "ページ上部へ",
  },
};

const locales = { pt: "pt-BR", en: "en", ja: "ja" };
const ogLocales = { pt: "pt_BR", en: "en_US", ja: "ja_JP" };
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
let currentLanguage = "pt";
let copyTimer;

function setLanguage(language, persist = false) {
  if (!Object.hasOwn(translations, language)) language = "pt";
  currentLanguage = language;
  const strings = translations[language];
  clearTimeout(copyTimer);
  copyStatus.textContent = "";
  document.documentElement.lang = locales[language];
  document.title = strings.title;
  document.querySelector('meta[name="description"]').content =
    strings.description;
  document.querySelector('meta[property="og:title"]').content = strings.title;
  document.querySelector('meta[property="og:description"]').content =
    strings.description;
  document.querySelector('meta[property="og:locale"]').content =
    ogLocales[language];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = strings[element.dataset.i18n];
  });
  for (const attribute of ["aria-label", "alt"]) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
      element.setAttribute(
        attribute,
        strings[element.getAttribute(`data-i18n-${attribute}`)],
      );
    });
  }
  languageButtons.forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === language),
    ),
  );
  document.querySelector("[data-game-link]").href =
    `https://www.roblox.com/${language === "pt" ? "pt" : language}/games/123797405972371/I-LOVE-EATING-TRASH`;
  document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
  if (persist) {
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
    } catch {}
  }
}

let initialLanguage = new URLSearchParams(window.location.search).get("lang");
if (!Object.hasOwn(translations, initialLanguage)) {
  try {
    initialLanguage = localStorage.getItem("portfolio-language");
  } catch {}
}
setLanguage(initialLanguage);
document.querySelector(".languages").hidden = false;
languageButtons.forEach((button) =>
  button.addEventListener("click", () =>
    setLanguage(button.dataset.lang, true),
  ),
);

if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    clearTimeout(copyTimer);
    copyButton.disabled = true;
    try {
      await navigator.clipboard.writeText("gabrieldealbuquerque1@gmail.com");
      copyStatus.textContent = translations[currentLanguage].emailCopied;
    } catch {
      copyStatus.textContent = translations[currentLanguage].emailFailed;
    } finally {
      copyButton.disabled = false;
    }
    copyTimer = setTimeout(() => {
      copyStatus.textContent = "";
    }, 6000);
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
