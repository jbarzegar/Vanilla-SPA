import gulp from 'gulp'
import util from 'gulp-util'

// Webpack
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import config from '../conf/webpack.config'

import { scripts } from '../conf/paths'

function handleErr(error) {
  util.log(error.toString())

  this.emit('end')
}

function compile(reload, callback) {
  util.log('Compiling JS')
  return gulp.src([scripts.dev.in])
    .pipe(named())
    .pipe(webpack(config))
    .on('error', handleErr)
    .pipe(gulp.dest(scripts.dev.out))
    .on('end', () => {
      reload()
      if (!callback) {
        return false
      }
      return callback()
    })
}

export default compile
