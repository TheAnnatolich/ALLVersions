const gulp = require("gulp"),
  browserSync = require("browser-sync").create();

gulp.task("hello", function (done) {
  console.log("Hi");
  done();
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
});

var minifycss = require("gulp-minify-css");

gulp.task("css", function () {
  return gulp
    .src("src/css/*.css")
    .pipe(minifycss())
    .pipe(gulp.dest("dist/css"));
});
