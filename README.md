 3.0 Redirect application
===================

## Project setup

Install dependencies

```shell
$  npm install && bower install
```

## Booting up the project for development

This will start an express server on port 3000 by default. The `env` flag must be passed for the config files to be setup.
Possible values are: `prod`, `dev`, `qa`, `staging`. Note: default is `dev`

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

TODO: To simplify server deployment and because this is small, we are including libraries in the repo, and we are not
doing any concat, minify because that would require to install gulp on the server. If this grows, we'll need to change this.


## How does it work - Links

It expects a url param like `?to=/reporting/admin` which will be mapped to
 * `[env].commercialtribe.net/#/reporting/admin`
 * `commercialtribe://reporting/admin`
