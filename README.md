# react-node-template

React Node Template is a simple, unopinionated, full stack web app template, with the goal of facilitating quick prototyping and deployment to [Heroku](https://www.heroku.com/) or elsewhere.

This template combines a **client** generated by `create-react-app` and a **server** generated by `express-generator`.

In local dev, the React dev server & Node server are run side by side, with API calls [proxied](https://create-react-app.dev/docs/proxying-api-requests-in-development/) through the React dev server to the Node server. In production, the Node app will serve both the static React production build and the API.

This project can be deployed as is to Heroku; the `heroku-postbuild` script will generate a production build of the React app and the `start` script will kick off the Node server. An example of this project's `master` branch deployed to Heroku can be found here: https://react-node-temp.herokuapp.com/

## Overview

The goal of this project is a simple, turnkey, full stack web app that can be easily deployed to Heroku with no further configuration. By combining the frontend **client** and backend **server** into the same repository, rapid development and prototyping (possibly by a single developer) are prioritized.

In the interest of being bare-bones and unopinionated, React Node Template does NOT include:

- **Routing:** [React Router](https://github.com/ReactTraining/react-router) is a good option.
- **State management:** [Redux](https://github.com/reduxjs/redux) is most popular, but there are lighter weight solutions that may be better for some projects.
- **Auth:** Many options here, but [Auth0](https://auth0.com/docs/quickstart/spa/react/01-login) is one of the easier implementation paths.
- **Component styling:** [Material-UI](https://material-ui.com/) is fairly turnkey way to get started, or [Styled Components](https://styled-components.com/) if you want the flexibility to design everything yourself.

## Development

### Project Structure

- `src/client` contains the [React](https://reactjs.org/) app
- `src/server` contains the [Node](https://nodejs.org/) [Express.js](https://expressjs.com/) app
- `package.json` in the project root contains scripts to run in dev mode locally, and also to build and run on Heroku

### Local Dev Setup

All commands run from project root:

1. `cd src/client && npm install`
2. `cd src/server && npm install`
3. Make sure `nodemon` & `concurrently` are installed globally
4. `npm run dev`

You will now see the output of both the React dev server and the Node server in your shell, running at the same time thanks to `concurrently`. Enjoy!

### Client<->Server Communication

The Node Express.js server is initialized with one router mounted at `/api`. We've implemented a sample route at `/api/users`. Edit the `src/server/routes/api.js` file to add your own routes and server-side logic.

In the React app, you can see in `src/client/src/App.js` where we're calling `/api/users` using `fetch`. `App.js` is a [functional component](https://reactjs.org/docs/components-and-props.html#function-and-class-components), so you can see how we're using `useEffect` to call our API on component mount, and `useState` to update component state when we receive a response from the API.

## Deployment

### Heroku

This project can be deployed as is to Heroku. Check out the [Heroku deployment guide](https://devcenter.heroku.com/categories/deployment) for more info. Some of the most popular deployment strategies include:

- [Deploying with Git](https://devcenter.heroku.com/articles/git) (pushing to Heroku as a remote)
- [Deploying with GitHub](https://devcenter.heroku.com/articles/github-integration) (connecting Heroku to your GitHub account)

### Elsewhere

Deploying to [Amazon Web Services](https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/), [Google Cloud](https://cloud.google.com/nodejs), [Microsoft Azure](https://azure.microsoft.com/en-us/develop/nodejs/), etc should work similarly. Just make sure to run the `heroku-postbuild` script, which generates the React production files, before the `start` entry point is hit. Depending on your use case and hosting infrastructure, it might make sense to [Dockerize](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/) this template.

## TODO

- look into this https://hub.packtpub.com/github-introduces-template-repository-for-easy-boilerplate-code-management-and-distribution/
- cleanup unused express etc files
- cleanup react app
- add license
