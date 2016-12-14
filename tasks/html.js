import gulp from 'gulp'

import { html } from '../conf/paths'

function compileIndex(reload) {
  return gulp.src(html.dev.in)
    .pipe(gulp.dest(html.dev.root_out))
    .on('end', reload)
}

function compileTemplate(reload) {
  return gulp.src(html.dev.watch)
    .pipe(gulp.dest(html.dev.templates_out))
    .on('end', reload)
}

export { compileIndex, compileTemplate }
