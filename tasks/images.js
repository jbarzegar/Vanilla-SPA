import gulp from 'gulp'

import util from 'gulp-util'

import { images } from '../conf/paths'

import minify from 'gulp-imagemin'

function compile() {
  util.log('Moving photos')
  return gulp.src(images.dev.in)
    .pipe(minify({ verbose: true }))
    .pipe(gulp.dest(images.dev.out))
}

export default compile
