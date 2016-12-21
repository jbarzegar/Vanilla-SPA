import gulp from 'gulp'
import util from 'gulp-util'

// JS
import uglify from 'gulp-uglify'
// Webpack
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import config from '../conf/webpack.prod.config'

// CSS
import scss from 'gulp-sass'
import pcss from 'gulp-postcss'

// PCSS Plugins
import autoprefixer from 'autoprefixer'
import rucksack from 'rucksack-css'
import mqpacker from 'css-mqpacker'

import size from 'gulp-size'
import csso from 'gulp-csso'

import inject from 'gulp-inject'

const plugins = [
  autoprefixer({
    browsers: ['last 7 versions']
  }),
  rucksack(),
  mqpacker({ sort: true })
]

// Paths
import { scripts, styles, images, html } from '../conf/paths'

function handleErr(error) {
  util.log(error.toString())

  this.emit('end')
}

function compileScripts() {
  // Js build
  util.log('Compiling js...')
  gulp.src(scripts.prod.in)
    .pipe(named())
    .pipe(webpack(config))
    .pipe(uglify())
    .on('error', handleErr)
    .pipe(gulp.dest(scripts.prod.out))
    .on('end', compileStyles)
}

function compileStyles() {
  // Scss build
  const injectFiles = gulp.src([
    'src/modules/**/*.scss'
  ], { read: false })

  const injectOps = {
    starttag: '/* inject:start */',
    endtag: '/* inject:end */',
    addRootSlash: false,
    transform: (filepath) => {
      return `@import '${filepath}';`
    }
  }

  util.log('Compiling CSS...')
  gulp.src(styles.prod.in)
    .pipe(inject(injectFiles, injectOps))
    .pipe(scss({ outputStyle: 'expanded' }))
    .on('error', handleErr)
    .pipe(pcss(plugins))
    .pipe(csso())
    .pipe(size())
    .pipe(gulp.dest(styles.prod.out))
    .on('end', moveImg)
}

function moveImg() {
  // Images
  util.log('Moving Images...')
  gulp.src(images.dev.in)
    .pipe(gulp.dest(images.prod.out))
    .on('end', moveHtml)
}

function moveHtml() {
  // Move HTML
  util.log('Moving HTML...')
  gulp.src(html.dev.in)
    .pipe(gulp.dest(html.prod.root_out))

  return gulp.src(html.dev.watch)
    .pipe(gulp.dest(html.prod.templates_out))
    .on('end', () => util.log(util.colors.green('Build complete')))
}

function compile() {
  util.log('Starting build...')
  compileScripts()
}

export default compile
