 3.0 Redirect application
===================

## Project setup

Install dependencies

```shell
$  npm install && bower install
```

## Booting up the project

This will start an express server on port 3000 by default. The `env` flag must be passed for the config files to be setup.
Possible values are: `prod`, `dev`, `qa`, `stag`.

```shell
$  gulp serve --env=prod
```

## Running tests
The project use karma and phantomJs. Just run:


```shell
$ gulp test
```