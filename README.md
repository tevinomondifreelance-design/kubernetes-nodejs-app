# Kubernetes Node.js Application

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployed-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---
A production-style **Node.js web application** containerized with **Docker** and deployed on **Kubernetes** using Docker Desktop Kubernetes.

This project demonstrates core DevOps concepts including containerization, Kubernetes deployments, ConfigMaps, Services, Namespaces, and application orchestration.

---
## Highlights

- Dockerized Node.js web application
- Kubernetes Deployment with 2 replicas
- Kubernetes Service (NodePort)
- ConfigMap for application configuration
- Dedicated Kubernetes Namespace
- Responsive banking-style frontend
- Docker Desktop Kubernetes deployment
- Production-style project structure
---
## Project Status

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Docker_Desktop-blue?style=for-the-badge)
![OS](https://img.shields.io/badge/OS-Windows_11-0078D6?style=for-the-badge&logo=windows)
---

## Project Overview

This project showcases how to:

- Build a Node.js application
- Containerize the application using Docker
- Deploy the application to Kubernetes
- Configure application settings with ConfigMaps
- Expose the application using a NodePort Service
- Manage workloads with Kubernetes Deployments
- Organize resources within a dedicated Namespace

---

## Tech Stack

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript
- Docker
- Kubernetes
- Docker Desktop Kubernetes
- Git
- GitHub

---

## Project Structure

```text
kubernetes-nodejs-app
│
├── app
│   ├── public
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
│   ├── package.json
│   └── server.js
│
├── k8s
│   ├── namespace.yaml
│   ├── deployment.yml
│   ├── service.yml
│   └── configmap.yaml
│
├── screenshots
│   ├── home-page.jpg
│   ├── docker-container.jpg
│   └── kubernetes-pods.jpg
│
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# Docker Build

Build the Docker image

```bash
docker build -t kubernetes-nodejs-app .
```

Run the container

```bash
docker run -d -p 3000:3000 --name k8s-node-app kubernetes-nodejs-app
```

View running containers

```bash
docker ps
```

---

# Kubernetes Deployment

Create the namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

Deploy all Kubernetes resources

```bash
kubectl apply -f k8s/
```

View pods

```bash
kubectl get pods -n nodejs
```

View services

```bash
kubectl get svc -n nodejs
```

View deployments

```bash
kubectl get deployments -n nodejs
```

---

# Kubernetes Resources

This project includes:

- Namespace
- Deployment
- Service (NodePort)
- ConfigMap

---

# Application Features

- Responsive banking-style portfolio homepage
- Loading animation
- Modern UI
- Docker containerized
- Kubernetes deployment
- Configurable through ConfigMaps
- Production-ready project structure

---

# Screenshots

## Home Page

<p align="center">
  <img src="./screenshots/home-page.jpg" alt="Home Page" width="900">
</p>

---

## Docker Container

<p align="center">
  <img src="./screenshots/docker-container.jpg" alt="Docker Container" width="900">
</p>

---

## Kubernetes Pods

<p align="center">
  <img src="./screenshots/kubernetes-pods.jpg" alt="Kubernetes Pods" width="900">
</p>

---

# Skills Demonstrated

- Docker
- Dockerfile creation
- Docker image management
- Containerization
- Kubernetes
- Deployments
- Services
- ConfigMaps
- Namespaces
- Node.js
- Express.js
- Linux CLI
- Git
- GitHub

---

# Future Improvements

- Helm Charts
- Ingress Controller
- Horizontal Pod Autoscaler
- Persistent Volumes
- GitHub Actions CI/CD
- Prometheus & Grafana Monitoring
- Argo CD GitOps Deployment

---

# Author

**Tevin Omondi**

DevOps Engineer | Cloud Engineer | Backend Developer

LinkedIn:
https://www.linkedin.com/in/tevin-omondi-131141355

GitHub:
https://github.com/tevinomondifreelance-design


---

## License

This project is licensed under the MIT License.
