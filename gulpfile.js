const { src, dest, series, parallel } = require("gulp");
const del = require("del");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

function clearTask() {
  return del("dist/*");
}

function htmlTask() {
  return src("src/*.html").pipe(dest("dist"));
}

function stylesTask() {
  return src("src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(concat("all.css"))
    .pipe(dest("dist/css/"));
}

function scriptsTask() {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat("all.js"))
    .pipe(dest("dist/js/"));
}

function imagesTask() {
  return src("src/images/*").pipe(dest("dist/images/"));
}

exports.clear = clearTask;
exports.html = htmlTask;
exports.styles = stylesTask;
exports.scripts = scriptsTask;
exports.images = imagesTask;
exports.default = series(
  clearTask,
  parallel(htmlTask, stylesTask, scriptsTask, imagesTask)
);
