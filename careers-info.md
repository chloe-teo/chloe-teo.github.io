# DevOps Engineer in Orsted

## Achievements
1. Terraform Refactoring for Azure Resource Provisioning in a HPC(High Performance Computing) Team
  a. Terraform related
  - Impact: Reduce the resource provisioning from 1 day under 30 minutes.
  - What was done:
    - Refactor the RBAC structure that was scattered around different places, and centralized it into by grouping them based on actual projects.
    - Remove accidental deletion in storage accounts due to using "count" of terraform, and changed to use "for_each" to make sure changes are predictable to specific storage account.
    - Group terraform configurations values into different `tfvars` for each actual project, so that project lifecycle can be handled individually to prevent conflict or unintentional changes for other projects.
    - Add additional check/action during runtime of Terraform to make sure the resources can be deleted properly when needed via running scripts like Powershell/Bash.
    - Add flexibility of the azure resources configuration in the modules so that new property value type can be used without hardcoding specific property
    - Any new changes made into the main branch must be able to run successfully across all these stages:  creation, update and deletion of resource.
  - Tool: Terraform, Powershell, Azure Pipelines, Bash, Azure CLI
  
  b. Azure Pipelines related
  - Impact: Reduce bottleneck on DevOps team on resource provisioning
  - What was done:
    - Gather requirement of the resources used by the non-IT team
    - Created a Azure pipeline with inputs parameters to help non-IT team in azure resource provisioning.
  - Tool use: Azure Pipelines, Azure CLI, Bash


2. DevSecOps implementation by using Kyverno CLI in an azure shared pipeline template.
  - Impact: Improve the CI/CD process with a touch of security pipeline embedded, improve security posture of applications in the cluster.
  - What was done:
    - Reusable by development teams in their CI/CD workflows to detect misconfiguration in Kubernetes Manifest, 
    - Shift left to provide feedback in the pipeline run and provide internal guideline for remediation, so that it can be done autonomously.
  - Tool use: Azure Pipelines, Kyverno CLI, Bash, python

3. Terraform refactoring for RBAC management in the Kubernetes
  1. Role-based Access Control
  - Impact: Improve flexibility of Role-Based Access Control in a namespace of the terraform modules to allow custom roles to be added based on necessity of the team.
  - What was done: 
    - Update terraform modules for RBAC so that new role binding can be configured without hardcoding specific roles into the modules.
  2. Service Account
  - Impact: Allow custom service account to be added when needed.
  - What was done: 
   - Update terraform modules for service account so that new service accounts can be configured without hardcoding specific service account into the modules.
  Tool Use: Terraform, Azure Pipelines.

## Responsibility

- Manage and create reusable shared pipeline templates for development teams in their CI/CD workflows.
- Manage lifecycle of Azure Kubernetes Service clusters of the upgrade and update
- Manage and update the terraform modules used in boostraping the AKS environment.
- Assist developers in any issues faced during CI/CD process, not to mentioned any thing related to Docker, Terraform, AKS access, Azure usage.
- Create guidelines and documentations for developers about the DevOps & Azure cloud best practices.
- Guide developers in Azure subscription migration and terraform setup and implementation.
- Continuous improvement on the azure pipelines for the CI/CD process.

# Software Engineer in Orsted

## Responsibility
- Create, manage and maintain the features for the ASP.NET core applications and Angular applications end-to-end, from creation of the code till production deployment.
- Participate and provide insights and feedback in discussion of new application features.
- Update versions of the ASP.NET core and Angular to be updated versions to reduce vulnerability of the apps.
- Manage, maintain and improve CI/CD pipelines, helm charts templates for the development features.
- Provide guidance for juniors in the team in the DevOps best practices.
- Handle incidents of applications and implement improvements within the applications.

