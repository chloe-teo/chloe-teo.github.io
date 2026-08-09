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
  achievement5: 'Renforcement de la securite applicative et de la resilience operationnelle en migrant l environnement Windows Server qui hebergeait les agents Azure Pipeline auto-heberges et les serveurs applicatifs.',
  achievement5Detail1: "Migration des agents Azure Pipeline auto-heberges pour prendre en charge la connectivite sur site et les deploiements applicatifs, tout en faisant passer l administration distante de WinRM sur HTTP a WinRM sur HTTPS.",
  achievement5Detail2: 'Coordination des dependances liees au pare-feu, a l equilibrage de charge, au reseau et a la configuration des serveurs entre les equipes, avec validation des changements avant la migration en production.',
  achievement5Detail3: "Amelioration de l observabilite des serveurs dependants grace a des tableaux de bord Splunk, des alertes par e-mail, des controles de connectivite PowerShell et une documentation operationnelle.",
  achievement6: "Mise en place d un parcours de livraison reutilisable pour migrer des applications d Azure vers AWS EKS, en reduisant a deux heures l effort initial de configuration et de deploiement.",
  achievement6Detail1: 'Creation de workflows GitHub Actions reutilisables pour les backends ASP.NET Core et les frontends Angular, avec tests unitaires, analyse des images de conteneurs et analyse des dependances.',
  azureResourcesLabel: 'Ressources Azure',
  achievement1Detail4: 'Migration du reseau virtuel Azure utilise par Azure Batch afin de renforcer la securite et de respecter les bonnes pratiques d architecture de l entreprise, sans interruption de service.',
  achievement6Detail2: 'Integration d AWS Secrets Manager aux workloads EKS via IRSA pour recuperer les secrets au moment de l execution de maniere securisee.',
  achievement6Detail3: "Migration de la telemetrie Angular d Azure Application Insights vers AWS CloudWatch avec OpenTelemetry pour une observabilite independante du cloud.",
  achievement7: 'Reduction de 50 % de l utilisation memoire lors du traitement de fichiers Excel contenant des millions de lignes en remplacant ClosedXML par le traitement SAX d OpenXML.',
  achievement7Detail1: "Remplacement de l approche ClosedXML par le modele de traitement SAX d OpenXML pour les exports Excel volumineux.",
  achievement7Detail2: 'Stockage des fichiers Excel generes dans le stockage de conteneurs au lieu de les conserver en memoire pendant le traitement.',
  achievement7Detail3: "Utilisation des metriques Azure Application Insights et de tests Postman pour comparer l utilisation memoire avant et apres le changement.",
  achievement8: 'Amelioration de la flexibilite des charts Helm et du diagnostic des deploiements en supprimant les valeurs codees en dur et en generant les manifestes Kubernetes avant la release.',
  achievement8Detail1: 'Suppression des valeurs codees en dur dans les templates Helm afin de prendre en charge differentes configurations applicatives.',
  achievement8Detail2: 'Ajout d une etape au pipeline pour generer les manifestes Kubernetes avant le deploiement et faciliter l analyse des problemes de configuration.',
  achievement8Detail3: 'Mise a jour de la structure du chart pour prendre en charge plusieurs CronJobs sans dupliquer la logique des templates.',
  achievement9: "Amelioration de la gestion des incidents ASP.NET Core en fournissant des messages d erreur reseau plus clairs et en prenant en charge une API dependante lente via la configuration de l Ingress Kubernetes.",
  achievement9Detail1: 'Identification des exceptions ASP.NET Core courantes liees au reseau et ajout de messages personnalises pour fournir au frontend des indications de diagnostic plus exploitables.',
  achievement9Detail2: "Augmentation du delai d attente du proxy Ingress Kubernetes pour prendre en charge une API dependante necessitant un temps de traitement supplementaire.",
  achievement9Detail3: 'Amelioration des informations disponibles pour les utilisateurs et les equipes de support pendant les incidents applicatifs.',
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

const projectMediaContent = {
  'azure-modules': {
    workflow: {
      src: 'assets/AI-assisted-workflow.png',
      alt: {
        en: 'AI-assisted workflow for Azure modules',
        fr: 'Workflow assiste par IA pour les modules Azure',
      },
      benefit: {
        en: 'AI assistance speeds up infrastructure configuration and makes the modules easier to understand.',
        fr: "L'assistance de l'IA accelere la creation et la comprehension des configurations d'infrastructure.",
      },
    },
  },
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
