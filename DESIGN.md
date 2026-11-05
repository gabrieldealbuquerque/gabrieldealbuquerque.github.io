---
name: Gabriel de Albuquerque
description: Portfólio editorial de software, produto e inteligência artificial.
colors:
  paper: "#f6f5ef"
  ink: "#252823"
  muted: "#66695e"
  line: "#d6d7cc"
  accent: "#ad3628"
  sage: "#e7eadd"
  dark: "#272d25"
  dark-muted: "#c5cbba"
  dark-line: "#515949"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(64px, 6.55vw, 96px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-emphasis:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.04em"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(40px, 4.25vw, 58px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "31px"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  body-detail:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.85
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.75
  cv-body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "10pt"
    fontWeight: 400
    lineHeight: 1.36
  cv-contact:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "9pt"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  circle: "50%"
spacing:
  gutter: "clamp(24px, 5vw, 80px)"
  gutter-tablet: "28px"
  gutter-mobile: "22px"
  detail: "16px"
  inline: "20px"
  group: "24px"
  project-gap: "54px"
  section: "110px"
  section-compact: "85px"
  section-tablet: "72px"
  section-mobile: "59px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    padding: "10px 19px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  copy-email:
    typography: "{typography.label}"
    padding: "9px 14px"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  project-selector:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "8px 0"
  project-selector-selected:
    textColor: "{colors.accent}"
  disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "14px 0"
  project-case:
    textColor: "{colors.ink}"
  preview-open:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
---

# Design System: Gabriel de Albuquerque

## Overview

**Creative North Star: "Fólio pessoal cuidadosamente composto"**

Um fólio pessoal cuidadosamente composto: papel quente, tinta escura e um acento vermelho contido. A inspiração editorial japonesa aparece na assimetria, nos intervalos de leitura e na economia de formas.

Manrope sustenta a leitura técnica; Instrument Serif em itálico introduz uma assinatura humana no nome e nos títulos. Capturas reais de projetos ficam sobre fundos suaves, enquanto filetes e espaço separam o conteúdo. A interface mantém densidade moderada, ações visíveis e leitura contínua no celular.

**Key Characteristics:**

- Fundo claro quente com contraste de tinta escura.
- Hierarquia tipográfica expressiva, com itálico serifado pontual.
- Projetos apresentados como evidências visuais, com molduras planas.
- Movimento breve, acionado pelo usuário e dispensável à leitura.

## Colors

A paleta combina papel quente, carvão e sálvia, com um vermelho seco usado com parcimônia. Os valores normativos estão no frontmatter; os nomes abaixo indicam sua aplicação.

### Primary

- **Vermelhão editorial — `accent`:** assinatura no nome, marcadores, seleção, foco e estados de hover.

### Secondary

- **Sálvia clara — `sage`:** suporte visual do projeto principal e superfície de contato.

### Neutral

- **Papel quente — `paper`:** fundo principal e texto invertido.
- **Tinta carvão — `ink`:** títulos, texto principal e ação preenchida.
- **Cinza oliva — `muted`:** descrições e metadados sobre papel.
- **Filete de papel — `line`:** divisores finos, bordas de detalhes e navegação de projetos.
- **Carvão vegetal — `dark`:** faixa de competências.
- **Texto e filete sobre carvão — `dark-muted`, `dark-line`:** leitura secundária e separadores na faixa escura.

**The Acento Contido Rule.** Use o vermelho para assinatura, foco e estados de interação; mantenha superfícies extensas em papel, sálvia ou tinta escura.

## Typography

**Display Font:** Manrope, com Arial e sans-serif como alternativas.

**Body Font:** Manrope.

**Editorial Emphasis:** Instrument Serif em itálico, com Georgia e serif como alternativas.

A sans-serif mantém precisão nos textos técnicos. O contraste serifado muda o ritmo de títulos sem criar uma terceira voz tipográfica. As fontes são locais, em WOFF2, com `font-display: swap`.

### Hierarchy

- **Display:** `display` compõe o nome; `display-emphasis` define seu trecho serifado em itálico.
- **Headline:** `headline` organiza seções. A ênfase serifada dos títulos usa tamanho relativo de `1.1em`.
- **Title:** `title` identifica os projetos profissionais.
- **Statement:** `statement` introduz a função de cada projeto; os textos têm até `30ch` no caso principal.
- **Body:** `body` é a base; `body-detail` sustenta descrições mais densas. Blocos longos de projetos limitam-se a aproximadamente `65–66ch` onde o layout permite.
- **Action / Label:** ações recebem peso maior; rótulos e metadados permanecem discretos. Essa escala não constitui uma regra para acrescentar subtítulos decorativos acima de títulos.
- **Currículo:** `cv-body` e `cv-contact` descrevem a variante documental; títulos de seção usam `11pt`. A impressão é A4, com margens de `12mm 14mm`.

**The Duas Vozes Rule.** Mantenha Manrope em textos e controles; reserve Instrument Serif em itálico à ênfase editorial dos títulos.

## Layout

O conteúdo ocupa um contêiner de até `1280px`, centralizado, com margens fluidas dadas por `gutter`. A abertura usa colunas `1.13fr 1fr`; o projeto principal, `1.1fr 1fr`; os projetos seguintes dividem duas colunas iguais. O espaçamento `section` estabelece a pausa principal entre blocos. A faixa de competências e o contato podem ocupar toda a largura.

- Até `1100px`, reduzem-se os intervalos e o nome passa a `75px`; as seções usam `section-compact`.
- Até `800px`, abertura, projeto principal, competências e apresentação pessoal ficam em uma coluna. As margens usam `gutter-tablet`; as seções, `section-tablet`; o nome usa `clamp(68px, 11vw, 90px)`.
- Até `520px`, os projetos em dupla também empilham; margens e seções usam `gutter-mobile` e `section-mobile`. O nome usa `clamp(54px, 14.6vw, 75px)`, e os títulos gerais, `40px`. A navegação continua visível, sem menu oculto.
- A partir de `1500px`, a abertura recebe mais espaço vertical, mantendo o limite do contêiner.

A ordem de leitura se mantém entre larguras. E-mail pode quebrar linha no celular. Na impressão, imagens promocionais e controles são omitidos para priorizar o conteúdo.

## Elevation & Depth

A superfície é predominantemente plana. Profundidade aparece nas capturas de sites, apoiadas em fundos suaves; não há uma camada universal de cartões elevados. Filetes de `1px` e alternância tonal delimitam os demais blocos.

### Shadow Vocabulary

- **Prévia:** `0 12px 32px #25282313`, somente na captura da abertura.
- **Projeto:** `0 10px 26px #20271b18`, nas capturas dos casos profissionais.

**The Papel Plano Rule.** Use filetes e fundos tonais para separar conteúdo; as sombras suaves pertencem às capturas de projetos.

## Shapes

Botões, molduras, retrato e áreas textuais usam contornos retos. A curva fica reservada a elementos pequenos: ponto de estado, marca circular da prévia e abertura da captura. O token `circle` registra esse círculo. Não há uma escala de cartões arredondados.

Ícones são SVG lineares, normalmente de `20px`, com traço `1.6`, terminais e junções arredondados. As variações menores acompanham metadados; a seta de contato ganha dimensão maior.

## Components

### Buttons

A ação preenchida usa tinta sobre papel invertido, borda da mesma cor e altura mínima de `49px`. O hover troca fundo e borda para o acento em `0.2s`. O link de apoio tem altura mínima de `44px`, ícone menor e sublinhado no hover. O controle de copiar e-mail é contornado, com altura mínima de `40px`, e só aparece quando a API de clipboard está disponível em contexto seguro.

Links, botões e resumos expansíveis recebem contorno de foco de `2px`, afastado `6px`. Na faixa escura, o foco usa papel para manter visibilidade. O copiar e-mail apresenta confirmação ou instrução de seleção manual por cinco segundos.

### Navigation

Links de texto com peso de ação, espaçados horizontalmente. O hover usa o acento. Em telas menores, diminuem os intervalos e a tipografia; o ícone complementar e a nota da marca são removidos quando necessário, preservando os links.

### Project Cases

Casos usam título, atribuição, frase de abertura, descrição, tecnologias e link. As capturas têm fundo tonal próprio e sombra de papel, sem envolver todo o texto em um cartão. No hover, a captura se desloca discretamente para cima (`5px`, em `0.7s`).

### Project Preview

A seleção é um grupo de botões com `aria-pressed`. O item ativo ganha acento, peso `700` e filete superior de `2px`. Setas, Home e End alternam os projetos com foco preservado; não há avanço automático. A troca revela a captura por `clip-path` em `0.55s`, usando `cubic-bezier(0.16, 1, 0.3, 1)`.

### Disclosure

Detalhes usam o elemento HTML nativo `details`, entre filetes, com resumo clicável e ícone de mais. Quando aberto, o ícone gira `45deg` em `0.2s`. Texto adicional mantém a escala de descrição.

### Motion and Accessibility

Movimento reduzido desativa transições e animações, além do scroll suave. O conteúdo inicial permanece legível sem JavaScript, e controles dependentes de JavaScript começam ocultos. A interação complementa a informação; não condiciona sua leitura.

## Do's and Don'ts

### Do:

- **Do** reutilize as cores e famílias do frontmatter, mantendo o itálico serifado como ênfase.
- **Do** conserve ações e links reconhecíveis, foco visível e navegação por teclado.
- **Do** preserve texto, imagens e contato em uma coluna quando o espaço diminuir.
- **Do** use capturas reais, atribuições corretas e descrições concretas do trabalho.
- **Do** mantenha a leitura sem JavaScript e respeite a preferência por movimento reduzido.

### Don't:

- **Don't** transforme a inspiração japonesa em texto fictício ou símbolos culturais decorativos.
- **Don't** aplique sombras de cartões a blocos de texto nem arredondamento amplo às molduras.
- **Don't** anime a troca de projetos automaticamente ou esconda conteúdo para revelá-lo no scroll.
- **Don't** substitua evidências por métricas inventadas, depoimentos ou barras de proficiência.
