const projectSeeds = [
  {
    name: 'kubedock-security-scan',
    title: 'KubeDock Security Scan',
    repo: 'chloe-teo/kubedock-security-scan',
    url: 'https://github.com/chloe-teo/kubedock-security-scan',
    description:
      'Azure DevOps extension for scanning Kubernetes manifests, Dockerfiles, and Helm charts with Checkov, then surfacing results in the pipeline summary and PR comments.',
    titleFr: 'Analyse de securite KubeDock',
    descriptionFr:
      'Extension Azure DevOps qui analyse les manifestes Kubernetes, les Dockerfiles et les charts Helm avec Checkov, puis affiche les resultats dans le resume du pipeline et les commentaires de pull request.',
    summary: 'Azure DevOps extension for scanning Kubernetes manifests, Dockerfiles, and Helm charts with Checkov, then surfacing results in pipeline summaries and pull request comments.',
    summaryFr: 'Extension Azure DevOps qui analyse les manifestes Kubernetes, les Dockerfiles et les charts Helm avec Checkov, puis affiche les resultats dans les resumes de pipeline et les commentaires de pull request.',
    summaryDetails: [
      { keyword: 'DevSecOps', text: 'makes security part of everyday delivery.' },
      { keyword: 'Shift-left security', text: 'surfaces findings before deployment.' },
      { keyword: 'Developer autonomy', text: 'lets teams act on clear feedback without waiting for a separate security handoff.' },
    ],
    summaryDetailsFr: [
      { keyword: 'DevSecOps', text: 'integre la securite au quotidien de la livraison.' },
      { keyword: 'Securite shift-left', text: 'fait remonter les resultats avant le deploiement.' },
      { keyword: 'Autonomie des developpeurs', text: 'permet aux equipes d agir sur des retours clairs sans attendre une transmission distincte de la securite.' },
    ],
    summarySections: [
      {
        heading: 'What it does:',
        items: [
          '🔍 Scans Kubernetes manifests, Dockerfiles, and Helm charts for security misconfigurations.',
          '📋 Publishes a detailed HTML report as a dedicated KubeDock Scan tab in the pipeline summary.',
          '💬 Posts inline PR comments on violations when used as a branch policy build validation pipeline.',
          '📊 Emits per-check metrics via OpenTelemetry for observability dashboards such as Grafana.',
        ],
      },
      {
        heading: 'What it solves:',
        items: [
          '⚡ Gives development teams immediate feedback on security issues during the pull request stage, rather than at runtime.',
          '🛡️ Enforces a consistent security baseline across repositories without requiring each team to configure Checkov themselves.',
        ],
      },
    ],
    summarySectionsFr: [
      {
        heading: 'Ce que fait le projet :',
        items: [
          '🔍 Analyse les manifestes Kubernetes, les Dockerfiles et les charts Helm pour detecter les mauvaises configurations de securite.',
          '📋 Publie un rapport HTML detaille dans un onglet KubeDock Scan dedie du resume de pipeline.',
          '💬 Publie des commentaires inline dans les pull requests pour les violations lorsqu il est utilise comme validation de build par une regle de branche.',
          '📊 Emet des metriques par controle via OpenTelemetry pour les tableaux de bord d observabilite tels que Grafana.',
        ],
      },
      {
        heading: 'Ce que le projet resout :',
        items: [
          '⚡ Donne aux equipes de developpement un retour immediat sur les problemes de securite pendant la pull request, plutot qu au moment de l execution.',
          '🛡️ Impose une base de securite coherente dans tous les depots sans demander a chaque equipe de configurer Checkov elle-meme.',
        ],
      },
    ],
    chips: ['Azure DevOps', 'Checkov', 'Kubernetes', 'Dockerfile', 'Telemetry'],
    impact: 'Moves security checks earlier in the delivery workflow by scanning infrastructure and container configuration before changes reach production, while making findings visible where developers already work.',
    impactFr: 'Deplace les controles de securite plus tot dans le processus de livraison en analysant l infrastructure et la configuration des conteneurs avant la mise en production, tout en affichant les resultats la ou les developpeurs travaillent deja.',
    benefits: 'Combines Checkov scans, pipeline summaries, and pull request comments to reduce context switching, support faster remediation, and give platform teams a consistent security feedback loop.',
    benefitsFr: 'Combine les analyses Checkov, les resumes de pipeline et les commentaires de pull request pour reduire les changements de contexte, accelerer les corrections et offrir aux equipes plateforme une boucle de retour de securite coherente.',
  },
  {
    name: 'azure-modules',
    title: 'Azure Terraform Modules',
    repo: 'chloe-teo/azure-modules',
    url: 'https://github.com/chloe-teo/azure-modules',
    description:
      'A shared module library for Azure infrastructure, including resource groups, VNets, AKS, ACR, service plans, Function Apps, storage, and monitoring.',
    titleFr: 'Modules Terraform Azure',
    descriptionFr:
      'Bibliotheque de modules partagee pour l infrastructure Azure, comprenant les groupes de ressources, les VNets, AKS, ACR, les plans de service, les Function Apps, le stockage et la supervision.',
    summary: 'Shared Azure infrastructure module library covering resource groups, VNets, AKS, ACR, service plans, Function Apps, storage, and monitoring.',
    summaryFr: 'Bibliotheque de modules d infrastructure Azure partagee couvrant les groupes de ressources, les VNets, AKS, ACR, les plans de service, les Function Apps, le stockage et la supervision.',
    summarySections: [{ heading: 'What it includes:', items: ['Reusable Terraform modules for core Azure services and platform foundations.', 'Shared building blocks for networking, AKS, registries, storage, application services, and monitoring.'] }],
    summarySectionsFr: [{ heading: 'Ce que le projet inclut :', items: ['Modules Terraform reutilisables pour les services Azure essentiels et les fondations de plateforme.', 'Composants partages pour le reseau, AKS, les registres, le stockage, les services applicatifs et la supervision.'] }],
    chips: ['Terraform', 'Azure', 'Reusable modules', 'AKS', 'Networking'],
    impact: 'Standardizes common Azure infrastructure patterns into reusable building blocks for platform delivery.',
    impactFr: 'Standardise les modeles courants d infrastructure Azure en composants reutilisables pour la mise en place de plateformes.',
    benefits: 'Reduces duplication and makes Azure environments easier to provision, review, and extend.',
    benefitsFr: 'Reduit la duplication et facilite le provisionnement, la revue et l extension des environnements Azure.',
  },
  {
    name: 'aks-infra',
    title: 'AKS Infrastructure',
    repo: 'chloe-teo/aks-infra',
    url: 'https://github.com/chloe-teo/aks-infra',
    description:
      'Terragrunt-driven AKS platform with layered environments, shared root configuration, and a bootstrap flow for dev and production stacks.',
    titleFr: 'Infrastructure AKS',
    descriptionFr:
      'Plateforme AKS pilotee par Terragrunt, avec des environnements en couches, une configuration racine partagee et un processus d initialisation pour les environnements de developpement et de production.',
    summary: 'Terragrunt-driven AKS platform with layered environments, shared root configuration, and bootstrap flows for development and production.',
    summaryFr: 'Plateforme AKS pilotee par Terragrunt avec des environnements en couches, une configuration racine partagee et des processus d initialisation pour le developpement et la production.',
    summarySections: [{ heading: 'What it includes:', items: ['Layered development and production environments with shared root configuration.', 'Terragrunt orchestration of the reusable Azure modules for a repeatable AKS platform.'] }],
    summarySectionsFr: [{ heading: 'Ce que le projet inclut :', items: ['Environnements de developpement et de production en couches avec une configuration racine partagee.', 'Orchestration Terragrunt des modules Azure reutilisables pour une plateforme AKS reproductible.'] }],
    chips: ['Terragrunt', 'AKS', 'Environment layers', 'Bootstrap', 'Azure'],
    impact: 'Creates a repeatable AKS platform flow with clear separation between shared configuration and environments.',
    impactFr: 'Met en place un processus AKS reproductible avec une separation claire entre la configuration partagee et les environnements.',
    benefits: 'Makes development and production setup more consistent while keeping environment-specific changes explicit.',
    benefitsFr: 'Rend la configuration du developpement et de la production plus coherente tout en gardant les changements propres a chaque environnement explicites.',
  },
];

