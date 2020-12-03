const { src, dest, parallel } = require("gulp");

function htmlTask() {
  return src("src/*.html").pipe(dest("dist"));
}

function stylesTask() {
  return src("src/css/*.css").pipe(dest("dist/css/"));
}

function scriptsTask() {
  return src("src/js/*.js").pipe(dest("dist/js/"));
}

function imagesTask() {
  return src("src/images/*").pipe(dest("dist/images/"));
}

exports.html = htmlTask;
exports.styles = stylesTask;
exports.scripts = scriptsTask;
exports.images = imagesTask;
exports.default = parallel(htmlTask, stylesTask, scriptsTask, imagesTask);
