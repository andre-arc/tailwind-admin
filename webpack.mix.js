let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.postCss('src/css/style.css', 'css')
   .tailwind()
   .setPublicPath('dist');

mix.browserSync({
   files: [
            "./src",
            "./pages",
            "./dist",
         ],
   server: {
      baseDir: "./",
      index: "pages/index.html"
   }
});