const frenchTranslations = {
  eyebrow: 'DevOps · Infrastructure cloud · Ingenierie logicielle',
  languageLabel: 'Langue', themeLabel: 'Theme', darkMode: 'Sombre', lightMode: 'Clair', heroTitle: 'Concevoir une infrastructure cloud et des parcours de livraison securises que les equipes peuvent vraiment utiliser.',
  ledeIntro: 'Bienvenue sur mon site personnel. Je suis ', ledeRole: 'ingenieure DevOps et logicielle', ledeExperience: ' depuis ', ledeYears: '6 ans', ledeSkills: " d'experience en ingenierie logicielle et dans la mise en oeuvre d'", ledeApplications: 'applications evolutives', ledeInfrastructure: " et d'", ledeReliable: 'infrastructures cloud fiables', ledePassion: '. Je souhaite construire des ', ledeSecure: 'infrastructures securisees, observables et reutilisables', ledeClosing: ' que les equipes peuvent vraiment utiliser.', certificationAz104: 'Certifiee AZ-104', certificationCkad: 'Certifiee CKAD',
  viewProjects: 'Voir les projets', careerSummary: 'Parcours professionnel', projectSnapshot: 'Apercu des projets', openResume: 'Ouvrir le CV PDF ↗', seeAchievements: 'Voir les realisations ↓', focusAreas: 'Competences et technologies', home: 'Accueil', backHome: '← Retour au portfolio', careerPageIntro: 'Un parcours de six ans entre ingenierie logicielle, automatisation des livraisons et infrastructure cloud fiable.', viewProject: 'Voir les details →', projectSummary: 'Resume du projet', projectReadme: 'Resume', projectImpact: 'Impact', projectBenefits: 'Avantages', projectLoading: 'Chargement du contenu du projet...', projectLoadError: 'Le contenu du projet est temporairement indisponible.', projectMedia: 'Demonstrations du projet', overallFlow: 'Flux global', scanDemo: 'Demonstration du scan',
  skillDocker: 'Docker', skillTerraform: 'Terraform IaC', skillTerragrunt: 'Terragrunt', skillAks: 'Azure Kubernetes Services', skillAzurePipelines: 'Pipelines CI/CD Azure', skillAzureDevops: 'Azure DevOps', skillAzureStorage: 'Comptes de stockage Azure', skillHelm: 'Modelisation de charts Helm', skillGithubActions: 'GitHub Actions', skillArtifactory: 'JFrog Artifactory', skillSonarcloud: 'SonarCloud', skillPython: 'Python', skillPowershell: 'PowerShell', skillBash: 'Bash', skillLinux: 'Linux', skillWindowsServer: 'Windows Server', skillOpenTelemetry: 'OpenTelemetry', skillKyverno: 'Kyverno', skillAspnet: 'ASP.NET Core', skillAngular: 'Angular', skillInsights: 'Azure Application Insights', skillBatch: 'Azure Batch', skillCloudwatch: 'AWS CloudWatch', skillMsal: 'Service MSAL', skillMssql: 'Migration de serveurs Azure MSSQL', skillVue: 'Vue 3',
  devopsEngineer: 'Ingenieure DevOps', devopsSkills: 'Docker, Terraform IaC, Terragrunt, Azure Kubernetes Services, pipelines CI/CD Azure, Azure DevOps, comptes de stockage Azure, modelisation de charts Helm, GitHub Actions, JFrog Artifactory, SonarCloud, Python, Kyverno.', softwareEngineer: 'Ingenieure logicielle', softwareSkills: 'ASP.NET Core, Angular, Azure Application Insights, Azure Batch, AWS CloudWatch, service MSAL, migration de serveurs Azure MSSQL, Vue 3.',
  careerTitle: 'Parcours en DevOps et en ingenierie logicielle', summary: 'Synthese', summaryText: 'Ingenieure DevOps et logicielle avec 6 ans d experience en ingenierie logicielle et en infrastructure cloud, pour fournir des applications evolutives et des infrastructures cloud fiables. Certifiee Azure Administrator Associate (AZ-104) et Certified Kubernetes Application Developer (CKAD).',
  achievementsEyebrow: 'Ørsted', achievementsTitle: 'Realisations selectionnees chez Ørsted', achievementsIntro: 'Ameliorations selectionnees dans l infrastructure cloud, la securite de plateforme et les operations Kubernetes.', toolsLabel: 'Outils', achievement1: 'Reduction du temps de provisionnement des ressources Azure d environ un jour a moins de 30 minutes en restructurant les projets Terraform partages et en modularisant les attributions de roles Azure pour l equipe HPC.', achievement1Detail1: 'Reorganisation de la structure RBAC autour des projets reels et separation de la configuration de chaque projet dans des fichiers tfvars dedies.', achievement1Detail2: 'Remplacement de count par for_each pour rendre les changements des comptes de stockage previsibles et ajout de validations pour la creation, la mise a jour et la suppression des ressources.', achievement1Detail3: 'Amelioration de la flexibilite des modules Azure en prenant en charge des proprietes de ressources supplementaires sans coder en dur chaque type de propriete.', achievement2: 'Mise en place du provisionnement Azure en libre-service pour les equipes non informatiques grace a un pipeline Azure parametre qui genere la configuration et declenche les deploiements Terraform.', achievement2Detail1: 'Recueil des besoins en ressources des equipes non informatiques et traduction en parametres clairs pour le pipeline.', achievement2Detail2: 'Creation d un workflow reutilisable permettant aux equipes de provisionner des ressources Azure avec moins d intervention manuelle de l equipe DevOps.', achievement2Detail3: 'Maintien d un provisionnement Terraform coherent et tracable tout en reduisant les goulots d etranglement de livraison.', achievement3: 'Integration de controles Kyverno CLI dans un modele de pipeline Azure reutilisable afin de detecter les erreurs de configuration des manifestes Kubernetes et de fournir plus tot des indications de remediation.', achievement3Detail1: 'Integration de Kyverno CLI dans un modele de pipeline Azure partage pour detecter les erreurs de configuration des manifestes Kubernetes.', achievement3Detail2: 'Deplacement des retours de securite vers une etape plus precoce du processus de livraison afin que les equipes puissent agir avant le deploiement.', achievement3Detail3: 'Ajout d indications de remediation dans les resultats du pipeline afin que les equipes de developpement puissent corriger les problemes de maniere autonome.', achievement4: 'Amelioration de la gestion des acces Kubernetes en refactorisant les modules Terraform pour prendre en charge les roles, role bindings et comptes de service personnalises sans definitions codees en dur.', achievement4Detail1: 'Mise a jour des modules Terraform RBAC afin que les equipes puissent definir des roles et role bindings personnalises sans modifier le code des modules.', achievement4Detail2: 'Mise a jour des modules de comptes de service pour prendre en charge des comptes personnalises selon les equipes et les workloads.', achievement4Detail3: 'Amelioration de la maintenabilite et de la flexibilite de la gestion des acces au niveau des namespaces.',
  experienceOrsted: 'Ingenieure DevOps et logicielle · Ørsted · Kuala Lumpur, Malaisie · oct. 2022 – juin 2026', experienceGhl: 'Developpeuse web · GHL Systems Berhad · Kuala Lumpur, Malaisie · nov. 2021 – sept. 2022', experienceDhl: 'Developpeuse middleware · DHL IT Services · Kuala Lumpur, Malaisie · mai 2020 – nov. 2021',
  orsted1: 'Reduction du temps de provisionnement des ressources Azure d environ 1 jour a moins de 30 minutes en refactorisant une structure Terraform partagee sur 22 fichiers d etat et en modularisant les attributions de roles Azure.', orsted2: 'Mise en place du provisionnement Azure en libre-service grace a un pipeline Azure qui genere les fichiers de configuration et declenche les deploiements Terraform.', orsted3: 'Acceleration de la migration Azure vers AWS grace a des workflows GitHub Actions centralises, reduisant l effort de deploiement d une nouvelle application de 3 jours a 2 heures.', orsted4: 'Amelioration des performances des exports Excel et reduction de 50 % de la consommation memoire en migrant de ClosedXML vers OpenXML SDK dans un service worker ASP.NET Core.', orsted5: 'Accompagnement de la securite applicative et de la conformite aux audits pour un systeme de reporting utilise par environ 150 personnes au Danemark, au Royaume-Uni et en Asie.', orsted6: 'Amelioration de l observabilite en migrant la supervision applicative vers OpenTelemetry et en integrant AWS CloudWatch et X-Ray pour une application utilisee au Royaume-Uni, au Danemark et en Asie.',
  ghl1: 'Migration d un frontend legacy de Dojo Toolkit vers Vue 3.', ghl2: 'Mise a jour des API backend Java afin de renvoyer des reponses REST JSON standardisees compatibles avec un frontend moderne.', dhl1: 'Developpement et evolution de solutions middleware d entreprise avec IBM ACE 11 et Software AG webMethods.', dhl2: 'Prise en charge de plus de 200 processus de flux de messages et jusqu a 300 000 messages quotidiens via IBM MQ pour des echanges de donnees critiques.', dhl3: 'Livraison d evolutions, de corrections et de fonctionnalites ESQL avec une documentation technique claire pour faciliter la comprehension entre equipes.',
  education: 'Formation', degree: 'Licence | Informatique | Universite Yonsei', educationDetails: 'Seoul, Coree du Sud · 2016 – 2020', languages: 'Langues', languageDetails: 'Anglais (courant), mandarin (langue maternelle), coreen (courant au quotidien), malais (intermediaire), francais (niveau debutant avance).',
  projectsShow: 'Ce que montrent les projets', infrastructureEngineering: 'Ingenierie infrastructure', infrastructureText: 'Reutilisation de modules Terraform, orchestration Terragrunt, configuration propre a chaque environnement et mise en place reproductible de plateformes Azure.', platformSecurity: 'Securite de plateforme', platformText: 'Boucles de retour rapides pour les manifestes Kubernetes, les Dockerfiles, les charts Helm et la validation des pull requests grace a des analyses basees sur Checkov.', operationalVisibility: 'Visibilite operationnelle', operationalText: 'Rapports HTML, commentaires de pipeline et points d instrumentation qui rendent le comportement de la plateforme visible pour les developpeurs et les operateurs.',
  selectedWork: 'Projets selectionnes', githubProjects: 'Projets issus de GitHub', technicalProfile: 'Profil technique', commonThemes: 'Themes communs', theme1: 'Des abstractions centralisees et reutilisables plutot que des infrastructures ponctuelles.', theme2: 'Des environnements en couches avec une configuration racine partagee et des surcharges propres.', theme3: 'Des controles de securite integres aux pipelines de livraison avant le deploiement en production.', theme4: 'Des retours clairs pour les operateurs grace aux rapports, commentaires et donnees de supervision.', contact: 'Contact', letsConnect: 'Echangeons', contactText: 'Retrouvez-moi sur LinkedIn ou consultez mon profil GitHub pour plus de details sur mes projets.', viewGithub: 'Voir le profil GitHub', project: 'Projet', openRepo: 'Ouvrir le depot', projectAvailability: 'Disponibilite', marketplaceText: 'Publiee comme extension Azure DevOps que les equipes peuvent installer et utiliser dans leurs pipelines.', devsecopsKeyword: 'DevSecOps', devsecopsText: 'integre la securite au quotidien de la livraison.', shiftLeftKeyword: 'Securite shift-left', shiftLeftText: 'fait remonter les resultats avant le deploiement.', developerAutonomyKeyword: 'Autonomie des developpeurs', developerAutonomyText: 'permet aux equipes d agir sur des retours clairs sans attendre une transmission distincte de la securite.', openMarketplace: 'Voir sur Azure DevOps Marketplace →', projectArchitecture: 'Architecture du projet', architectureAks: 'Architecture AKS avec Terragrunt', architectureModules: 'Modules Azure independants de l outil',
};

