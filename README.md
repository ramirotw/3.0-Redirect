 3.0 Redirect application
===================

## Project setup

Install dependencies

```shell
$  npm install && bower install
```

## Booting up the project for development

This will start an express server on port 3000 by default. The `env` flag must be passed for the config files to be setup.
Possible values are: `prod`, `dev`, `qa`, `staging`.

```shell
$  gulp serve --env=prod
```

## Booting up for production

First of all, the right `env.config.js` file should be copied into the `/app` folder. Then run:   

```shell
$  node server_start
```

## Running tests
The project use karma and phantomJs. Just run:


```shell
$ gulp test
```