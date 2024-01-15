# Project Name: eCommerce

## Version: 1.0.0

## Author: Yaroslav Osmukha

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Scripts](#scripts)
4. [Linting](#linting)
5. [Testing](#testing)
6. [Storybook](#storybook)
7. [Dependencies](#dependencies)
8. [Loki Visual Testing](#loki-visual-testing)

## Introduction
**eCommerce** is a front-end application scaffolded using Feature-Sliced Design (FSD), an architectural methodology for structuring front-end projects. This readme provides essential information on how to set up, develop, and test the application.

## Installation
To get started, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd studiopresto-test
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Scripts
Start the development server with webpack, specifying development mode, port, and API URLs. You can customize the API and EmailJS variables using the `--env` flag:
```bash
npm start --env apiUrl=https://fakestoreapi.com --env emailjsServiceId=your_emailjs_service_id --env emailjsTemplateId=your_emailjs_template_id --env emailjsUserId=your_emailjs_user_id
```

- **start**: Start the development server with webpack, specifying development mode, port, and API URLs.
- **build:prod**: Build the application for production.
- **build:dev**: Build the application for development.
- **lint:ts**: Lint TypeScript files using ESLint.
- **lint:ts:fix**: Fix linting issues in TypeScript files.
- **lint:scss**: Lint SCSS files using Stylelint.
- **lint:scss:fix**: Fix linting issues in SCSS files.
- **test:unit**: Run unit tests using Jest.
- **test:e2e**: Open Cypress for end-to-end testing.
- **test:ui**: Run UI tests using Loki.
- **test:ui:ok**: Approve UI tests.
- **test:ui:ci**: Run UI tests in CI mode.
- **test:ui:report**: Generate and view UI test reports.

## Linting
Linting ensures code quality and adherence to coding standards. Use the following linting scripts:

- **lint:ts**: Lint TypeScript files.
- **lint:ts:fix**: Fix linting issues in TypeScript files.
- **lint:scss**: Lint SCSS files.
- **lint:scss:fix**: Fix linting issues in SCSS files.

## Testing
- **test:unit**: Run Jest for unit tests.
- **test:e2e**: Open Cypress for end-to-end testing.
- **test:ui**: Run UI tests using Loki.
- **test:ui:ok**: Approve UI tests.
- **test:ui:ci**: Run UI tests in CI mode.
- **test:ui:report**: Generate and view UI test reports.

## Storybook
- **storybook**: Start the Storybook development server.
- **storybook:build**: Build the Storybook for deployment.

## Dependencies
Key dependencies include React, Redux Toolkit, MUI, Axios, I18next, and more. Refer to `package.json` for the complete list.

## Loki Visual Testing
Loki is configured for visual testing. Use the following commands:
- **test:ui**: Run UI tests.
- **test:ui:ok**: Approve UI tests.
- **test:ui:ci**: Run UI tests in CI mode.
- **test:ui:report**: Generate and view UI test reports.

Configure Loki with different screen sizes using the provided configurations.

Feel free to customize and extend this scaffolded project according to your needs. Happy coding!
