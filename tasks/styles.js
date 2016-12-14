import gulp from 'gulp'
import util from 'gulp-util'

import maps from 'gulp-sourcemaps'
import inject from 'gulp-inject'

// Compiler
import scss from 'gulp-sass'
import pcss from 'gulp-postcss'

// Pcss plugins
import autoprefixer from 'autoprefixer'
import rucksack from 'rucksack-css'

import { styles } from '../conf/paths'

const plugins = [
  autoprefixer({
    browsers: ['last 7 versions']
  }),
  rucksack()
]

function handleErr(error) {
  util.log(error.toString())

  this.emit('end')
}

function compile(reload) {
  const injectFiles = gulp.src([
    'src/modules/**/*.scss'
  ], { read: false })

  const injectOps = {
    starttag: '/* inject:start */',
    endtag: '/* inject:end */',
    addRootSlash: false,
    transform: (filepath) => {
      return `@import '${filepath}'`
    }
  }

  util.log('Compiling Styles')
  return gulp.src(styles.dev.in)
    .pipe(maps.init())
    .pipe(inject(injectFiles, injectOps))
    .pipe(scss({ outputStyle: 'expanded' }))
    .on('error', handleErr)
    .pipe(pcss(plugins))
    .pipe(maps.write('.'))
    .pipe(gulp.dest(styles.dev.out))
    .pipe(reload())
}

export default compile
