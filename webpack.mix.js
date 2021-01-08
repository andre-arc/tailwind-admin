let mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'css')
   .tailwind()
   .setPublic