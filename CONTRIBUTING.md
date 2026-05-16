# Contributing & Local Development

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

---

## Setup

1. Clone the repository:
```bash
git clone https://github.com/michaelc143/personal-angular-site
cd personal-angular-site
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

---

## Local Development

Start the dev server:
```bash
npm run start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app hot-reloads on file changes.

---

## Build

```bash
npm run build
```

Build artifacts are output to the `dist/` directory.

---

## Testing

### Unit Tests
Run unit tests in watch mode:
```bash
npm run test
```

### E2E Tests (Playwright)
Run E2E tests against the local server:
```bash
npx playwright test
```

To view the last HTML report:
```bash
npx playwright show-report
```

---

## CI/CD

Automated workflows run on every push and pull request:

| Workflow | Trigger | Description |
|---|---|---|
| `deploy.yml` | Push/PR | Unified Pipeline: Unit Tests -> E2E Tests -> Build -> Deploy |
| `docker-image.yml` | Push to `main` | Production build and unit test verification |

---

## Code Style

- Components follow Angular's single-responsibility pattern — one component per page
- SCSS is scoped per component; no global overrides except in `styles.scss`
- All string data lives in the component `.ts` file, never hardcoded in templates
- Dark mode is handled via `DarkModeService` subscription in `ngOnInit`
