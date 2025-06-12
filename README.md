# DevOps-Assignment

# 🧰 Task Manager – Docker Microservices Assignment

This project is a simple **Task Manager application** built as part of a Docker assignment to demonstrate microservices deployment using manual Docker commands. It uses a **Node.js backend** with **MongoDB** for task storage, running entirely inside Docker containers.

---

## 📌 Features

- Create and manage tasks via a RESTful API
- Persistent storage using a MongoDB container with authentication
- Local Docker network to enable communication between services
- Docker volumes for data persistence
- Image pushed to Docker Hub
- Manual container orchestration (no Docker Compose)
- **Creative enhancements** planned

---

## ⚙️ Tech Stack

| Layer     | Technology            |
| --------- | --------------------- |
| Backend   | Node.js + Express     |
| Database  | MongoDB (Dockerized)  |
| ORM       | Mongoose              |
| Container | Docker                |
| Network   | Docker custom network |

---

### 🪵 Creative Enhancement: Custom Logging

We enhanced the backend to log:

- MongoDB connection success/failure
- Task creation events
- Internal server errors

These logs can be viewed using:

````bash
docker logs backend-1


## 🐳 Docker Setup

### 1. Create Docker Network

```bash
docker network create docker-assignment
````
