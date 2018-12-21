<div style='text-align: center;'>

<img src='./client/public/atom-alt.svg' height='150' style='margin-bottom: 0;' />

<h1 style='font-weight: 300; letter-spacing: 10px; margin-top: 10px; margin-bottom: 0;'>FUSION INDUSTRIES</h1>

<h4 style='font-weight: 500; margin-top: 0;'>
  Optimizing business through intelligent design
</h4>

</div>

<h2 style='border-bottom: 4px solid #0074D9; display: inline-block;'>Table of Contents</h2>

- [Notes](#notes)
- [Our Team](#our-team)
- [Our Standard](#our-standard)
  - [Folder Structure](#folder-structure)
  - [Paradigms](#paradigms)
  - [Organization](#organization)
  - [Process](#process)
- [Workstation Setup](#onboarding)
  - [Aliases](#aliases)
  - [Atom](#atom)
  - [Git](#git)
  - [GitHub](#github)
  - [Google Cloud](#google-cloud)
  - [GraphicsMagick](#graphicsmagick)
  - [Node](#node)
- [Common Dependencies](#common-dependencies)
  - [Concurrently](#concurrently)
  - [Lodash](#lodash)
  - [Validator](#validator)
- [Client Dependencies](#client-dependencies)
  - [React](#react)
  - [Redux](#redux)
  - [Material UI](#material-ui)
  - [Webpack](#webpack)
- [Server Dependencies](#server-dependencies)
  - [Express](#express)
  - [GraphQL](#graphql)
  - [Mongoose](#mongoose)
  - [gm](#gm)
- [Developer Workflow](#developer-workflow)
  - [Available Scripts](#available-scripts)
  - [Adding Client Features](#adding-client-features)
  - [Adding Server Features](#adding-server-features)
  - [Linting](#linting)
  - [Unit Testing](#unit-testing)
  - [E2E Testing](#e2e-testing)
- [Supported Browsers](#supported-browsers)

<h2 id='notes' style='border-bottom: 4px solid #0074D9; display: inline-block;'>Notes</h2>

- We need to give employees the option to either do consultant work or spend time actively working on products and solutions within the company.

<h2 id='notes' style='border-bottom: 4px solid #0074D9; display: inline-block;'>Onboarding</h2>


## Folder Structure

After creation, your project should look like this:

```
fusion-io/
  node_modules/
  package.json
  public/
    index.html
    images/
    favicon.ico
    manifest.json
  src/
    actions/
    api/
    common/
      assets/
      functions/
      themes/
    components/
      Footer.js
      Nav.js
      ...
    reducers/
    views/
      view1/
        view1Component1.js
        view1Component2.js
        ...
    index.js
    registerServiceWorker.js
    store.js
  .gitignore
  .npmrc
  app.yaml
  package-lock.json
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run deploy`

Deploys the app for production to the Google Cloud Platform instance.