import gulp from 'gulp'

import browserSync from 'browser-sync'

import $ from 'gulp-util'

import watcher from './tasks/watcher'
import devServer from './conf/dev-server'

const bs = browserSync.create()

gulp.task('watcher', ['dev-server'], () => {
  watcher(bs)
})

gulp.task('dev-server', () => {
  devServer(bs)
})

gulp.task('default', ['watcher'])
