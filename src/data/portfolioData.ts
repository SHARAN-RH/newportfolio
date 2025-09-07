export const personalInfo = {
  name: "Sharan H",
  title: "Aspiring DevOps Engineer",
  description: "About me: Master of Computer Applications graduate focused on scalable infrastructure, automation, and intelligent workflows.",
  email: "sharanrhiremani@gmail.com",
  phone: "+91 8618733015",
  github: "https://github.com/sharan-rh",
  linkedin: "https://linkedin.com/in/sharanrh",
  resumeUrl: "/Sharan_Hiremani_Resume.pdf"
};

export const skills = [
  { name: "GitHub", icon: "github", proficiency: 82, projects: 20, certification: null },
  { name: "Docker", icon: "container", proficiency: 78, projects: 12, certification: "Docker Certified Associate" },
  { name: "Kubernetes", icon: "network", proficiency: 65, projects: 8, certification: "CKA" },
  { name: "Ansible", icon: "settings", proficiency: 72, projects: 10, certification: null },
  { name: "AWS", icon: "cloud", proficiency: 75, projects: 14, certification: "AWS Solutions Architect" },
  { name: "Terraform", icon: "layers", proficiency: 68, projects: 9, certification: null },
  { name: "Jenkins", icon: "zap", proficiency: 70, projects: 11, certification: null },
  { name: "Prometheus", icon: "activity", proficiency: 63, projects: 7, certification: null },
  { name: "Grafana", icon: "bar-chart", proficiency: 65, projects: 8, certification: null },
  { name: "Python", icon: "code", proficiency: 85, projects: 18, certification: null },
  { name: "JavaScript", icon: "code2", proficiency: 80, projects: 16, certification: null },
  { name: "Go", icon: "terminal", proficiency: 60, projects: 6, certification: null },
  { name: "React", icon: "monitor", proficiency: 77, projects: 13, certification: null },
  { name: "Linux", icon: "server", proficiency: 88, projects: 25, certification: "RHCSA" },
  { name: "SQL", icon: "database", proficiency: 74, projects: 12, certification: null },
  { name: "Machine Learning", icon: "brain", proficiency: 55, projects: 5, certification: null },
  { name: "Flask", icon: "flask", proficiency: 70, projects: 8, certification: null },
  { name: "Shell Scripting", icon: "terminal", proficiency: 82, projects: 15, certification: null },
  { name: "ArgoCD", icon: "gitops", proficiency: 58, projects: 4, certification: null },
  { name: "HTML", icon: "html", proficiency: 90, projects: 20, certification: null },
  { name: "CSS", icon: "css", proficiency: 85, projects: 18, certification: null },
  { name: "TIG Stack", icon: "monitoring", proficiency: 62, projects: 6, certification: null },
  { name: "ELK Stack", icon: "logging", proficiency: 68, projects: 7, certification: null }
];