const skills = [
  ['skillTerraform', 'Terraform IaC'],
  ['skillDocker', 'Docker'],
  ['skillAks', 'Azure Kubernetes Services'],
  ['skillAzurePipelines', 'Azure CI/CD pipelines'],
  ['skillAzureDevops', 'Azure DevOps'],
  ['skillHelm', 'Helm Chart Templating'],
  ['skillGithubActions', 'GitHub Actions'],
  ['skillArtifactory', 'JFrog Artifactory'],
  ['skillSonarcloud', 'SonarCloud'],
  ['skillKyverno', 'Kyverno'],
  ['skillTerragrunt', 'Terragrunt'],
  ['skillAspnet', 'ASP.NET Core'],
  ['skillAngular', 'Angular'],
  ['skillPython', 'Python'],
  ['skillPowershell', 'PowerShell'],
  ['skillBash', 'Bash'],
  ['skillLinux', 'Linux'],
  ['skillWindowsServer', 'Windows Server'],
  ['skillOpenTelemetry', 'OpenTelemetry'],
];

function normalizeFrenchText(value) {
  if (typeof value === 'string') {
    return value.replace(/\b(d|D|l|L|j|J|qu|Qu|lorsqu|Lorsqu) ([aeiouyhAEIOUYH])/g, "$1'$2");
  }
  if (Array.isArray(value)) {
    return value.map(normalizeFrenchText);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, normalizeFrenchText(entry)]));
  }
  return value;
}

