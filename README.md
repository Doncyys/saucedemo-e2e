![Status](https://img.shields.io/badge/status-complete-ok?style=flat)
![Cypress](https://img.shields.io/badge/Cypress-14.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=flat&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-Educational-lightgrey)

# SauceDemo E2E Testing Project
<details>
<summary>Table of Contents</summary>

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Test Cases](#test-cases)
- [Jira board](#jira-board)
- [License](#license)

</details>

---

## 📰 About The Project

![SauceDemo Login Page](docs/login-page.png)

A Cypress-based QA suite that automates and verifies SauceDemo’s critical workflows using the **standard_user** account.



## 🛠️ Built With

- [Cypress](https://www.cypress.io/)  
- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript)  
- [Node.js](https://nodejs.org/)   



## 🚀 Getting Started

### Dependencies

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" height="20" />
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="npm" height="20" />
  <img src="https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white" alt="Cypress" height="20" />
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" alt="Git" height="20" />
  <img src="https://img.shields.io/badge/Chrome-4285F4?logo=google-chrome&logoColor=white" alt="Chrome" height="20" />
  <img src="https://img.shields.io/badge/Firefox-FF7139?logo=firefox&logoColor=white" alt="Firefox" height="20" />
  
</p>

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Doncyys/saucedemo-e2e.git
   cd saucedemo-e2e
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Run Cypress**  
   ```bash
   npm run cyr
   ```

---

## 📁 Project Structure

```
saucedemo-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   ├── inventory.cy.js
│   │   ├── login.cy.js
│   │   ├── logout.cy.js
│   │   └── negative.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   ├── jira.png
│   └── TestCases.md
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧪 Test Cases

See [TestCases](./docs/TestCases.md) for full list of scenarios and steps:

- **TS.1** Login & Authentication
- **TS.2** Product Browsing & Sorting 
- **TS.3** Cart Operations 
- **TS.4** Checkout & Order Flow 
- **TS.5** Logout & Session Management
- **TS.6** Negative & Edge Cases 

---

## 📊 Jira Board

All test cases are tracked in a Jira Sprint:

<p align="center">
  <img src="docs/jira.png" alt="Jira Sprint Board with all test cases in TO DO" width="80%"/>
</p>


---

## 📄 License

This project is for educational purposes only.  
SauceDemo is owned and maintained by [Sauce Labs](https://saucelabs.com/).