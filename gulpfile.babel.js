import gulp from 'gulp'

import browserSync from 'browser-sync'

import rm from 'rimraf'

import watcher from './tasks/watcher'
import devServer from './conf/dev-server'

const bs = browserSync.create()

import build from './tasks/build'

gulp.task('watcher', ['dev-server'], () => {
  watcher(bs)
})

gulp.task('dev-server', () => {
  devServer(bs)
})

gulp.task('build', () => {
  // Delete build then start the new build
  rm('./build', build)
})

gulp.task('default', ['watcher'])