Object.keys(frenchTranslations).forEach((key) => {
  frenchTranslations[key] = normalizeFrenchText(frenchTranslations[key]);
});
projectSeeds.forEach((seed) => {
  Object.keys(seed).filter((key) => key.endsWith('Fr')).forEach((key) => {
    seed[key] = normalizeFrenchText(seed[key]);
  });
});

const projectGrid = document.getElementById('projectGrid');
const template = document.getElementById('projectTemplate');
const projectDetailRoot = document.querySelector('[data-project-detail]');
const printButton = document.getElementById('printResume');
const languageButtons = document.querySelectorAll('[data-language]');
const themeButtons = document.querySelectorAll('[data-theme-choice]');
const pageTranslations = {
  en: Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map((element) => [element.dataset.i18n, element.textContent.trim()])),
  fr: frenchTranslations,
};
let currentLanguage = 'en';
let loadedProjects = [];
let loadedProjectDetail = null;

function applyTheme(theme) {
  const selectedTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = selectedTheme;
  localStorage.setItem('portfolio-theme', selectedTheme);

  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeChoice === selectedTheme;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function applyLanguage(language) {
  const selectedLanguage = language === 'fr' ? 'fr' : 'en';
  currentLanguage = selectedLanguage;
  document.documentElement.lang = selectedLanguage;
  localStorage.setItem('portfolio-language', selectedLanguage);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = pageTranslations[selectedLanguage][element.dataset.i18n];
    if (translation) {
      element.textContent = translation;
    }
  });

  renderSkills();

  const readmeLabel = document.querySelector('[data-i18n="projectReadme"]');
  if (readmeLabel) {
    readmeLabel.textContent = selectedLanguage === 'fr' ? frenchTranslations.projectReadme : 'Summary';
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === selectedLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (loadedProjects.length) {
    renderProjects(loadedProjects);
  }

  renderProjectCertifications();

  if (loadedProjectDetail) {
    renderProjectArchitecture(loadedProjectDetail);
    renderProjectDetail(loadedProjectDetail);
  }
}

