'use strict';

/* create instance & export */
const fractal = module.exports = require('@frctl/fractal').create();

/* project & title name */
fractal.set('Style Guide', 'Fractal | Style Guide');

/* components dir */
fractal.components.set('path', __dirname + '/fractal/src/components');

/* documentation dir */
fractal.docs.set('path', __dirname + '/fractal/src/docs');

/* static */
fractal.web.set('static.path', __dirname + '/fractal/src/bundle/css');
fractal.web.set('static.mount', 'styleguide-demo/fractal/src/bundle/css');