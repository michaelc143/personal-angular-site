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
npm install
```

---

## Local Development

Start the dev server:
```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app hot-reloads on file changes.

---

## Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory.

---

## Testing

Run unit tests in watch mode:
```bash
ng test
```

Run once headlessly (for CI):
```bash
ng test --watch=false --browsers=ChromeHeadless
```

Run with code coverage report:
```bash
ng test --watch=false --browsers=ChromeHeadless --code-coverage
```

Coverage output is written to `coverage/`.

---

## Docker

Build and run with Docker:
```bash
docker build -t personal-angular-site .
docker run -p 4200:4200 personal-angular-site
```

---

## CI/CD

Two GitHub Actions workflows run automatically on push:

| Workflow | Trigger | Description |
|---|---|---|
| `docker-image.yml` | Push to `main` | Builds the Docker image and runs tests |
| `pages-build-deployment` | Push to `main` | Builds and deploys to GitHub Pages |

---

## Code Style

- Components follow Angular's single-responsibility pattern — one component per page
- SCSS is scoped per component; no global overrides except in `styles.scss`
- All string data lives in the component `.ts` file, never hardcoded in templates
- Dark mode is handled via `DarkModeService` subscription in `ngOnInit`
