<div style='text-align: center; margin: 0 auto'>
  <h1 style='margin-bottom: 0'>Fusion Industries</h1>
  <h3 style='font-weight: 300; margin-top: 0'>Optimizing business through intelligent design</h3>
</div>

<p style='text-align: center'>Note: This project was bootstrapped with <a href='https://github.com/facebookincubator/create-react-app'>Create React App</a>.

## Table of Contents

- [Onboarding Overview](#onboarding-overview)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Supported Browsers](#supported-browsers)

## Notes
- We need to give employees the option to either do consultant work or spend time actively working on products and solutions within the company.

## Machine Dependencies
- Text Editor: [Atom](https://atom.io/)
- Infrastructure: [Google Cloud Console](https://cloud.google.com/sdk/install)
- Relay: [Watchman](https://facebook.github.io/watchman/docs/install.html)

## Onboarding Overview


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