export const projects = [
  {
    title: "Deploy a Dockerized Flask App on Kubernetes Using Ansible",
    description: "Complete deployment pipeline for Flask applications using Docker containerization, Kubernetes orchestration, and Ansible automation.",
    technologies: ["Flask", "Docker", "Kubernetes", "Ansible"],
    githubUrl: "https://github.com/SHARAN-RH/Final/tree/main/Project_03",
    duration: "2 weeks",
    status: "Completed",
    highlights: [
      "Dockerized Flask application",
      "Kubernetes deployment automation",
      "Ansible playbook orchestration",
      "Scalable microservices architecture"
    ],
  },
  {
    title: "Complete CI/CD Pipeline with Jenkins, Docker, and a Local Registry — from Scratch",
    description: "End-to-end CI/CD pipeline implementation with Jenkins automation, Docker containerization, and local registry management.",
    technologies: ["Jenkins", "Docker", "Local Registry", "CI/CD"],
    githubUrl: "https://github.com/SHARAN-RH/Final/tree/main/Project_04",
    duration: "3 weeks",
    status: "Completed",
    highlights: [
      "Jenkins pipeline automation",
      "Local Docker registry setup",
      "Automated testing integration",
      "Zero-downtime deployments"
    ],
  },
  {
    title: "Full CI/CD Pipeline with Jenkins, Docker & Ansible (No DockerHub!)",
    description: "Comprehensive CI/CD solution using Jenkins, Docker, and Ansible without external registry dependencies.",
    technologies: ["Jenkins", "Docker", "Ansible", "CI/CD"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_05/my-app",
    duration: "4 weeks",
    status: "Completed",
    highlights: [
      "Self-hosted container registry",
      "Ansible deployment automation",
      "Multi-stage pipeline",
      "Infrastructure as Code"
    ],
  },
  {
    title: "Jenkins CI/CD Cluster with Custom Docker & Kubernetes — No Prebuilt Images",
    description: "Custom Jenkins cluster implementation with Docker and Kubernetes using only custom-built images and configurations.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Custom Images"],
    githubUrl: "https://github.com/SHARAN-RH/Final/tree/main/Project_02",
    duration: "5 weeks",
    status: "Completed",
    highlights: [
      "Custom Docker image creation",
      "Jenkins cluster on Kubernetes",
      "No external dependencies",
      "High availability setup"
    ],
  },
  {
    title: "Ansible Cluster with Docker and Kubernetes",
    description: "Automated cluster management using Ansible for Docker and Kubernetes infrastructure provisioning and configuration.",
    technologies: ["Ansible", "Docker", "Kubernetes", "Automation"],
    githubUrl: "https://github.com/SHARAN-RH/Final/tree/main/Project_01",
    duration: "3 weeks",
    status: "Completed",
    highlights: [
      "Ansible cluster automation",
      "Docker swarm integration",
      "Kubernetes cluster setup",
      "Configuration management"
    ],
  },
  {
    title: "Deploying Jenkins + Ansible on a Manually Created Kubernetes Cluster (with kubeadm)",
    description: "Manual Kubernetes cluster creation using kubeadm with Jenkins and Ansible deployment for complete DevOps automation.",
    technologies: ["Kubernetes", "kubeadm", "Jenkins", "Ansible"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_06",
    duration: "4 weeks",
    status: "Completed",
    highlights: [
      "Manual Kubernetes setup with kubeadm",
      "Jenkins master-slave configuration",
      "Ansible integration",
      "Complete DevOps toolchain"
    ],
  },
  {
    title: "Building & Deploying Flask-Based Microservices with Docker, PostgreSQL, Redis & DevOps Principles",
    description: "Comprehensive microservices architecture implementation using Flask, Docker containerization, PostgreSQL database, Redis caching, and modern DevOps practices.",
    technologies: ["Flask", "Docker", "PostgreSQL", "Redis", "Microservices"],
    githubUrl: "https://github.com/SHARAN-RH/Microservice-DevOps",
    duration: "5 weeks",
    status: "Completed",
    highlights: [
      "Microservices architecture design",
      "Docker multi-container setup",
      "PostgreSQL database integration",
      "Redis caching implementation",
      "DevOps best practices"
    ],
  },
  {
    title: "Ansible-Driven Configuration Management Inside Kubernetes Pods",
    description: "Advanced configuration management solution using Ansible to automate and manage configurations within Kubernetes pod environments.",
    technologies: ["Ansible", "Kubernetes", "Configuration Management", "Automation"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_07",
    duration: "3 weeks",
    status: "Completed",
    highlights: [
      "Pod-level configuration automation",
      "Ansible playbook integration",
      "Dynamic configuration updates",
      "Kubernetes-native automation"
    ],
  },
  {
    title: "CI/CD Pipeline: Jenkins + Ansible + Docker + Kubernetes (Minikube)",
    description: "Complete CI/CD pipeline implementation combining Jenkins automation, Ansible configuration management, Docker containerization, and Kubernetes deployment using Minikube.",
    technologies: ["Jenkins", "Ansible", "Docker", "Kubernetes", "Minikube"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_08",
    duration: "4 weeks",
    status: "Completed",
    highlights: [
      "End-to-end CI/CD pipeline",
      "Multi-tool integration",
      "Minikube local deployment",
      "Automated testing and deployment"
    ],
  },
  {
    title: "LAMP Stack Web App Using Ansible and Kubernetes from Scratch (No Prebuilt Images!)",
    description: "Custom LAMP stack deployment using Ansible automation and Kubernetes orchestration, built entirely from scratch without any prebuilt images.",
    technologies: ["LAMP Stack", "Ansible", "Kubernetes", "Custom Images"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_09_final/ansible",
    duration: "6 weeks",
    status: "Completed",
    highlights: [
      "Custom LAMP stack implementation",
      "Zero prebuilt image dependency",
      "Ansible automation scripts",
      "Kubernetes orchestration"
    ],
  },
  {
    title: "Monitoring Dockerized Microservices with Prometheus & Grafana Using Ansible and Kubernetes",
    description: "Comprehensive monitoring solution for Dockerized microservices using Prometheus metrics collection, Grafana visualization, deployed via Ansible on Kubernetes.",
    technologies: ["Prometheus", "Grafana", "Docker", "Ansible", "Kubernetes"],
    githubUrl: "https://github.com/SHARAN-RH/Phase02_Projects/tree/main/Project_10_kuber_v2",
    duration: "4 weeks",
    status: "Completed",
    highlights: [
      "Prometheus metrics collection",
      "Grafana dashboard creation",
      "Microservices monitoring",
      "Ansible-driven deployment"
    ],
  }
];

// export const certifications = [
//   {
//     title: "AWS Solutions Architect Associate",
//     issuer: "Amazon Web Services",
//     year: "2024",
//     skills: ["Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
//     url: "https://aws.amazon.com/certification/"
//   },
//   {
//     title: "Certified Kubernetes Administrator (CKA)",
//     issuer: "Cloud Native Computing Foundation",
//     year: "2024",
//     skills: ["Cluster Management", "Networking", "Security", "Troubleshooting"],
//     url: "https://cncf.io/certification/cka/"
//   },
//   {
//     title: "Docker Certified Associate",
//     issuer: "Docker Inc.",
//     year: "2023",
//     skills: ["Container Orchestration", "Image Management", "Security", "Networking"],
//     url: "https://docker.com/certification/"
//   },
//   {
//     title: "Red Hat Certified System Administrator",
//     issuer: "Red Hat",
//     year: "2023",
//     skills: ["Linux Administration", "System Security", "Automation", "Troubleshooting"],
//     url: "https://redhat.com/certification/"
//   }
// ];

export const experience = [
  {
    title: "Junior Developer Intern",
    company: "ONIR Technologies",
    location: "Canada (Remote)",
    period: "Jan 2025 - Present",
    achievements: [
      "Deployed containerized environments with Docker and orchestrated scalable workflows through Kubernetes, integrating network topology log files to ensure consistent builds and stable deployments for multiple project modules throughout the internship.",
      "Automated Infrastructure configurations with Ansible Playbooks and enhanced system observability using the TIG and ELK stacks, leveraging network logs to proactively detect bottlenecks and maintain peak performance during development sprints.",
      " Explored intelligent automation solutions by studying Agentic and Cisco DCAIE frameworks, translating research insights into actionable proposals that elevated system reliability and scalability during the internship phase.",
    ]
  },
  {
    title: "Junior IoT Developer Intern",
    company: "SpaceZee Technologies",
    location: "Chennai, TN",
    period: "April 2024 - Sep 2024",
    achievements: [
      "Designed and implemented a scalbale IoT architecture for smart switches, ensuring seamless hardware-software integration",
      "Developed user-friendly applications for remote control and monitoring, enhancing user experience and functionality",
      "Streamlined communication protocols to ensure reliable and consistent connectivity across IoT devices in the network.",
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "KLS Gogte Institute of Technologies",
    location: "Belagavi, Karnataka",
    year: "2024",
    cgpa: "7.1/10.0",
    
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "SKE's GS Science College",
    location: "Belagavi, Karnataka",
    year: "2021",
    gpa: "7.9/10.0",
    
  }
];

export const blogs = [
  {
    title: "Auto-Deploying a Flask Microservice with Jenkins & Docker",
    snippet: "Step-by-step guide to building automated deployment pipelines for Flask microservices using Jenkins and Docker with real code examples.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/@sharan-rh/autodeploying-a-flask-microservice-with-jenkins-docker-a-step-by-step-guide-with-real-code-0b484b3d4bcd"
  },
  {
    title: "From Monolith to Microservices: Building & Deploying Flask-Based Microservices with Docker",
    snippet: "Complete transformation guide from monolithic architecture to microservices using Flask and Docker containerization.",
    platform: "Medium",
    category: "Architecture",
    url: "https://medium.com/@sharan-rh/from-monolith-to-microservices-building-deploying-flask-based-microservices-with-docker-cda112b9e520"
  },
  {
    title: "From Zero to Full CI/CD Pipeline: Jenkins + Ansible + Docker + Kubernetes (Minikube)",
    snippet: "Comprehensive guide to building a complete CI/CD pipeline from scratch using Jenkins, Ansible, Docker, and Kubernetes.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/@sharan-rh/from-zero-to-full-ci-cd-pipeline-jenkins-ansible-docker-kubernetes-minikube-52c032fc3131"
  },
  {
    title: "Automating the Future: Build an Ansible Cluster with Docker and Kubernetes",
    snippet: "Step-by-step guide to creating automated infrastructure using Ansible cluster management with Docker and Kubernetes integration.",
    platform: "Medium",
    category: "Automation",
    url: "https://medium.com/@sharan-rh/automating-the-future-build-an-ansible-cluster-with-docker-and-kubernetes-step-by-step-for-44826e71c648"
  },
  {
    title: "Ansible-Driven Configuration Management Inside Kubernetes Pods",
    snippet: "Hands-on guide for beginners to implement configuration management inside Kubernetes pods using Ansible automation.",
    platform: "Medium",
    category: "Configuration Management",
    url: "https://medium.com/@sharan-rh/ansible-driven-configuration-management-inside-kubernetes-pods-a-hands-on-guide-for-beginners-a29c0636c538"
  },
  {
    title: "Deploying Jenkins + Ansible on a Manually Created Kubernetes Cluster with kubeadm",
    snippet: "Complete walkthrough of setting up Jenkins and Ansible on a manually configured Kubernetes cluster using kubeadm.",
    platform: "Medium",
    category: "Kubernetes",
    url: "https://medium.com/@sharan-rh/deploying-jenkins-ansible-on-a-manually-created-kubernetes-cluster-with-kubeadm-067fb15ae607"
  },
  {
    title: "Building a Jenkins CI/CD Cluster with Custom Docker & Kubernetes (No Prebuilt Images)",
    snippet: "Advanced guide to creating a Jenkins CI/CD cluster using custom Docker images and Kubernetes without any prebuilt dependencies.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/@sharan-rh/building-a-jenkins-ci-cd-cluster-with-custom-docker-kubernetes-no-prebuilt-images-no-c97549ba566a"
  },
  {
    title: "From Zero to Production: How I Built a Full CI/CD Pipeline with Jenkins, Docker & Ansible",
    snippet: "Real-world experience building a production-ready CI/CD pipeline using Jenkins, Docker, and Ansible without external dependencies.",
    platform: "Medium",
    category: "Production",
    url: "https://medium.com/@sharan-rh/from-zero-to-production-how-i-built-a-full-ci-cd-pipeline-with-jenkins-docker-ansible-no-e931c368bcee"
  },
  {
    title: "Complete CI/CD Pipeline without DockerHub Dependencies",
    snippet: "Building a self-contained CI/CD pipeline that eliminates external registry dependencies for maximum control and security.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/@sharan-rh/no-dockerhub-16edfb07483a"
  },
  {
    title: "Deploy a Dockerized Flask App on Kubernetes Using Ansible: A Real-World DevOps Walkthrough",
    snippet: "Comprehensive real-world guide to deploying Flask applications on Kubernetes using Ansible automation and best practices.",
    platform: "Medium",
    category: "DevOps",
    url: "https://medium.com/@sharan-rh/deploy-a-dockerized-flask-app-on-kubernetes-using-ansible-a-real-world-devops-walkthrough-9fc2af9bc0d8"
  },
  {
    title: "Building & Deploying Flask Microservices with Docker & PostgreSQL",
    snippet: "Complete guide to creating scalable Flask microservices architecture with Docker containerization and PostgreSQL database integration.",
    platform: "Medium",
    category: "DevOps",
    url: "https://medium.com/p/a5e95b10990e"
  },
  {
    title: "Ansible Configuration Management in Kubernetes Pods",
    snippet: "Advanced techniques for managing configurations inside Kubernetes pods using Ansible automation and best practices.",
    platform: "Medium",
    category: "Automation",
    url: "https://medium.com/p/3b005ad552ad"
  },
  {
    title: "CI/CD Pipeline with Jenkins, Docker & Kubernetes",
    snippet: "Step-by-step implementation of a complete CI/CD pipeline using Jenkins, Docker containers, and Kubernetes orchestration.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/p/05cba10f9e77"
  },
  {
    title: "LAMP Stack Deployment with Ansible & Kubernetes",
    snippet: "Building a custom LAMP stack from scratch using Ansible automation and Kubernetes deployment without prebuilt images.",
    platform: "Medium",
    category: "Infrastructure",
    url: "https://medium.com/p/1eaeb91bc3b9"
  },
  {
    title: "Monitoring Microservices with Prometheus & Grafana",
    snippet: "Comprehensive monitoring solution for Dockerized microservices using Prometheus metrics and Grafana dashboards.",
    platform: "Medium",
    category: "Monitoring",
    url: "https://medium.com/p/ff61eb1cb3fc"
  },
  {
    title: "Docker Container Orchestration Best Practices",
    snippet: "Essential practices for managing Docker containers at scale with focus on security, networking, and performance optimization.",
    platform: "Medium",
    category: "Containers",
    url: "https://medium.com/p/e75826d4f562"
  },
  {
    title: "Kubernetes Cluster Management with kubeadm",
    snippet: "Manual Kubernetes cluster setup and management using kubeadm with production-ready configurations and security hardening.",
    platform: "Medium",
    category: "Kubernetes",
    url: "https://medium.com/p/667a1d6a7fb2"
  },
  {
    title: "Infrastructure as Code with Terraform & AWS",
    snippet: "Automating cloud infrastructure provisioning using Terraform with AWS services and implementing DevOps best practices.",
    platform: "Medium",
    category: "IaC",
    url: "https://medium.com/p/113d7270887b"
  },
  {
    title: "Jenkins Pipeline Automation Strategies",
    snippet: "Advanced Jenkins pipeline configurations for automated testing, building, and deployment with multi-stage workflows.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/p/08db269aa9ba"
  },
  {
    title: "Redis Caching in Microservices Architecture",
    snippet: "Implementing Redis caching strategies in microservices for improved performance and scalability in distributed systems.",
    platform: "Medium",
    category: "Architecture",
    url: "https://medium.com/p/f847bd69ce87"
  },
  {
    title: "DevOps Security: Container Scanning & Compliance",
    snippet: "Essential security practices for containerized applications including vulnerability scanning and compliance automation.",
    platform: "Medium",
    category: "Security",
    url: "https://medium.com/p/08bd1585bd2c"
  },
  {
    title: "Kubernetes Networking Deep Dive",
    snippet: "Understanding Kubernetes networking concepts, CNI plugins, service mesh, and network policies for production deployments.",
    platform: "Medium",
    category: "Networking",
    url: "https://medium.com/p/3f5c80e18652"
  },
  {
    title: "Automated Testing in DevOps Pipelines",
    snippet: "Implementing comprehensive testing strategies in CI/CD pipelines with unit tests, integration tests, and security scanning.",
    platform: "Medium",
    category: "Testing",
    url: "https://medium.com/p/48f216f6c849"
  },
  {
    title: "GitOps Workflow with ArgoCD & Kubernetes",
    snippet: "Modern GitOps practices using ArgoCD for continuous deployment and infrastructure management in Kubernetes environments.",
    platform: "Medium",
    category: "GitOps",
    url: "https://medium.com/p/5af5f62272db"
  },
  {
    title: "Cloud-Native Application Development",
    snippet: "Building cloud-native applications with microservices, containers, and serverless technologies for modern infrastructure.",
    platform: "Medium",
    category: "Cloud Native",
    url: "https://medium.com/p/d798eb8801f9"
  },
  {
    title: "Helm Charts for Kubernetes Applications",
    snippet: "Creating and managing Kubernetes applications using Helm charts with templating, versioning, and deployment strategies.",
    platform: "Medium",
    category: "Kubernetes",
    url: "https://medium.com/p/93aeb4417e33"
  },
  {
    title: "Multi-Cloud DevOps Strategies",
    snippet: "Implementing DevOps practices across multiple cloud providers with focus on portability and vendor independence.",
    platform: "Medium",
    category: "Multi-Cloud",
    url: "https://medium.com/p/97656dba9924"
  },
  {
    title: "Observability in Distributed Systems",
    snippet: "Implementing comprehensive observability with logging, metrics, and tracing in microservices and distributed architectures.",
    platform: "Medium",
    category: "Observability",
    url: "https://medium.com/p/485608703487"
  },
  {
    title: "Database Management in Kubernetes",
    snippet: "Running stateful applications and databases in Kubernetes with persistent volumes, operators, and backup strategies.",
    platform: "Medium",
    category: "Databases",
    url: "https://medium.com/p/f438f33e0a61"
  },
  {
    title: "Service Mesh Implementation with Istio",
    snippet: "Implementing service mesh architecture using Istio for microservices communication, security, and traffic management.",
    platform: "Medium",
    category: "Service Mesh",
    url: "https://medium.com/p/9f3ab157cbc6"
  },
  {
    title: "Kubernetes Autoscaling Strategies",
    snippet: "Implementing horizontal and vertical pod autoscaling in Kubernetes for optimal resource utilization and cost efficiency.",
    platform: "Medium",
    category: "Scaling",
    url: "https://medium.com/p/e336a025ec38"
  },
  {
    title: "DevSecOps: Security in CI/CD Pipelines",
    snippet: "Integrating security practices into DevOps workflows with automated security testing and compliance validation.",
    platform: "Medium",
    category: "DevSecOps",
    url: "https://medium.com/p/213f9e2aec35"
  },
  {
    title: "Container Registry Management & Security",
    snippet: "Best practices for managing container registries with security scanning, access control, and image lifecycle management.",
    platform: "Medium",
    category: "Security",
    url: "https://medium.com/p/c0f45b4f0903"
  },
  {
    title: "Kubernetes Disaster Recovery Planning",
    snippet: "Implementing disaster recovery strategies for Kubernetes clusters with backup, restore, and business continuity planning.",
    platform: "Medium",
    category: "Disaster Recovery",
    url: "https://medium.com/p/184f539a2319"
  },
  {
    title: "API Gateway Patterns in Microservices",
    snippet: "Implementing API gateway patterns for microservices architecture with routing, authentication, and rate limiting.",
    platform: "Medium",
    category: "API Management",
    url: "https://medium.com/p/b268505cdee4"
  },
  {
    title: "Event-Driven Architecture with Kafka",
    snippet: "Building event-driven microservices using Apache Kafka for asynchronous communication and data streaming.",
    platform: "Medium",
    category: "Event Streaming",
    url: "https://medium.com/p/3dfe3ca6e47e"
  },
  {
    title: "Kubernetes Resource Management & Optimization",
    snippet: "Optimizing Kubernetes resource allocation with requests, limits, and quality of service classes for efficient cluster utilization.",
    platform: "Medium",
    category: "Optimization",
    url: "https://medium.com/p/1e7ecae1441f"
  },
  {
    title: "Blue-Green Deployment Strategies",
    snippet: "Implementing blue-green deployment patterns for zero-downtime releases with automated rollback and traffic switching.",
    platform: "Medium",
    category: "Deployment",
    url: "https://medium.com/p/f75b672e2615"
  },
  {
    title: "Logging Architecture for Microservices",
    snippet: "Designing centralized logging solutions for microservices using ELK stack and structured logging best practices.",
    platform: "Medium",
    category: "Logging",
    url: "https://medium.com/p/764fe89fbc00"
  },
  {
    title: "Kubernetes Secrets Management",
    snippet: "Secure secrets management in Kubernetes using external secret operators and encryption at rest strategies.",
    platform: "Medium",
    category: "Security",
    url: "https://medium.com/p/9ea2a7036989"
  },
  {
    title: "Performance Testing in DevOps",
    snippet: "Implementing performance testing strategies in CI/CD pipelines with load testing and performance monitoring.",
    platform: "Medium",
    category: "Performance",
    url: "https://medium.com/p/b28eb44e0511"
  },
  {
    title: "Kubernetes Ingress Controllers Comparison",
    snippet: "Comprehensive comparison of Kubernetes ingress controllers including NGINX, Traefik, and cloud-native solutions.",
    platform: "Medium",
    category: "Networking",
    url: "https://medium.com/p/97ac0bb57c49"
  },
  {
    title: "Chaos Engineering in Production",
    snippet: "Implementing chaos engineering practices to build resilient systems with controlled failure injection and monitoring.",
    platform: "Medium",
    category: "Reliability",
    url: "https://medium.com/p/35a9e6e26526"
  },
  {
    title: "Container Image Optimization Techniques",
    snippet: "Advanced techniques for optimizing Docker images including multi-stage builds, layer caching, and security hardening.",
    platform: "Medium",
    category: "Optimization",
    url: "https://medium.com/p/6eedf7d9dc39"
  },
  {
    title: "Kubernetes Custom Resources & Operators",
    snippet: "Building custom Kubernetes operators and resources for application-specific automation and lifecycle management.",
    platform: "Medium",
    category: "Kubernetes",
    url: "https://medium.com/p/02b4f2f8890d"
  },
  {
    title: "Infrastructure Monitoring with Prometheus",
    snippet: "Setting up comprehensive infrastructure monitoring using Prometheus with custom metrics and alerting rules.",
    platform: "Medium",
    category: "Monitoring",
    url: "https://medium.com/p/1928091024bd"
  },
  {
    title: "Serverless DevOps with AWS Lambda",
    snippet: "Implementing DevOps practices for serverless applications using AWS Lambda with automated deployment and monitoring.",
    platform: "Medium",
    category: "Serverless",
    url: "https://medium.com/p/c9ca0d4bf117"
  },
  {
    title: "Kubernetes Pod Security Standards",
    snippet: "Implementing Kubernetes pod security standards and policies for enhanced container security and compliance.",
    platform: "Medium",
    category: "Security",
    url: "https://medium.com/p/364a43a968fb"
  },
  {
    title: "DevOps Metrics & KPIs for Success",
    snippet: "Essential DevOps metrics and KPIs for measuring deployment frequency, lead time, and system reliability.",
    platform: "Medium",
    category: "Metrics",
    url: "https://medium.com/p/e304f1c2c3b0"
  },
  {
    title: "Kubernetes Storage Solutions Comparison",
    snippet: "Comprehensive guide to Kubernetes storage options including persistent volumes, storage classes, and CSI drivers.",
    platform: "Medium",
    category: "Storage",
    url: "https://medium.com/p/4161ea5ecb10"
  },
  {
    title: "GitLab CI/CD Pipeline Optimization",
    snippet: "Advanced GitLab CI/CD pipeline configurations with parallel jobs, caching strategies, and deployment automation.",
    platform: "Medium",
    category: "CI/CD",
    url: "https://medium.com/p/b57e188a648a"
  },
  {
    title: "Microservices Testing Strategies",
    snippet: "Comprehensive testing approaches for microservices including contract testing, integration testing, and end-to-end testing.",
    platform: "Medium",
    category: "Testing",
    url: "https://medium.com/p/ef106b155a5e"
  },
  {
    title: "Kubernetes Cluster Upgrades & Maintenance",
    snippet: "Best practices for Kubernetes cluster upgrades, maintenance windows, and ensuring high availability during updates.",
    platform: "Medium",
    category: "Maintenance",
    url: "https://medium.com/p/2374be0ff41b"
  },
  {
    title: "DevOps Culture & Team Collaboration",
    snippet: "Building effective DevOps culture with team collaboration, communication strategies, and organizational transformation.",
    platform: "Medium",
    category: "Culture",
    url: "https://medium.com/p/555b469a515d"
  }
];

export const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001",
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2022",
    credentialId: "DCA-2022-001",
    verifyUrl: "https://docker.com/verification"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    credentialId: "CKA-2023-001",
    verifyUrl: "https://cncf.io/verification"
  }
];