function renderSkills() {
  document.querySelectorAll('[data-skills-list]').forEach((list) => {
    list.replaceChildren(...skills.map(([key, englishLabel]) => {
      const item = document.createElement('li');
      item.dataset.i18n = key;
      item.textContent = currentLanguage === 'fr' ? frenchTranslations[key] : englishLabel;
      return item;
    }));
  });
}

function decodeReadmeContent(encoded) {
  if (!encoded) {
    return '';
  }

  const normalized = encoded.replace(/\n/g, '');
  try {
    return decodeURIComponent(
      Array.from(atob(normalized), (char) => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`).join('')
    );
  } catch {
    return '';
  }
}

function summarizeMarkdown(markdown) {
  if (!markdown) {
    return [];
  }

  const lines = markdown
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const bullets = lines
    .filter((line) => line.startsWith('- ') || line.startsWith('* '))
    .slice(0, 4)
    .map((line) => line.replace(/^[-*]\s+/, ''));

  if (bullets.length > 0) {
    return bullets;
  }

  const paragraphs = lines.filter((line) => !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('```'));
  return paragraphs.slice(0, 3);
}

function createChips(chips) {
  const chipRow = document.createElement('div');
  chipRow.className = 'project-chips';

  chips.forEach((chip) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = chip;
    chipRow.appendChild(span);
  });

  return chipRow;
}

function renderProjectCertifications() {
  if (!projectDetailRoot) {
    return;
  }

  const hero = document.querySelector('.hero');
  const heroIntro = hero?.querySelector('.hero-intro');
  if (!hero || !heroIntro) {
    return;
  }

  let certificationChips = hero.querySelector('.project-header-certifications');
  if (!certificationChips) {
    certificationChips = document.createElement('div');
    certificationChips.className = 'certification-chips project-header-certifications';
    heroIntro.insertAdjacentElement('afterend', certificationChips);
  }

  certificationChips.replaceChildren();
  const labels = currentLanguage === 'fr'
    ? ['Certifiee AZ-104', 'Certifiee CKAD']
    : ['AZ-104 certified', 'CKAD certified'];
  labels.forEach((label) => {
    const chip = document.createElement('span');
    chip.className = 'chip certification-chip';
    chip.textContent = label;
    certificationChips.appendChild(chip);
  });
}

function createReadmeList(items, className = 'project-readme') {
  const wrapper = document.createElement('div');
  wrapper.className = className;

  if (!items.length) {
    const p = document.createElement('p');
    p.textContent = currentLanguage === 'fr'
      ? 'Le resume apparaitra ici une fois le contenu GitHub charge.'
      : 'The summary will appear here once the GitHub content loads.';
    wrapper.appendChild(p);
    return wrapper;
  }

  const list = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    if (typeof item === 'string') {
      li.textContent = item;
    } else {
      const keyword = document.createElement('strong');
      keyword.textContent = item.keyword;
      li.append(keyword, ` ${item.text}`);
    }
    list.appendChild(li);
  });

  wrapper.appendChild(list);
  return wrapper;
}

