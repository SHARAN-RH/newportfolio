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
      "Assisted in migrating legacy applications to containerized architecture using Docker",
      "Participated in infrastructure automation projects with Ansible and Terraform",
      "Gained hands-on experience with Kubernetes cluster management and deployment",
      "Contributed to monitoring and alerting setup using Prometheus and Grafana"
    ]
  },
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
