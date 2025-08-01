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
    title: "Kubernetes Cluster Automation",
    description: "Automated Kubernetes cluster deployment with Terraform and Ansible for multi-environment setups.",
    technologies: ["Kubernetes", "Terraform", "Ansible", "AWS"],
    githubUrl: "https://github.com/adameve/k8s-automation",
    demoUrl: "https://demo.k8s-automation.com"
  },
  {
    title: "CI/CD Pipeline with Jenkins",
    description: "Complete CI/CD pipeline implementation with automated testing, security scanning, and deployment.",
    technologies: ["Jenkins", "Docker", "GitHub", "AWS"],
    githubUrl: "https://github.com/adameve/cicd-pipeline",
    demoUrl: "https://demo.cicd-pipeline.com"
  },
  {
    title: "Monitoring Stack Deployment",
    description: "Comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for infrastructure observability.",
    technologies: ["Prometheus", "Grafana", "ELK", "Docker"],
    githubUrl: "https://github.com/adameve/monitoring-stack",
    demoUrl: "https://demo.monitoring-stack.com"
  },
  {
    title: "Infrastructure as Code",
    description: "Multi-cloud infrastructure provisioning using Terraform with automated state management.",
    technologies: ["Terraform", "AWS", "Azure", "Python"],
    githubUrl: "https://github.com/adameve/iac-terraform",
    demoUrl: "https://demo.iac-terraform.com"
  }
];

export const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    skills: ["Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
    url: "https://aws.amazon.com/certification/"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2024",
    skills: ["Cluster Management", "Networking", "Security", "Troubleshooting"],
    url: "https://cncf.io/certification/cka/"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2023",
    skills: ["Container Orchestration", "Image Management", "Security", "Networking"],
    url: "https://docker.com/certification/"
  },
  {
    title: "Red Hat Certified System Administrator",
    issuer: "Red Hat",
    year: "2023",
    skills: ["Linux Administration", "System Security", "Automation", "Troubleshooting"],
    url: "https://redhat.com/certification/"
  }
];

export const experience = [
  {
    title: "Junior IoT Developer Intern",
    company: "SpaceZee Technologies",
    location: "Chennai, TN",
    period: "April 2024 - Sep 2024",
    achievements: [
      "Developed IoT data pipeline using Python and AWS services, processing 10K+ sensor readings daily",
      "Implemented Docker containerization for IoT applications, reducing deployment time by 60%",
      "Created automated monitoring dashboards with Grafana, improving system visibility by 40%",
      "Collaborated with DevOps team to establish CI/CD practices for IoT deployments"
    ]
  },
  {
    title: "Junior Developer Intern",
    company: "Osvan Technologies",
    location: "Canada (Remote)",
    period: "Jan 2024 - Present",
    achievements: [
      "Assisted in migrating legacy applications to containerized architecture using Docker",
      "Participated in infrastructure automation projects with Ansible and Terraform",
      "Gained hands-on experience with Kubernetes cluster management and deployment",
      "Contributed to monitoring and alerting setup using Prometheus and Grafana"
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
    title: "Kubernetes Best Practices for Production",
    snippet: "A comprehensive guide to deploying and managing Kubernetes clusters in production environments with security and scalability in mind.",
    platform: "Medium",
    url: "https://medium.com/@adameve/kubernetes-best-practices"
  }
];