function renderProjectArchitecture(seed) {
  if (!projectDetailRoot || !['aks-infra', 'azure-modules'].includes(seed.name)) {
    return;
  }

  projectDetailRoot.querySelector('[data-project-architecture]')?.remove();

  const section = document.createElement('section');
  section.className = 'section project-media-section';
  section.dataset.projectArchitecture = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  const label = document.createElement('p');
  label.className = 'eyebrow';
  label.textContent = currentLanguage === 'fr' ? frenchTranslations.projectArchitecture : 'Project architecture';
  const title = document.createElement('h2');
  title.textContent = currentLanguage === 'fr'
    ? (seed.name === 'aks-infra' ? frenchTranslations.architectureAks : frenchTranslations.architectureModules)
    : (seed.name === 'aks-infra' ? 'AKS architecture with Terragrunt' : 'Tool-agnostic Azure modules');
  heading.append(label, title);

  const grid = document.createElement('div');
  grid.className = 'project-media-grid';
  const figure = document.createElement('figure');
  figure.className = 'project-media project-media-featured';
  const image = document.createElement('img');
  image.src = seed.name === 'aks-infra' ? 'assets/terragrunt_aks_structure.jpg' : 'assets/azure_modules_tool_agnostic.svg';
  image.alt = currentLanguage === 'fr'
    ? (seed.name === 'aks-infra' ? 'Diagramme de l architecture AKS avec Terragrunt' : 'Diagramme des modules Azure utilisables avec Terraform ou Terragrunt')
    : (seed.name === 'aks-infra' ? 'AKS architecture diagram with Terragrunt' : 'Azure modules diagram showing Terraform and Terragrunt usage');
  const caption = document.createElement('figcaption');
  caption.textContent = currentLanguage === 'fr'
    ? (seed.name === 'aks-infra' ? 'La structure Terragrunt orchestre les modules partages pour AKS.' : 'Les memes modules Azure restent utilisables avec Terraform ou Terragrunt, comme le montre AKS Infrastructure.')
    : (seed.name === 'aks-infra' ? 'Terragrunt orchestrates the shared modules used by the AKS platform.' : 'The same Azure modules can be used with Terraform or Terragrunt, as demonstrated by AKS Infrastructure.');
  figure.append(image, caption);
  grid.appendChild(figure);
  section.append(heading, grid);

  const intro = projectDetailRoot.querySelector('.project-detail-intro');
  intro?.insertAdjacentElement('afterend', section);
}

