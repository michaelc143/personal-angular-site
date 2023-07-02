# PersonalAngularSite

This project is a side hobby being worked on over the course of Summer 2023 while working full-time. If you discover any bugs or have any questions at all, feel free to email me at mcorbishley@wisc.edu

## Installation

1. Clone the repository: 
```bash
git clone https://github.com/michaelc143/personal-angular-site
```
2. Navigate to the project directory
```bash
cd personal-angular-site
```
3. Install the necessary dependencies
```bash
npm install
```

## Local Development server

To run the web app locally once you have cloned it, simply run the following command:
```bash
ng serve
```

This will deploy a local development server that you can access by navigating to `http://localhost:4200/` in your browser to view.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

To execute the unit tests for this web app, run the following command:
```bash
ng test
```

If you want to run the unit tests without opening a chrome window, run the following command
```bash
ng test --watch=false --browsers=ChromeHeadless
```

If you want to run the unit tests for coverage, run the following command
```bash
ng test --watch=false --browsers=ChromeHeadless --code-coverage
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
