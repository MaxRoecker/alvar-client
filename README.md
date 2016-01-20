# Alvar [WebApp Client]

> The web app for using the Educational Health Resources of Alvar.

## Supported by:

* [Polymer](https://www.polymer-project.org/)
* [Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout

## Getting Started

To get the source of the Alvar WebApp Client:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Test or deploy your code.

### Get the code

[Download or clone](https://github.com/MaxRoecker/alvar-client) the Alvar WebApp Client to where you want to work.

:warning: **Important**: The intermediate/advanced version contains dotfiles (files starting with a `.`). If you're copying the contents of the Starter Kit to a new location make sure you bring along these dotfiles as well.

### Install dependencies

#### Prerequisites (for everyone)

To run Alvar WebApp, you'll need these dependencies:

* [Node.js](https://nodejs.org/en/), used to run JavaScript tools from the command line.
* [npm](https://www.npmjs.com/), the node package manager, installed with Node.js and used to install Node.js packages.
* [gulp](http://gulpjs.com/), a Node.js-based build tool.
* [bower](http://bower.io/), a Node.js-based package manager used to install front-end packages (like Polymer).

#### Quick-start

With Node.js installed, run the following one liner from the root of your Polymer Starter Kit download:

```sh
npm install -g gulp bower && npm install && bower install
```

**To install dependencies:**

**1)**  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

**3)**  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

**4)**  Install the Alvar's local `npm` and `bower` dependencies.

```sh
cd alvar-client && npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the Alvar WebApp requires to run, build and test.

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

## Dependency Management

Polymer uses [Bower](http://bower.io) for package management. This makes it easy to keep your elements up to date and versioned. For tooling, we use npm to manage Node.js-based dependencies.

## Licensing

Alvar WebApp is under the MIT License. See `LICENSE.md` to get the full details.
