# react-node-template

React Node Template is a simple, unopinionated full stack web app template, with the goal of facilitating quick prototyping and deployment to Heroku or elsewhere.

This template combines a **client** generated by `create-react-app` and a **server** generated by `express-generator`.

In local dev, the React dev server & Node server are run side by side, with API calls [proxied](https://create-react-app.dev/docs/proxying-api-requests-in-development/) through the React dev server to the Node server. In production, the Node app will serve both the static React production build and the API.

This project can be deployed as is to Heroku; the `heroku-postbuild` script will generate a production build of the React app and the `start` script will kick off the Node server. An example of this project's `master` branch deployed to Heroku can be found here: https://react-node-temp.herokuapp.com/

## Project Goals

todo

## Local Dev Setup

All commands run from project root:

1. `cd src/client && npm install`
2. `cd src/server && npm install`
3. Make sure `nodemon` & `concurrently` are installed globally
4. `npm run dev`

You will now see the output of both the React dev server and the Node server in your shell, running at the same time thanks to `concurrently`. Enjoy!

## Deploying to Heroku

This project can be deployed as is to Heroku. Check out the [Heroku deployment guide](https://devcenter.heroku.com/categories/deployment) for more info. Some of the most popular deployment strategies include:

- [Deploying with Git](https://devcenter.heroku.com/articles/git) (pushing to Heroku as a remote)
- [Deploying with GitHub](https://devcenter.heroku.com/articles/github-integration) (connecting Heroku to your GitHub account)

## Deploying Elsewhere

todo

## todo

- look into this https://hub.packtpub.com/github-introduces-template-repository-for-easy-boilerplate-code-management-and-distribution/
- explain folder structure
- cleanup unused express etc files
- cleanup react app
- add license
