# Michael Corbishley | Software Development Consultant
### Enterprise SaaS Architecture • AI-Driven Automation • Consultative Delivery

[![CI/CD Pipeline](https://github.com/michaelc143/personal-angular-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/michaelc143/personal-angular-site/actions/workflows/deploy.yml)
[![Build and Test](https://github.com/michaelc143/personal-angular-site/actions/workflows/docker-image.yml/badge.svg)](https://github.com/michaelc143/personal-angular-site/actions/workflows/docker-image.yml)
[![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Playwright](https://img.shields.io/badge/E2E-Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/)

**Live Architecture:** [michaelc143.github.io/personal-angular-site](https://michaelc143.github.io/personal-angular-site)

---

## Architectural Vision
This repository functions as a live enterprise architectural showcase. It demonstrates the technical rigor and strategic mindset required to build scalable, observable, and high-integrity systems for global SaaS platforms.

### Automated Governance
The repository utilizes GitHub Actions for continuous integration and deployment.
*   **Playwright E2E Tests:** Executed on every pull request and push to `main` to ensure architectural integrity.
*   **Automated Deployment:** Pushes to the `main` branch trigger an automated build and deployment to GitHub Pages (michaelcorbishley.com), with custom domain persistence guaranteed via `CNAME` asset management.

*   **Consultative Approach:** Documentation and code structured for transparency, scalability, and long-term maintenance.

---

## Technical Stack

| Layer | Technology | Implementation Detail |
|---|---|---|
| **Frontend** | Angular 16 | Modular component architecture with OnPush change detection. |
| **Testing** | Playwright | Full user-journey E2E automation with CI/CD integration. |
| **Design System** | SCSS Variables | Theme-aware tokens for consistent UI delivery. |
| **DevOps** | GitHub Actions | Automated build, test, and deployment governance. |
| **Containerization**| Docker | Consistent environment orchestration for production parity. |

---

## Professional Features

### 1. Automated E2E Testing (Playwright)
The application includes a suite of E2E tests simulating critical user journeys.
*   **Brand Consistency:** Verifies professional messaging and consultant-focused narratives.
*   **Responsive Integrity:** Validates layout stability across mobile and desktop viewports.
*   **Theme Robustness:** Ensures CSS variable transitions during dark mode activation.

### 2. Semantic Design System
The application utilizes a variable-driven theme system to ensure visual consistency and maintainability.
*   Centralized theme tokens in `src/styles.scss`.
*   Accessibility-first color palettes for multiple theme contexts.
*   Professional typography and depth-based UI elements.

### 3. Impact-Oriented Project Narratives
Projects are presented as strategic assets with defined technical and business impact:
*   **Enterprise-Scale Architecture Kit:** Focuses on modularity and rapid deployment.
*   **Automated Data Extraction Pipeline:** Focuses on ETL reliability and professional utility.

---

## Repository Structure

```bash
├── .github/workflows/    # CI/CD Governance (Playwright, Docker, Pages)
├── e2e/                  # Playwright E2E Test Suite
├── src/app/
│   ├── home-page/        # Hero section & Consultative Narrative
│   ├── projects-page/    # Enterprise Project Showcase
│   ├── experience-page/  # Professional Career Timeline
│   └── logos/            # Asset management
└── styles.scss           # Semantic Variable-Based Design System
```

---

## Local Development

### Prerequisites
*   Node.js (v20+)
*   Angular CLI 16

### Installation
```bash
npm install --legacy-peer-deps
```

### Development Server
```bash
npm run start
```

### E2E Testing
```bash
npx playwright test
```

---

## Contact

*   **LinkedIn:** [linkedin.com/in/michael-corbishley](https://www.linkedin.com/in/michael-corbishley/)
*   **GitHub:** [github.com/michaelc143](https://github.com/michaelc143)
*   **Email:** [corbishleymichael1@gmail.com](mailto:corbishleymichael1@gmail.com)
