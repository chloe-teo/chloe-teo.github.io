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
    chips: ['Azure DevOps', 'Checkov', 'Kubernetes', 'Dockerfile', 'Telemetry'],
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
    chips: ['Terraform', 'Azure', 'Reusable modules', 'AKS', 'Networking'],
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
    chips: ['Terragrunt', 'AKS', 'Environment layers', 'Bootstrap', 'Azure'],
  },
];

const frenchTranslations = {
  eyebrow: 'DevOps · Infrastructure cloud · Ingenierie logicielle',
  languageLabel: 'Langue', themeLabel: 'Theme', darkMode: 'Sombre', lightMode: 'Clair', heroTitle: 'Concevoir une infrastructure cloud et des parcours de livraison securises que les equipes peuvent vraiment utiliser.',
  heroLede: 'Bienvenue sur mon site personnel. Je suis ingenieure DevOps et logicielle avec 6 ans d experience en ingenierie logicielle et dans la mise en oeuvre d applications evolutives et d infrastructures cloud fiables. Je souhaite construire des infrastructures securisees, observables et reutilisables que les equipes peuvent vraiment utiliser.',
  viewProjects: 'Voir les projets', careerSummary: 'Parcours professionnel', projectSnapshot: 'Apercu des projets', openResume: 'Ouvrir le CV PDF', focusAreas: 'Domaines d expertise',
  focus1: 'Conception de modules Terraform pour les plateformes cloud', focus2: 'Conception de pipelines CI/CD et automatisation des livraisons', focus3: 'Mise en oeuvre d infrastructures cloud Azure, d AKS et de leur initialisation', focus4: 'Analyse de securite de l infrastructure et observabilite des pipelines', focus5: 'Ingenierie logicielle et developpement d applications cloud natives',
  careerTitle: 'Parcours en DevOps et en ingenierie logicielle', summary: 'Synthese', summaryText: 'Ingenieure DevOps et logicielle avec 6 ans d experience en ingenierie logicielle et en infrastructure cloud, pour fournir des applications evolutives et des infrastructures cloud fiables. Certifiee Azure Administrator Associate (AZ-104) et Certified Kubernetes Application Developer (CKAD).',
  devopsEngineer: 'Ingenieure DevOps', devopsSkills: 'Docker, Terraform IaC, Terragrunt, Azure Kubernetes Services, pipelines CI/CD Azure, Azure DevOps, comptes de stockage Azure, modelisation de charts Helm, GitHub Actions, JFrog Artifactory, SonarCloud, Python, Kyverno.',
  softwareEngineer: 'Ingenieure logicielle', softwareSkills: 'ASP.NET Core, Angular, Azure Application Insights, Azure Batch, AWS CloudWatch, service MSAL, migration de serveurs Azure MSSQL, Vue 3.',
  experienceOrsted: 'Ingenieure DevOps et logicielle · Ørsted · Kuala Lumpur, Malaisie · oct. 2022 – juin 2026', experienceGhl: 'Developpeuse web · GHL Systems Berhad · Kuala Lumpur, Malaisie · nov. 2021 – sept. 2022', experienceDhl: 'Developpeuse middleware · DHL IT Services · Kuala Lumpur, Malaisie · mai 2020 – nov. 2021',
  orsted1: 'Reduction du temps de provisionnement des ressources Azure d environ 1 jour a moins de 30 minutes en refactorisant une structure Terraform partagee sur 22 fichiers d etat et en modularisant les attributions de roles Azure.', orsted2: 'Mise en place du provisionnement Azure en libre-service grace a un pipeline Azure qui genere les fichiers de configuration et declenche les deploiements Terraform.', orsted3: 'Acceleration de la migration Azure vers AWS grace a des workflows GitHub Actions centralises, reduisant l effort de deploiement d une nouvelle application de 3 jours a 2 heures.', orsted4: 'Amelioration des performances des exports Excel et reduction de 50 % de la consommation memoire en migrant de ClosedXML vers OpenXML SDK dans un service worker ASP.NET Core.', orsted5: 'Accompagnement de la securite applicative et de la conformite aux audits pour un systeme de reporting utilise par environ 150 personnes au Danemark, au Royaume-Uni et en Asie.', orsted6: 'Amelioration de l observabilite en migrant la supervision applicative vers OpenTelemetry et en integrant AWS CloudWatch et X-Ray pour une application utilisee au Royaume-Uni, au Danemark et en Asie.',
  ghl1: 'Migration d un frontend legacy de Dojo Toolkit vers Vue 3.', ghl2: 'Mise a jour des API backend Java afin de renvoyer des reponses REST JSON standardisees compatibles avec un frontend moderne.', dhl1: 'Developpement et evolution de solutions middleware d entreprise avec IBM ACE 11 et Software AG webMethods.', dhl2: 'Prise en charge de plus de 200 processus de flux de messages et jusqu a 300 000 messages quotidiens via IBM MQ pour des echanges de donnees critiques.', dhl3: 'Livraison d evolutions, de corrections et de fonctionnalites ESQL avec une documentation technique claire pour faciliter la comprehension entre equipes.',
  education: 'Formation', degree: 'Licence | Informatique | Universite Yonsei', educationDetails: 'Seoul, Coree du Sud · 2016 – 2020', languages: 'Langues', languageDetails: 'Anglais (courant), mandarin (langue maternelle), coreen (courant au quotidien), malais (intermediaire), francais (niveau debutant avance).',
  projectsShow: 'Ce que montrent les projets', infrastructureEngineering: 'Ingenierie infrastructure', infrastructureText: 'Reutilisation de modules Terraform, orchestration Terragrunt, configuration propre a chaque environnement et mise en place reproductible de plateformes Azure.', platformSecurity: 'Securite de plateforme', platformText: 'Boucles de retour rapides pour les manifestes Kubernetes, les Dockerfiles, les charts Helm et la validation des pull requests grace a des analyses basees sur Checkov.', operationalVisibility: 'Visibilite operationnelle', operationalText: 'Rapports HTML, commentaires de pipeline et points d instrumentation qui rendent le comportement de la plateforme visible pour les developpeurs et les operateurs.',
  selectedWork: 'Projets selectionnes', githubProjects: 'Projets issus de GitHub', technicalProfile: 'Profil technique', commonThemes: 'Themes communs', theme1: 'Des abstractions centralisees et reutilisables plutot que des infrastructures ponctuelles.', theme2: 'Des environnements en couches avec une configuration racine partagee et des surcharges propres.', theme3: 'Des controles de securite integres aux pipelines de livraison avant le deploiement en production.', theme4: 'Des retours clairs pour les operateurs grace aux rapports, commentaires et donnees de supervision.', contact: 'Contact', letsConnect: 'Echangeons', contactText: 'Retrouvez-moi sur LinkedIn ou consultez mon profil GitHub pour plus de details sur mes projets.', viewGithub: 'Voir le profil GitHub', project: 'Projet', openRepo: 'Ouvrir le depot',
};

