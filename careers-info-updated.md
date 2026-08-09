# DevOps and Software Engineer at Ørsted

## Achievements

### 1. Faster, safer Azure provisioning for the HPC team

- Reduced Azure resource provisioning from approximately one day to under 30 minutes.
- Refactored the Terraform RBAC structure and grouped permissions by project for clearer ownership.
- Replaced Terraform `count` usage with `for_each` for storage accounts, preventing accidental deletion and making changes predictable.
- Separated configuration values into project-specific `tfvars` files so each project could be managed independently.
- Added PowerShell and Bash validation steps to confirm that resources could be created, updated, and deleted safely.
- Made Azure modules more flexible by supporting additional resource properties without hardcoding each property type.
- **Tools:** Terraform, Azure Pipelines, Azure CLI, PowerShell, and Bash.

### 2. Self-service Azure provisioning through Azure Pipelines

- Gathered infrastructure requirements from non-IT teams and translated them into a reusable workflow.
- Created a parameterized Azure Pipeline that enabled teams to provision Azure resources with less DevOps intervention.
- Reduced provisioning bottlenecks while keeping Terraform-based changes consistent and traceable.
- **Tools:** Azure Pipelines, Azure CLI, and Bash.

### 3. Embedded DevSecOps checks in shared CI/CD pipelines

- Integrated Kyverno CLI into a shared Azure Pipeline template to detect Kubernetes manifest misconfigurations.
- Shifted security feedback earlier in the delivery process, with remediation guidance available directly in pipeline results.
- Created a reusable control that development teams could adopt in their own CI/CD workflows.
- **Tools:** Azure Pipelines, Kyverno CLI, Bash, and Python.

### 4. More flexible Kubernetes access management

- Refactored Terraform modules for Kubernetes RBAC so teams could define custom roles and role bindings without changing module code.
- Updated service account modules to support custom service accounts when required by a team or workload.
- Improved the maintainability and adaptability of namespace-level access management.
- **Tools:** Terraform and Azure Pipelines.

### 5. Secure application server migration

- Migrated Azure self-hosted pipeline agents to a new Windows Server environment to support on-premises connectivity and application deployments.
- Improved security by migrating remote administration from HTTP-based WinRM to HTTPS.
- Coordinated migration dependencies across teams, including firewall rules, load-balancing changes, network updates, and server configuration.
- Improved observability by creating Splunk dashboards and email alerts for dependency-server health and service status.
- Created PowerShell connectivity checks and operational documentation to support ongoing maintenance.
- **Tools:** PowerShell, Bash, Azure Pipelines, Azure Releases, Windows Server, WinRM, RabbitMQ, Redis, and Splunk.

### 6. Azure-to-AWS application migration

- Established a reusable delivery path for deploying applications to AWS EKS, enabling new applications to complete their initial setup within two hours.
- Designed GitHub Actions workflows for ASP.NET Core backends and Angular frontends, including unit testing, container image scanning, and dependency scanning.
- Integrated AWS Secrets Manager with EKS workloads through IRSA for secure runtime secret retrieval.
- Migrated Angular application telemetry from Azure Application Insights to AWS CloudWatch using OpenTelemetry for a cloud-agnostic observability approach.
- **Tools:** OpenTelemetry, AWS CloudWatch, ASP.NET Core, Angular, AWS Secrets Manager, GitHub Actions, and Amazon EKS.

### 7. Lower-memory Excel processing for large datasets

- Reduced memory usage by 50% when processing datasets containing millions of rows.
- Replaced the ClosedXML approach with OpenXML's SAX-based processing model and used container storage for generated Excel files instead of keeping them in memory.
- Used Azure Application Insights metrics and Postman testing to compare memory usage before and after the change.
- **Tools:** ASP.NET Core, OpenXML, Azure Application Insights, and Postman.

### 8. More flexible Helm charts and deployment troubleshooting

- Removed hardcoded values from Helm templates so deployments could support different application configurations.
- Added a pipeline step to render Kubernetes manifests before deployment, making configuration issues easier to investigate.
- Updated the chart structure to support multiple CronJobs without duplicating template logic.
- **Tools:** Helm and Azure Pipelines.

### 9. Clearer ASP.NET Core error handling

- Identified common network-related ASP.NET Core exceptions and added custom messages to provide the frontend with more actionable troubleshooting information.
- Increased the Kubernetes Ingress proxy timeout to accommodate a dependency API that required additional processing time.
- Improved the information available to users and support teams during application incidents.

## Responsibilities

- Managed reusable shared pipeline templates for development teams and their CI/CD workflows.
- Managed the upgrade and update lifecycle of Azure Kubernetes Service clusters.
- Maintained and improved Terraform modules used to bootstrap AKS environments.
- Supported developers with Docker, Terraform, AKS access, Azure, and CI/CD issues.
- Created guidance and documentation covering DevOps and Azure cloud best practices.
- Guided teams through Azure subscription migrations and Terraform implementation.
- Continuously improved Azure Pipelines and delivery workflows.

# Software Engineer at Ørsted

## Responsibilities

- Built, maintained, and delivered ASP.NET Core and Angular features from development through production deployment.
- Contributed technical input during discussions about new application features.
- Kept ASP.NET Core and Angular dependencies current to reduce application vulnerabilities.
- Managed and improved CI/CD pipelines and Helm chart templates supporting development teams.
- Mentored junior developers on DevOps practices and delivery workflows.
- Responded to application incidents and implemented improvements to strengthen reliability.