# Docker Registry UI

[![Docker Stars](https://img.shields.io/docker/stars/ubreu/docker-registry-ui.svg?maxAge=86400)](https://hub.docker.com/r/ubreu/docker-registry-ui/) [![Docker Pulls](https://img.shields.io/docker/pulls/ubreu/docker-registry-ui.svg?maxAge=86400)](https://hub.docker.com/r/ubreu/docker-registry-ui/)

A simple frontend for a [Docker registry](https://github.com/docker/distribution) (version 2)

## Features:

  * Browsing repositories, tags, manifest details and labels in a docker registry (version 2)

## Usage

The docker image requires a single configuration file in JSON format.

The key 'registryHost' must point to the docker registry (URL up to the /v2 segment).
The key 'registryDomainName' should contain the fully qualified domain name and the optional port for the docker registry.

    {
      "registryHost": "http://localhost:5000",
      "registryDomainName": "localhost:5000"
    }

The docker image can then be started as follows:

    docker run --rm -p 8080:80 -v $(pwd)/config.json:/usr/share/nginx/html/assets/config.json ubreu/docker-registry-ui

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.
Install the CLI by running `npm install -g @angular/cli`.

### Install dependencies

Run "npm install" inside this project folder to install all dependencies.
Make sure you use the latest version of the CLI ([upgrade guide](https://github.com/angular/angular-cli#updating-angular-cli))

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `docker build .` to build the docker image.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
