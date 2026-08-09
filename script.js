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
  en: Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map((element) => [element.dataset.i18n, element.matches('span') ? element.textContent : element.textContent.trim()])),
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

  if (seed.name === 'azure-modules') {
    const workflowContent = projectMediaContent[seed.name]?.workflow;
    if (!workflowContent) {
      section.append(heading, grid);
      return;
    }

    const workflowFigure = document.createElement('figure');
    workflowFigure.className = 'project-media project-media-workflow';
    const workflowImage = document.createElement('img');
    workflowImage.src = workflowContent.src;
    workflowImage.alt = workflowContent.alt[currentLanguage];
    const workflowCaption = document.createElement('figcaption');
    workflowCaption.textContent = workflowContent.benefit[currentLanguage];
    workflowFigure.append(workflowImage, workflowCaption);
    grid.appendChild(workflowFigure);
  }

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