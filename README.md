# Devpack Backend

Devpack is a backend system built in Go using the Fiber web framework, PostgreSQL as the database, and GORM as the ORM.  
The project follows the **Onion Architecture** to provide clean separation of concerns, scalability, and maintainability.

---

## 📁 Project Structure

The folder structure is organized according to Onion Architecture principles:

~~~~
devpack_backend/
├── cmd/ # Entry point of the application (main.go)
│ └── main.go
├── config/ # Application configuration (e.g., database, JWT, env)
├── internal/
│ ├── domain/ # Pure business rules, entities and interfaces
│ │ ├── entity/ # Domain models (e.g., User)
│ │ ├── repository/ # Interfaces for data access (e.g., UserRepository)
│ │ └── usecase/ # Interfaces for business use cases (e.g., UserUsecase)
│ ├── usecase/ # Usecase implementations (business logic)
│ ├── infrastructure/ # Framework & DB dependent implementations (e.g., GORM)
│ ├── delivery/ # Input layer, typically HTTP or other adapters
│ │ └── http/ # HTTP handlers using Fiber
│ └── middlewares/ # Cross-cutting concerns (e.g., JWT authentication)
├── pkg/ # Shared utilities and helper packages
├── .env # Environment variables (excluded from version control)
├── go.mod / go.sum # Go module definition and dependencies~~~~

---
~~~~
## 📘 Commit History

### 🗓️ 17-05-2025

1. Migrated backend from Node.js (Express) to Go with Fiber and GORM.
2. Refactored project structure based on Onion Architecture for better modularity, scalability, and testability.
