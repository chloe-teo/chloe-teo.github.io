const projectSeeds = [
  {
    name: 'kubedock-security-scan',
    title: 'KubeDock Security Scan',
    repo: 'chloe-teo/kubedock-security-scan',
    url: 'https://github.com/chloe-teo/kubedock-security-scan',
    description:
      'Azure DevOps extension for scanning Kubernetes manifests, Dockerfiles, and Helm charts with Checkov, then surfacing results in the pipeline summary and PR comments.',
    chips: ['Azure DevOps', 'Checkov', 'Kubernetes', 'Dockerfile', 'Telemetry'],
  },
  {
    name: 'azure-modules',
    title: 'Azure Terraform Modules',
    repo: 'chloe-teo/azure-modules',
    url: 'https://github.com/chloe-teo/azure-modules',
    description:
      'A shared module library for Azure infrastructure, including resource groups, VNets, AKS, ACR, service plans, Function Apps, storage, and monitoring.',
    chips: ['Terraform', 'Azure', 'Reusable modules', 'AKS', 'Networking'],
  },
  {
    name: 'aks-infra',
    title: 'AKS Infrastructure',
    repo: 'chloe-teo/aks-infra',
    url: 'https://github.com/chloe-teo/aks-infra',
    description:
      'Terragrunt-driven AKS platform with layered environments, shared root configuration, and a bootstrap flow for dev and production stacks.',
    chips: ['Terragrunt', 'AKS', 'Environment layers', 'Bootstrap', 'Azure'],
  },
];

const projectGrid = document.getElementById('projectGrid');
const template = document.getElementById('projectTemplate');
const printButton = document.getElementById('printResume');

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
    p.textContent = 'README highlights will appear here once the GitHub content loads.';
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

  title.textContent = seed.title;
  description.textContent = seed.description;
  repoLink.href = seed.url;
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

  projectGrid.innerHTML = '<div class="loading">Loading project details from GitHub...</div>';

  try {
    const projects = await Promise.all(projectSeeds.map(loadGitHubProject));
    projectGrid.innerHTML = '';

    projects.forEach((project, index) => {
      const seed = projectSeeds[index];
      const card = renderProjectCard(
        {
          ...seed,
          title: project.title,
          description: project.description,
          url: project.htmlUrl,
        },
        project.readmeHighlights
      );

      projectGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load GitHub project data', error);
    projectGrid.innerHTML = '';

    projectSeeds.forEach((seed) => {
      projectGrid.appendChild(renderProjectCard(seed, []));
    });
  }
}

if (printButton) {
  printButton.addEventListener('click', () => window.print());
}

boot();