function renderProjectCard(seed) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.project-card');
  const title = fragment.querySelector('.project-title');
  const description = fragment.querySelector('.project-description');
  const repoLink = fragment.querySelector('.project-link');
  const sourceLink = fragment.querySelector('.project-source');
  const chipRow = fragment.querySelector('.project-chips');

  title.textContent = currentLanguage === 'fr' ? (seed.titleFr ?? seed.title) : seed.title;
  description.textContent = currentLanguage === 'fr' ? (seed.summaryFr ?? seed.summary) : seed.summary;
  repoLink.href = `${seed.name}.html`;
  sourceLink.href = seed.url;
  fragment.querySelector('.project-pill').textContent = currentLanguage === 'fr' ? frenchTranslations.project : 'Project';
  repoLink.textContent = currentLanguage === 'fr' ? frenchTranslations.viewProject : 'View details →';
  sourceLink.textContent = currentLanguage === 'fr' ? frenchTranslations.openRepo : 'Open repo';
  chipRow.replaceChildren();

  seed.chips.forEach((chip) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = chip;
    chipRow.appendChild(span);
  });

  card.dataset.repo = seed.name;

  return fragment;
}

function renderProjects(projects) {
  projectGrid.innerHTML = '';
  projects.forEach((project, index) => {
    projectGrid.appendChild(renderProjectCard({ ...projectSeeds[index], ...project }));
  });
}

async function loadGitHubProject(seed) {
  const repoResponse = await fetch(`https://api.github.com/repos/${seed.repo}`);

  const repo = repoResponse.ok ? await repoResponse.json() : null;

  return {
    title: repo?.name ?? seed.title,
    description: repo?.description ?? seed.description,
    htmlUrl: repo?.html_url ?? seed.url,
  };
}

