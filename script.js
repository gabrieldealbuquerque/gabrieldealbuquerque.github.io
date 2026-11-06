"use strict";

const translations = {
  pt: {
    rentRecognition: "Melhor precisão da turma na avaliação final de Inteligência Artificial · UFES",
    rentRepository: "Ver no GitHub",
    rentOverview: "Projeto desenvolvido em equipe na disciplina de Inteligência Artificial da UFES para estimar o aluguel mensal de casas e apartamentos na Grande Vitória. O pipeline em Python combina tratamento de dados, atributos como localização e área, XGBoost e comparação com imóveis semelhantes. O repositório inclui o modelo treinado, exemplos e uma ferramenta de previsão por CSV. O gráfico apresenta as previsões de validação, separadas por tipo de imóvel.",
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
      "Como CTO da Acctsy, atuo no desenvolvimento de um SaaS para escritórios de contabilidade, conectando a rotina dos contadores ao atendimento de seus clientes. Meu trabalho vai da arquitetura do backend e das APIs às interfaces web e à infraestrutura, com Python, FastAPI, Next.js, PostgreSQL e Docker.",
    acctsyDetail:
      "Entre as frentes do produto estão o processamento assíncrono de documentos, a análise financeira e a geração de relatórios. Integro modelos de IA a esses fluxos, com engenharia de prompt e RAG, e trabalho no isolamento de dados entre escritórios, nas permissões de acesso e na comunicação entre os módulos.",
    meridianRole: "Software para clientes",
    meridianDescription:
      "Faço parte da Meridian, uma iniciativa de estudantes da UFES voltada ao desenvolvimento de software sob demanda. Trabalhamos com clientes para entender suas necessidades e transformá-las em sites, sistemas e produtos web. Minha atuação é no desenvolvimento full stack, em equipe, conectando a interface às funcionalidades de backend. O TOV é um dos projetos entregues por essa iniciativa.",
    meridianDetail:
      "React e TypeScript, com backends Node.js ou PHP e persistência em SQLite.",
    tovTitle: "TOV · Escritório de advocacia",
    tovDescription:
      "Site institucional e painel de gestão de artigos para um escritório de advocacia, desenvolvidos em equipe pela Meridian.",
    meridianLinkedin: "Meridian no LinkedIn",
    rentTitle: "Previsão de aluguéis na Grande Vitória",
    rentDescription:
      "XGBoost e comparáveis. Melhor precisão da turma na avaliação final de IA.",
    gamelabRole: "Desenvolvimento de jogos",
    gamelabDescription:
      "No UFES GameLab, participei do desenvolvimento em equipe de I LOVE EATING TRASH, um jogo para Roblox. Contribuí para a criação do mapa, a implementação das mecânicas e o mecanismo de spawn aleatório. Trabalhei com Lua no Roblox Studio, conectando a organização do cenário à lógica do jogo e ao surgimento de elementos durante a partida.",
    gameLink: "Conhecer o jogo",
    academicTitle: "Projetos acadêmicos",
    allProjects: "Todos no GitHub",
    ebpfTitle: "Detecção de deadlock com eBPF",
    ebpfDescription:
      "Laboratório em C que reproduz um deadlock de comunicação entre três serviços TCP em containers Docker. A instrumentação com eBPF acompanha as relações de espera, identifica o ciclo e aciona a recuperação da comunicação sem reiniciar os processos. O projeto reúne programação de sistemas, redes e observabilidade no Linux.",
    tcpTitle: "Desktop remoto via TCP",
    tcpDescription:
      "Aplicação cliente-servidor em Python para transmitir a tela de um computador e controlá-lo por mouse e teclado. Usa sockets TCP, frames JPEG e mensagens de entrada em JSON, com delimitação explícita das mensagens e threads para separar vídeo e comandos. O projeto explora protocolos de comunicação, serialização e concorrência.",
    mlTitle: "Redes neurais",
    mlDescription:
      "Coleção de notebooks da UFES que percorre os fundamentos das redes neurais: neurônio de McCulloch–Pitts, classificação, regressão linear, descida do gradiente e redes multicamadas. As implementações em NumPy e PyTorch incluem backpropagation e comparação entre gradientes calculados manualmente e por autograd, aproximando a matemática do código de treinamento.",
    liftupTitle: "LiftUp · Aplicativo de treinos",
    liftupDescription: "Protótipo colaborativo de aplicativo para organizar treinos, com React Native/Expo e API REST em Node.js/Express, PostgreSQL e Prisma. Contribuí para a organização do frontend e do backend, a configuração local e o diagrama do projeto. A API reúne autenticação e operações de treinos e exercícios; a integração das telas de treino segue em desenvolvimento.",
    backendLabel: "Backend",
    frontendLabel: "Frontend",
    skillsTitle: "Tecnologias e áreas de atuação",
    aiLabel: "Inteligência artificial",
    aiSkills:
      "Integração de LLMs via APIs, engenharia de prompt, RAG, embeddings e busca semântica. Extração estruturada de documentos, OCR e pipelines de IA integrados a aplicações.",
    infraLabel: "Infraestrutura",
    securityLabel: "Segurança de aplicações",
    themeDark: "Ativar modo escuro",
    themeLight: "Ativar modo claro",
    securitySkills: "Nginx, Cloudflare e HTTPS/TLS na infraestrutura de aplicações. Autenticação com JWT e OAuth 2.0, sessões criptografadas em cookies HttpOnly e controle de acesso por papéis e permissões (RBAC).",
    securityPractices: "Isolamento de dados em SaaS multi-tenant, proteção contra CSRF, rate limiting com Redis, validação de uploads e webhooks, além de logs de auditoria.",
    contactTitle: "Contato",
    contactDescription:
      "Para conversar sobre projetos, tecnologia ou oportunidades.",
    copyEmail: "Copiar e-mail",
    emailCopied: "E-mail copiado.",
    emailFailed:
      "Não foi possível copiar. Selecione o endereço acima para copiá-lo.",
    backTop: "Voltar ao início",
    aiModelSkills: "Machine learning com scikit-learn, XGBoost e PyTorch: preparação de dados, engenharia de atributos, classificação, regressão, redes neurais, validação cruzada, avaliação de modelos e fine-tuning.",
    ebpfPreview: "Diagrama da topologia TCP e do ciclo de espera entre três serviços monitorados por eBPF",
    tcpPreview: "Demonstração do cliente de desktop remoto exibindo uma tela transmitida por TCP",
    mlPreview: "Gráfico do notebook de redes neurais comparando dados de treino, curva de referência e previsões de uma MLP",
    liftupPreview: "Identidade visual do projeto LiftUp",
  },
  en: {
    rentRecognition: "Highest accuracy in the class’s final Artificial Intelligence evaluation · UFES",
    rentRepository: "View on GitHub",
    rentOverview: "A team project for UFES's Artificial Intelligence course, estimating monthly rents for houses and apartments in Greater Vitória. The Python pipeline combines data preparation, features such as location and floor area, XGBoost and comparable properties. The repository includes the trained model, examples and a CSV prediction tool. The chart presents validation predictions by property type.",
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
      "As CTO at Acctsy, I work on a SaaS platform for accounting firms, connecting accountants' daily workflows with the services they provide to clients. My work spans backend architecture and APIs, web interfaces and infrastructure, using Python, FastAPI, Next.js, PostgreSQL and Docker.",
    acctsyDetail:
      "The product includes asynchronous document processing, financial analysis and report generation. I integrate AI models into these workflows through prompt engineering and RAG, and work on data isolation between firms, access permissions and communication between modules.",
    meridianRole: "Software for clients",
    meridianDescription:
      "I am part of Meridian, a custom software development initiative founded by UFES students. We work with clients to understand their needs and turn them into websites, systems and web products. I contribute to full-stack development within the team, connecting interfaces to backend functionality. TOV is one of the projects delivered through this initiative.",
    meridianDetail:
      "React and TypeScript, with Node.js or PHP backends and SQLite storage.",
    tovTitle: "TOV · Law firm",
    tovDescription:
      "A law firm website and article management dashboard, developed collaboratively at Meridian.",
    meridianLinkedin: "Meridian on LinkedIn",
    rentTitle: "Rental price prediction in Greater Vitória",
    rentDescription:
      "XGBoost and comparable properties. Highest accuracy in the class's final AI evaluation.",
    gamelabRole: "Game development",
    gamelabDescription:
      "At UFES GameLab, I took part in the team development of I LOVE EATING TRASH, a Roblox game. I contributed to the map, game mechanics and random spawning system. Using Lua in Roblox Studio, I connected the layout of the environment with gameplay logic and the spawning of elements during play.",
    gameLink: "Explore the game",
    academicTitle: "Academic projects",
    allProjects: "All on GitHub",
    ebpfTitle: "Deadlock detection with eBPF",
    ebpfDescription: "A C-based lab that reproduces a communication deadlock between three TCP services in Docker containers. eBPF instrumentation tracks waiting dependencies, detects the cycle and triggers communication recovery without restarting the processes. The project brings together systems programming, networking and Linux observability.",
    tcpTitle: "Remote desktop over TCP",
    tcpDescription:
      "A Python client-server application for streaming a computer's screen and controlling its mouse and keyboard. It uses TCP sockets, JPEG frames and JSON input messages, with explicit message framing and threads separating video from commands. The project explores communication protocols, serialization and concurrency.",
    mlTitle: "Neural networks",
    mlDescription:
      "A collection of UFES notebooks covering neural network fundamentals: the McCulloch–Pitts neuron, classification, linear regression, gradient descent and multilayer networks. NumPy and PyTorch implementations include backpropagation and comparisons between manually calculated gradients and autograd, connecting the mathematics to training code.",
    liftupTitle: "LiftUp · Workout app",
    liftupDescription: "A collaborative workout app prototype using React Native/Expo and a Node.js/Express REST API with PostgreSQL and Prisma. I contributed to frontend/backend organization, local setup and the project diagram. The API includes authentication and workout and exercise operations; integration with the workout screens is still in development.",
    backendLabel: "Backend",
    frontendLabel: "Frontend",
    skillsTitle: "Technologies & areas of work",
    aiLabel: "Artificial intelligence",
    aiSkills:
      "LLM integration through APIs, prompt engineering, RAG, embeddings and semantic search. Structured document extraction, OCR and AI pipelines integrated into applications.",
    infraLabel: "Infrastructure",
    securityLabel: "Application security",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
    securitySkills: "Nginx, Cloudflare and HTTPS/TLS for application infrastructure. JWT and OAuth 2.0 authentication, encrypted sessions in HttpOnly cookies, and role- and permission-based access control (RBAC).",
    securityPractices: "Data isolation in multi-tenant SaaS, CSRF protection, rate limiting with Redis, upload and webhook validation, and audit logs.",
    contactTitle: "Contact",
    contactDescription:
      "Get in touch about projects, technology or opportunities.",
    copyEmail: "Copy email",
    emailCopied: "Email copied.",
    emailFailed:
      "Could not copy. Select the email address above to copy it manually.",
    backTop: "Back to top",
    aiModelSkills: "Machine learning with scikit-learn, XGBoost and PyTorch: data preparation, feature engineering, classification, regression, neural networks, cross-validation, model evaluation and fine-tuning.",
    ebpfPreview: "Diagram of the TCP topology and waiting cycle between three services monitored with eBPF",
    tcpPreview: "Remote desktop client demonstration showing a screen transmitted over TCP",
    mlPreview: "Neural network notebook plot comparing training data, a reference curve and MLP predictions",
    liftupPreview: "LiftUp project visual identity",
  },
  ja: {
    rentRecognition: "UFESの人工知能科目の最終評価でクラス最高の予測精度を達成",
    rentRepository: "GitHubで見る",
    rentOverview: "UFESの人工知能科目でチーム開発した、グランデ・ヴィトーリアの集合住宅と一戸建ての月額家賃を予測するプロジェクトです。Pythonでデータを前処理し、所在地や面積などの特徴量、XGBoost、類似物件との比較を組み合わせています。リポジトリには学習済みモデル、入力例、CSVから予測するツールを収録しています。グラフでは物件種別ごとに検証時の予測値を確認できます。",
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
      "AcctsyのCTOとして、会計事務所向けSaaSを開発しています。会計担当者の日々の業務と顧客対応をつなぐサービスで、バックエンド設計やAPIからWeb画面、インフラまで担当しています。主な技術はPython、FastAPI、Next.js、PostgreSQL、Dockerです。",
    acctsyDetail:
      "文書の非同期処理、財務分析、レポート生成に取り組んでいます。プロンプトエンジニアリングとRAGを用いてAIモデルを業務フローに組み込み、事務所ごとのデータ分離、アクセス権限、モジュール間の連携も実装しています。",
    meridianRole: "クライアント向け開発",
    meridianDescription:
      "UFESの学生が立ち上げた受託ソフトウェア開発のプロジェクト、Meridianに参加しています。クライアントの要望を理解し、Webサイトやシステム、Webプロダクトとして形にしています。チームでフルスタック開発を担当し、画面とバックエンドの機能をつなぐ実装に取り組んでいます。TOVはその制作実績の一つです。",
    meridianDetail:
      "ReactとTypeScript、Node.jsまたはPHPのバックエンド、SQLiteを使用。",
    tovTitle: "TOV · 法律事務所",
    tovDescription:
      "Meridianのチームで開発した、法律事務所の紹介サイトと記事管理画面です。",
    meridianLinkedin: "MeridianのLinkedIn",
    rentTitle: "グランデ・ヴィトーリアの家賃予測",
    rentDescription:
      "XGBoostと類似物件を利用。AI科目の最終評価でクラス最高の予測精度を達成。",
    gamelabRole: "ゲーム開発",
    gamelabDescription:
      "UFES GameLabで、Roblox向けゲーム「I LOVE EATING TRASH」のチーム開発に参加しました。マップ制作、ゲームの仕組み、ランダムスポーンシステムを担当しました。Roblox StudioでLuaを使い、ステージの構成とゲームのロジック、プレイ中に要素が出現する仕組みを組み合わせました。",
    gameLink: "ゲームを見る",
    academicTitle: "大学でのプロジェクト",
    allProjects: "GitHubで一覧を見る",
    ebpfTitle: "eBPFによるデッドロック検出",
    ebpfDescription: "Docker上の3つのTCPサービス間で通信デッドロックを再現する、C言語の実験環境です。eBPFで待機関係を追跡して循環を検出し、プロセスを再起動せずに通信を復旧します。システムプログラミング、ネットワーク、Linuxの実行状態の観測を扱うプロジェクトです。",
    tcpTitle: "TCPによるリモートデスクトップ",
    tcpDescription: "画面転送とマウス・キーボード操作を行う、Pythonのクライアント・サーバー型アプリケーションです。TCPソケット、JPEGフレーム、JSON形式の入力メッセージを使い、メッセージ境界を明示して映像と操作を別のスレッドで処理します。通信プロトコル、シリアライズ、並行処理を学ぶ実装です。",
    mlTitle: "ニューラルネットワーク",
    mlDescription:
      "UFESで取り組んだ、ニューラルネットワークの基礎を学ぶノートブック集です。McCulloch–Pittsニューロン、分類、線形回帰、勾配降下法、多層ネットワークを扱います。NumPyとPyTorchによる誤差逆伝播や、手計算の勾配とautogradの比較を通じて、数式と学習コードを結び付けています。",
    liftupTitle: "LiftUp · トレーニングアプリ",
    liftupDescription: "React Native／Expoと、Node.js／Express、PostgreSQL、PrismaのREST APIを組み合わせた、チーム開発のトレーニング管理アプリのプロトタイプです。フロントエンドとバックエンドの構成整理、ローカル実行環境、設計図の作成に貢献しました。APIには認証とトレーニング・種目の管理機能があり、トレーニング画面との連携は開発中です。",
    backendLabel: "バックエンド",
    frontendLabel: "フロントエンド",
    skillsTitle: "技術・専門分野",
    aiLabel: "人工知能",
    aiSkills:
      "APIを介したLLM連携、プロンプトエンジニアリング、RAG、埋め込み表現、意味検索。文書からの構造化データ抽出、OCR、アプリケーションに組み込むAIパイプライン。",
    infraLabel: "インフラ",
    securityLabel: "アプリケーションセキュリティ",
    themeDark: "ダークモードに切り替える",
    themeLight: "ライトモードに切り替える",
    securitySkills: "Nginx、Cloudflare、HTTPS／TLSを用いたアプリケーション基盤。JWT・OAuth 2.0による認証、HttpOnly Cookieに保存する暗号化セッション、ロールと権限に基づくアクセス制御（RBAC）。",
    securityPractices: "マルチテナントSaaSでのデータ分離、CSRF対策、Redisによるレート制限、アップロードとWebhookの検証、監査ログ。",
    contactTitle: "連絡先",
    contactDescription:
      "プロジェクト、技術、お仕事について、お気軽にご連絡ください。",
    copyEmail: "メールをコピー",
    emailCopied: "メールアドレスをコピーしました。",
    emailFailed:
      "コピーできませんでした。上のメールアドレスを選択してコピーしてください。",
    backTop: "ページ上部へ",
    aiModelSkills: "scikit-learn、XGBoost、PyTorchによる機械学習。データ前処理、特徴量エンジニアリング、分類、回帰、ニューラルネットワーク、交差検証、モデル評価、ファインチューニング。",
    ebpfPreview: "eBPFで監視する3つのサービスのTCP構成と循環待機の図",
    tcpPreview: "TCPで転送した画面を表示するリモートデスクトップクライアントのデモ",
    mlPreview: "学習データ、基準曲線、MLPの予測を比較するニューラルネットワークのノートブックのグラフ",
    liftupPreview: "LiftUpプロジェクトのロゴ",
  },
};

const locales = { pt: "pt-BR", en: "en", ja: "ja" };
const ogLocales = { pt: "pt_BR", en: "en_US", ja: "ja_JP" };
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
let currentLanguage = "pt";
let copyTimer;
const themeButton = document.querySelector(".theme-toggle");

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  const label = translations[currentLanguage][dark ? "themeLight" : "themeDark"];
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
}

function setTheme(theme, persist = false) {
  const dark = theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#161c19" : "#fafbf9";
  updateThemeButton();
  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {}
  }
}

themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
});
themeButton.hidden = false;
window.addEventListener("storage", (event) => {
  if (event.key === "portfolio-theme" || event.key === null) setTheme(event.newValue);
});

function setLanguage(language, persist = false) {
  if (!Object.hasOwn(translations, language)) language = "pt";
  currentLanguage = language;
  const strings = translations[language];
  clearTimeout(copyTimer);
  copyStatus.textContent = "";
  document.documentElement.lang = locales[language];
  document.title = strings.title;
  updateThemeButton();
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