const projectGrid = document.getElementById('projectGrid');
const template = document.getElementById('projectTemplate');
const printButton = document.getElementById('printResume');
const languageButtons = document.querySelectorAll('[data-language]');
const themeButtons = document.querySelectorAll('[data-theme-choice]');
const pageTranslations = {
  en: Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map((element) => [element.dataset.i18n, element.textContent.trim()])),
  fr: frenchTranslations,
};
let currentLanguage = 'en';
let loadedProjects = [];

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
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = pageTranslations[language][element.dataset.i18n];
    if (translation) {
      element.textContent = translation;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (loadedProjects.length) {
    renderProjects(loadedProjects);
  }
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

function createReadmeList(items) {
  const wrapper = document.createElement('div');
  wrapper.className = 'project-readme';

  if (!items.length) {
    const p = document.createElement('p');
    p.textContent = currentLanguage === 'fr'
      ? 'Les points cles du README apparaitront ici une fois le contenu GitHub charge.'
      : 'README highlights will appear here once the GitHub content loads.';
    wrapper.appendChild(p);
    return wrapper;
  }

  const list = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  wrapper.appendChild(list);
  return wrapper;
}

function renderProjectCard(seed, readmeHighlights) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.project-card');
  const title = fragment.querySelector('.project-title');
  const description = fragment.querySelector('.project-description');
  const repoLink = fragment.querySelector('.project-link');
  const chipRow = fragment.querySelector('.project-chips');

  title.textContent = currentLanguage === 'fr' ? (seed.titleFr ?? seed.title) : seed.title;
  description.textContent = currentLanguage === 'fr' ? (seed.descriptionFr ?? seed.description) : seed.description;
  repoLink.href = seed.url;
  fragment.querySelector('.project-pill').textContent = currentLanguage === 'fr' ? frenchTranslations.project : 'Project';
  repoLink.textContent = currentLanguage === 'fr' ? frenchTranslations.openRepo : 'Open repo';
  chipRow.replaceChildren();

  seed.chips.forEach((chip) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = chip;
    chipRow.appendChild(span);
  });

  card.dataset.repo = seed.name;
  card.appendChild(createReadmeList(readmeHighlights));

  return fragment;
}

function renderProjects(projects) {
  projectGrid.innerHTML = '';
  projects.forEach((project, index) => {
    projectGrid.appendChild(renderProjectCard({ ...projectSeeds[index], ...project }, project.readmeHighlights));
  });
}

async function loadGitHubProject(seed) {
  const [repoResponse, readmeResponse] = await Promise.all([
    fetch(`https://api.github.com/repos/${seed.repo}`),
    fetch(`https://api.github.com/repos/${seed.repo}/readme`),
  ]);

  const repo = repoResponse.ok ? await repoResponse.json() : null;
  const readme = readmeResponse.ok ? await readmeResponse.json() : null;
  const readmeText = decodeReadmeContent(readme?.content);
  const readmeHighlights = summarizeMarkdown(readmeText);

  return {
    title: repo?.name ?? seed.title,
    description: repo?.description ?? seed.description,
    htmlUrl: repo?.html_url ?? seed.url,
    readmeHighlights,
  };
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
      readmeHighlights: project.readmeHighlights,
    }));
    renderProjects(loadedProjects);
  } catch (error) {
    console.error('Failed to load GitHub project data', error);
    projectGrid.innerHTML = '';

    loadedProjects = projectSeeds.map((seed) => ({ ...seed, url: seed.url, readmeHighlights: [] }));
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
boot();