function renderProjectDetail(project) {
  const title = document.getElementById('projectDetailTitle');
  const description = document.getElementById('projectDetailDescription');
  const chips = document.getElementById('projectDetailChips');
  const readmeTitle = document.getElementById('projectReadmeTitle');
  const readme = document.getElementById('projectReadmeContent');
  const readmeLabel = document.querySelector('[data-i18n="projectReadme"]');
  const impact = document.getElementById('projectImpactText');
  const benefits = document.getElementById('projectBenefitsText');

  if (!title || !description || !chips || !readme || !impact || !benefits) {
    return;
  }

  title.textContent = currentLanguage === 'fr' ? (project.titleFr ?? project.title) : project.title;
  if (readmeTitle) {
    readmeTitle.textContent = title.textContent;
  }
  description.textContent = currentLanguage === 'fr' ? (project.summaryFr ?? project.summary) : project.summary;
  chips.replaceChildren(...createChips(project.chips).children);
  if (readmeLabel) {
    readmeLabel.textContent = currentLanguage === 'fr' ? frenchTranslations.projectReadme : 'Summary';
  }
  const readmeSummaryElement = createReadmeList([], 'project-readme-content');
  readmeSummaryElement.replaceChildren();
  const summaryIntro = document.createElement('p');
  summaryIntro.textContent = currentLanguage === 'fr' ? (project.summaryFr ?? project.summary) : project.summary;
  readmeSummaryElement.appendChild(summaryIntro);
  const summaryDetails = currentLanguage === 'fr' ? (project.summaryDetailsFr ?? []) : (project.summaryDetails ?? []);
  if (summaryDetails.length) {
    const summaryList = document.createElement('ul');
    summaryDetails.forEach((detail) => {
      const li = document.createElement('li');
      const keyword = document.createElement('strong');
      keyword.textContent = detail.keyword;
      li.append(keyword, ` ${detail.text}`);
      summaryList.appendChild(li);
    });
    readmeSummaryElement.appendChild(summaryList);
  }
  const summarySections = currentLanguage === 'fr' ? (project.summarySectionsFr ?? []) : (project.summarySections ?? []);
  summarySections.forEach((section) => {
    const heading = document.createElement('h3');
    heading.textContent = section.heading;
    const list = document.createElement('ul');
    section.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    readmeSummaryElement.append(heading, list);
  });
  readmeSummaryElement.id = 'projectReadmeContent';
  readme.replaceWith(readmeSummaryElement);
  impact.textContent = currentLanguage === 'fr' ? project.impactFr : project.impact;
  benefits.textContent = currentLanguage === 'fr' ? project.benefitsFr : project.benefits;
}

async function bootProjectDetail() {
  if (!projectDetailRoot) {
    return;
  }

  const seed = projectSeeds.find((project) => project.name === projectDetailRoot.dataset.projectDetail);
  const readme = document.getElementById('projectReadmeContent');
  if (!seed || !readme) {
    return;
  }

  renderProjectArchitecture(seed);
  renderProjectCertifications();

  const readmeLabel = document.querySelector('[data-i18n="projectReadme"]');
  if (readmeLabel) {
    readmeLabel.textContent = currentLanguage === 'fr' ? frenchTranslations.projectReadme : 'Summary';
  }

  readme.textContent = currentLanguage === 'fr' ? frenchTranslations.projectLoading : 'Loading project content...';

  loadedProjectDetail = seed;
  renderProjectDetail(loadedProjectDetail);
}

async function boot() {
  if (!projectGrid || !template) {
    return;
  }

  projectGrid.innerHTML = `<div class="loading">${currentLanguage === 'fr' ? 'Chargement des details des projets depuis GitHub...' : 'Loading project details from GitHub...'}</div>`;

  try {
    const projects = await Promise.all(projectSeeds.map(loadGitHubProject));
    loadedProjects = projects.map((project) => ({
      title: project.title,
      description: project.description,
      url: project.htmlUrl,
    }));
    renderProjects(loadedProjects);
  } catch (error) {
    console.error('Failed to load GitHub project data', error);
    projectGrid.innerHTML = '';

    loadedProjects = projectSeeds.map((seed) => ({ ...seed, url: seed.url }));
    renderProjects(loadedProjects);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

themeButtons.forEach((button) => {
  button.addEventListener('click', () => applyTheme(button.dataset.themeChoice));
});

if (printButton) {
  printButton.addEventListener('click', () => window.print());
}

applyTheme(localStorage.getItem('portfolio-theme') ?? 'dark');
applyLanguage(localStorage.getItem('portfolio-language') ?? 'en');
boot();
bootProjectDetail();