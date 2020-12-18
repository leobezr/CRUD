# CRUD &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm)

A very simple and responsive app, useful as a boilerplate. You will find a slightly complex but scalable CRUD system.

## Installing / Getting started

I used `Yarn` for this project, before starting up you will need to have a backend server running. It is set to watch `localhost:3333` but you can change this using env files.

```shell
$ yarn
$ yarn dev
```

Will install dependencies and run project.

## Developing

### Built With
> @vue/cli 4.5.9 
> Vuex 3.4.0
> Vuetify 2.2.11
> Axios 0.21.0
> Vue Router 3.2.0

### Prerequisites

The env files should be set up as the `.env.sample`, but if you wish to have more then one environment such as development, homolog and staging, you should change `package.json` config to proper handle environments.

```shell
git clone https://github.com/leobezr/CRUD.git
cd your-project/
yarn
```

### Building

If you choose to build this project, you should configure the `.env` file and add a `.env.development.local` for development environment.

## Api Reference

You can find the backend documentation [here](https://github.com/leobezr/CRUD-backend)
