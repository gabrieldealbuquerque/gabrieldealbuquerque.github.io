# Gabriel de Albuquerque

Portfólio pessoal com experiência na Acctsy, Meridian/TOV, UFES GameLab, projetos acadêmicos, prévias visuais e currículo em PDF. Interface em português, inglês e japonês.

**Site:** https://gabrieldealbuquerque.github.io/

## Executar

Sem dependências de runtime ou etapa de build. Na pasta do projeto:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Abra http://localhost:8765. O conteúdo em português funciona sem JavaScript. A troca de idioma e a cópia de e-mail são melhorias opcionais. O currículo PDF permanece em português, com essa indicação nos outros idiomas.

O idioma selecionado é salvo localmente e pode ser compartilhado usando `?lang=pt`, `?lang=en` ou `?lang=ja`. A escolha na URL tem prioridade sobre a preferência salva.

## Arquivos

- `index.html`: conteúdo, navegação e metadados.
- `styles.css`: layout responsivo e tokens visuais.
- `script.js`: traduções, preferência de idioma e cópia de e-mail.
- `rental-chart.js` e `rental-chart.css`: gráfico interativo de validação com filtros por tipo de imóvel.
- `assets/data/rental-oof.csv`: 3.283 previsões anônimas de validação, sem anúncios, endereços ou identificadores.
- `curriculo.html`: fonte do currículo; imprimir em A4, sem cabeçalhos ou rodapés do navegador, para atualizar `assets/Gabriel-de-Albuquerque-Curriculo.pdf`.
- `assets/`: fontes locais, avatar do GitHub, prévias dos projetos, currículo e imagem de compartilhamento.
- `DESIGN.md`: decisões e tokens de design.

## GitHub Pages

Repositório pessoal `gabrieldealbuquerque.github.io`. Em **Settings → Pages**, usar **Deploy from a branch**, branch `main`, pasta `/(root)`. O arquivo `.nojekyll` mantém a publicação estática.

[Documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Conteúdo e créditos

Os dados pessoais e áreas de atuação foram confirmados por Gabriel. As descrições técnicas foram conferidas no código dos projetos e nos repositórios públicos. O TOV foi desenvolvido em equipe, pela Meridian. A Meridian é uma iniciativa independente, sem vínculo institucional com a UFES.

O avatar foi obtido do perfil público de Gabriel no GitHub. As contribuições no UFES GameLab foram confirmadas por ele: mapa, mecânicas e spawn aleatório em Lua. Marcas e conteúdos dos projetos pertencem aos respectivos titulares.

Fontes Manrope e Noto Sans JP sob SIL Open Font License, com licenças em `assets/fonts/`. A fonte japonesa contém os caracteres usados nas traduções; ao adicionar texto em japonês, atualize esse subconjunto. Veja `SOURCES.md` para a origem dos materiais.

O projeto de previsão de aluguéis tem destaque próprio e um gráfico de validação cruzada. As imagens da Acctsy, Meridian e TOV são capturas de seus sites públicos; GameLab usa a thumbnail oficial do jogo.

O gráfico permite inspecionar os valores anunciados e previstos e filtrar por tipo de imóvel. Sem JavaScript ou quando os dados não carregam, a imagem estática permanece disponível. Os dados são locais ao site, sem chamadas a serviços de IA ou rastreadores.
