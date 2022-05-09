# Microfrontend-workshop
In this repository we have a simple exercise showing how to create microfrontends using Module Federation technology from Webpack.
The idea of the exercise is to replace each route from the host app by the component that we will load remotelly from each project (Home, Contact and About).

## Install
To install the apps of this exercis you just need to run the following command inside each "project":
```
npm i -f
```

## Run the projects
To run each project you just need to run the following command inside each "project":
```
npm start
```
Each "project" should start a webpack-dev-server in the configured port that you can check in the webpack.config.js files.