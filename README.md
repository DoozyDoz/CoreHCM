# CoreHCM

CoreHCM is a Human Capital Management (HCM) application designed to streamline HR processes, manage employee data, and enhance organizational productivity. Built with the SERN stack (SQLite, Express.js, React.js, Node.js), CoreHCM provides a comprehensive solution for managing human resources efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Employee information management
- Attendance tracking
- Payroll processing
- Performance evaluations
- Role-based access control
- Reporting and analytics

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Axios
- **Backend:**
  - Node.js
  - Express.js
  - better-sqlite3 (SQLite database integration)
- **Database:**
  - SQLite

## Folder Structure

CoreHCM/
├── backend/
│   ├── node_modules/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── ...
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── .env
│   └── ...
├── .gitignore
└── README.md

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** installed (version 14.x or higher recommended)
- **npm** or **yarn** package manager
- **Git** installed (for cloning the repository)
- **SQLite** installed on your machine

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CoreHCM.git
cd CoreHCM
```

### 2. Install Dependencies

#### a. Backend Dependencies

```bash
cd backend
npm install
```

#### b. Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 2. Run the Application

#### a. in the root directory run

```bash
npm start
```
