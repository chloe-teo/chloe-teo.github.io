# DevOps Engineer in Orsted

## Achievements
1. Terraform Refactoring for Azure Resource Provisioning in a HPC(High Performance Computing) Team
  a. Terraform related
  - Impact: Reduce the resource provisioning from 1 day under 30 minutes.
  - What was done:
    - Refactor the RBAC structure that was scattered around different places, and centralized it into by grouping them based on actual projects.
    - Remove accidental deletion in storage accounts due to using "count" of terraform, and changed to use "for_each" to make sure changes are predictable to specific storage account.
    - Group terraform configurations values into different `tfvars` for each actual project, so that project lifecycle can be handled individually to prevent conflict or unintentional changes for other projects.
    - Migrated the Azure Batch Virtual Network to strengthen the security posture and align with company architecture best practices without causing downtime.
    - Add additional check/action during runtime of Terraform to make sure the resources can be deleted properly when needed via running scripts like Powershell/Bash.
    - Add flexibility of the azure resources configuration in the modules so that new property value type can be used without hardcoding specific property
    - Any new changes made into the main branch must be able to run successfully across all these stages:  creation, update and deletion of resource.
  - Tool: Terraform, Powershell, Azure Pipelines, Bash, Azure CLI
  - Azure Resources: Azure Batch, Azure Storage Account (Azure Blob Storate, Azure File Share), Azure Key Vault, Azure Role Assignment, Azure Recovery Service Vault, Azure Private Endpoint, Azure Virtual Network
  
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

4. Application server upgrade migration
  - Impact: Application window server is up to date and compliance to security requirement and enhance security posture of the mission critical application.
  - What was done
   - Migrated Azure Self-Hosted Pipeline agents to new server for on-prem connectivity and application deployment purpose, improve the security posture by migrating from HTTP to HTTPS protocol in WINRM for running command in remote server.
   - Identified, facilitated and participated in discussion for the action items and dependency actions from other team needed for the migration process.
   - Identified the firewall rules and make sure new firewall changes are tested prior to production migration.
   - Identified the load balancing rules with network team and make sure new IP changes are applied correctly.
   - Understood the window server setup and make sure same setup are migrated to the new server
   - Improved observability of the dependency server in Splunk via dashboard showing the service running status and alerting to email.
   - Created powershell scripts to check connectivity with dependency server.
   - Proper documentation was created for operational maintenance
  Tool Use: Powershell, Bash, Azure Pipelines, Azure Releases, Window Server, WINRM, RabbitMQ, Redis

5. Azure-AWS apps migration
  - Impact: Pave the path for future new apps to be deployed to AWS EKS, reusable CI/CD templates that allows new apps to be deployed within 2 hour for the first setup.
  - What was done:
    - Iterated, brainstormed and implemented reusable CI/CD Github Actions workflow for backend (ASP.NET Core) and frontend (Angular) deployment including unit test, docker image scanning and dependency scanning.
    - Implemented the access of AWS resource like Secret Manager for the secret retrieval during runtime in the EKS via IRSA in service account.
    - Migrated Angular apps from using Azure Application Insights into AWS Cloudwatch and using the Open Telemetry for cloud agnostic telemetry framework, sending the traces/logs via the OTEL collector in the namespace to send to AWS Cloudwatch.
  - Tech use: OpenTelemetry, AWS Cloudwatch, ASP.NET Core, Angular, AWS Secret Manager, Github Actions

6. ASP.NET core Excel Processing
  - Impact: Reduce memory usage by 50 percent for million-row dataset
  - What was done:
    - Changed from using ClosedXML into using OpenXML SAX approach that instead using memory in storing the generated excel into using container folder to store the generated excel.
    - Used Azure Application Insight metrics to verify the memory difference when testing before and after.
  - Tech use: ASP.NET Core,  Azure Application Insight, Postman

7. Improve Helm Chart Template & Helm Pipeline Task
  - Impact: Improve the flexibility of the helm chart and reduce hard coded values in the template
  - What was done:
    - Removed hard coded values to allow different values to be insertable
    - Rendered the kubernetes manifest by adding helm command in pipeline to help for better troubleshooting in case deployment fail and easier to track.
    - Introduced flexibility by allowing multiple cronjob to be added.
  - Tool use: Helm, Azure Pipelines

8. Improve the Error Messages returned by ASP.NET Core App
  - Impact: Improve better error message to be returned to frontend for better troubleshooting purpose when incident happen.
  - What was done:
    - Identified possible network error exception code of ASP.NET Core and create custom exception message for network related issue.
    - Increased the proxy timeout of the Kubernetes Ingress object due to limitation of the dependency API that requires more time to return.

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

