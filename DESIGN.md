---
name: Gabriel de Albuquerque
description: Portfólio pessoal minimalista em português, inglês e japonês.
colors:
  accent: "#315f4a"
  background: "#fafbf9"
  text: "#252b28"
  muted: "#626b65"
  line: "#e1e5df"
  selection: "#dce9de"
  copy-border: "#cdd6ce"
  copy-hover: "#edf2ec"
typography:
  display:
    fontFamily: 'Manrope, "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif'
    fontSize: "clamp(30px, 3.7vw, 42px)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  headline:
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  title:
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: 'Manrope, "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  detail:
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.8
  control:
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  control: "5px"
  avatar: "16px"
  focus: "2px"
  preview: "6px"
spacing:
  gutter: "48px"
  gutter-tablet: "30px"
  gutter-mobile: "20px"
  section: "64px"
  section-compact: "48px"
components:
  copy-email:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px 13px"
  copy-email-hover:
    backgroundColor: "{colors.copy-hover}"
  text-link:
    textColor: "{colors.text}"
    typography: "{typography.label}"
  language:
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    padding: "6px 9px"
  language-selected:
    textColor: "{colors.accent}"
---

# Design System: Gabriel de Albuquerque

## Overview

Portfólio minimalista, compacto e orientado à leitura. A inspiração leve em jhvlima.github.io se traduz em apresentação pessoal direta, tipografia discreta e links visíveis. Esta documentação descreve o site atual em `index.html`, `styles.css` e `script.js`.

**Key Characteristics:**
- Fundo claro, texto escuro e acento verde contido.
- Uma família visual sans-serif, com suporte a português, inglês e japonês.
- Avatar real do GitHub, separadores finos e conteúdo sem sombras.

## Colors

O verde `accent` identifica função profissional, ponto do nome, links contextuais, idioma selecionado e foco. Os neutros `background`, `text` e `muted` distinguem superfície, leitura principal e informação secundária; `line` separa grupos. `selection` marca texto selecionado. `copy-border` e `copy-hover` pertencem ao botão de copiar e-mail.

## Typography

Manrope e Noto Sans JP são fontes locais com `font-display: swap`; a pilha completa está no frontmatter. O nome usa `display`, as seções `headline`, os trabalhos `title`, e o texto usa `body` ou `detail`. Rótulos e controles usam `label` e `control`. Títulos têm peso moderado, sem itálico. Textos da apresentação e dos trabalhos limitam-se, respectivamente, a (60ch) e (68ch).

Em japonês, o corpo passa a entrelinha (1.95), e títulos de seção e trabalho retiram o espaçamento negativo entre letras. O nome próprio conserva `lang="pt-BR"`.

## Layout

O contêiner central tem largura máxima (1008px), incluindo margens internas. Na página atual, a abertura combina texto e avatar de (144px); trabalhos usam coluna de identificação de (300px), intervalo de (36px) e descrição flexível. Competências dividem duas colunas; segurança de aplicações ocupa uma linha completa, com texto limitado a (78ch). O intervalo principal entre seções é `section`.

Até (900px), a coluna das experiências passa a (240px) e o projeto TOV empilha prévia e descrição; até (600px), toda a experiência ocupa uma coluna. Até (760px), as margens usam `gutter-tablet`, o intervalo de seção usa `section-compact`, o nome mede (32px) e o avatar (112px). A biografia passa a ocupar toda a largura. Até (520px), as margens usam `gutter-mobile`, o nome mede (29px), as seções (19px) e o avatar (80px); trabalhos, competências e ações de contato empilham. Navegação e idiomas continuam visíveis. A linguagem dos projetos acadêmicos é omitida apenas nessa largura.

Prévias reais dos projetos ocupam a largura da coluna, preservando a proporção original e o conteúdo completo. O TOV permanece subordinado à Meridian. O projeto de aluguéis tem um bloco próprio com título, resultado na turma, gráfico interativo e acesso ao repositório e aos dados.

O currículo usa Manrope em uma página A4, com corpo de 10,5 pt, texto mínimo de 10 pt, margens de 14 mm por 16 mm e separação clara entre experiências, projetos, competências e formação.

## Elevation & Depth

A interface é plana, sem sombras. Espaçamento, hierarquia tipográfica e divisores de (1px) organizam a leitura.

## Shapes

O avatar tem cantos suaves, com raio `avatar`, reduzido para (12px) e (10px) nos dois breakpoints. O botão de cópia usa `control`; foco usa `focus`. Ícones são SVG lineares, normalmente (16px), com traço (1.6) e terminais arredondados; links menores usam (14px), e o contato usa (18px) no desktop.

## Components

- **Links e navegação:** texto simples, verde no hover e sublinhado nos links de navegação, perfil e contexto. Links de perfil têm ícone e altura mínima de (36px).
- **Idiomas:** grupo PT / EN / 日本語. O idioma ativo usa verde, peso (700), sublinhado de (2px) e `aria-pressed`. A escolha atualiza textos e rótulos acessíveis; URL e armazenamento local preservam a preferência.
- **Trabalhos e projetos:** linhas separadas por filetes. Trabalhos combinam título, atribuição e descrição; projetos acadêmicos são links de linha inteira, com título, descrição, tecnologias e seta. eBPF, desktop remoto, redes neurais e LiftUp têm prévias de (300px) em uma coluna própria, reduzida para (240px) até (900px) e empilhada até (600px), sempre sem corte.
- **Gráfico de aluguéis:** SVG com dados reais de validação, eixos logarítmicos fixos e filtros por tipo. Círculos verdes representam apartamentos; quadrados castanhos representam casas. A leitura funciona por cursor, toque e teclado, com valores anunciados, previstos e erro percentual. A imagem estática é o fallback sem JavaScript ou sem os dados.
- **Contato:** endereço clicável e botão de cópia contornado, com altura mínima de (38px). O botão aparece em contexto seguro com Clipboard API, fica desabilitado durante a cópia e anuncia resultado ou falha por seis segundos.
- **Foco e movimento:** links e botões recebem contorno verde de (2px), afastado (5px). Não há animações ou transições; somente rolagem suave, desativada por preferência de movimento reduzido. Conteúdo e contato permanecem acessíveis sem JavaScript; controles dependentes dele começam ocultos.

## Do's and Don'ts

- **Do** preserve a escala tipográfica contida, os neutros claros e o acento verde.
- **Do** mantenha o avatar do GitHub, foco visível e os três idiomas com espaço para quebra de texto.
- **Do** preserve links diretos, atribuições corretas e descrições concretas dos projetos.
- **Don't** retome os títulos enormes em itálico ou o carrossel de capturas rejeitados pelo usuário.
- **Don't** acrescente métricas ou níveis de proficiência inventados.

## Temas

O tema inicial é claro. O botão com ícones lineares de lua e sol fica ao lado dos idiomas no desktop e no canto superior direito, acima da navegação, em telas de até (600px). A escolha é salva localmente e aplicada antes do CSS para evitar uma abertura clara ao retornar no modo escuro. O modo escuro usa uma paleta neutra: fundo carvão (#191919), texto (#dedede), texto secundário (#a6a6a6), links (#c5c5c5) e divisores (#333333). Gráfico, controles, seleção e barras de rolagem acompanham esses cinzas, sem acento verde. No gráfico, casas usam um tom castanho discreto (#bca68c) e marcadores quadrados para manter a distinção entre séries. As imagens preservam suas cores. Os textos mantêm alinhamento à esquerda.
