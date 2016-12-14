# personal-website [![Build Status][travis-image]][travis-url] [![dependencies Status][david-image]][david-url] [![devDependencies Status][david-dev-image]][david-dev-url]

Nick Bartlett's personal website. It's currently a WIP.

## Installation

After forking and cloning the codebase, run the following command to install all of the dependencies:

```bash
npm install
```

## Running

Running the site for development is a single command:

```bash
npm run gulp
```

This will run [Gulp](http://gulpjs.com/), starting the Node server. The task wraps the Node server in a proxy server that will be accessible on multiple devices, live reload assets, and watch Node files for changes to stop and start the Node server on changes. It will also lint all of the JavaScript and Sass, compile the Sass, uglify the JavaScript, and optimize the images.

## Testing and Deploying

Testing and deploying is all done through Travis. Whenever a commit comes in to any branch of the repository, Travis will start up and run `npm test` (found in the `scripts` property in `package.json`). If it finds any errors, it'll be angry :rage: and they'll need to be fixed. Once all of the tests pass, Travis will be happy again :green_heart:.

If a commit comes in to the `master` branch and all of the tests pass, Travis will use heroku to create a deployable app from the source code and deploy it on heroku.

## Current Project make-up

Pretty bare-bones at the moment.

* `src` - Browser source files
  * `src/js` - Browser JS files. Will build to `public/js` and be available in the `/js` folder from the browser
  * `src/images` - Images available to the browser. Will build to `public/images` and be available in the `/images` folder from the browser
  * `src/sass` - Sass files to be compiled to CSS. Will build to `public/css` and be available in the `/css` folder from the browser
* `lib` - Node source files
* `views` - Templates to be rendered by the Node server
* `index.js` - Main application file

The following folders contain generated content and _will not_ be included in the source control:

* `public` - The folder browser assets will be served from.
* `node_modules` - The folder containing Node dependencies

The following files are configuration files to configure different parts of the toolchain:

* `gulpfile.js` - [Gulp](http://gulpjs.com/) configuration file
* `.nvmrc` - [NVM](https://github.com/creationix/nvm) version configuration
* `.editorconfig` - [EditorConfig](http://editorconfig.org/) configuration
* `.eslintrc.yml` - [ESLint](http://eslint.org/) lint rule configuration
* `.sass-lint.yml` - [Sass Lint](https://github.com/sasstools/sass-lint) lint rule configuration
* `.travis.yml` - [Travis](https://docs.travis-ci.com/user/customizing-the-build/) configuration
* `.gitignore` - [Git](https://git-scm.com/docs/gitignore) source control ignore file

[travis-image]: https://travis-ci.org/tteltrab/personal-website.svg?branch=master
[travis-url]: https://travis-ci.org/tteltrab/personal-website
[david-image]: https://david-dm.org/tteltrab/personal-website/status.svg
[david-url]: https://david-dm.org/tteltrab/personal-website
[david-dev-image]: https://david-dm.org/tteltrab/personal-website/dev-status.svg
[david-dev-url]: https://david-dm.org/tteltrab/personal-website?type=dev
