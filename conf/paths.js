import path from 'path'

const styleExt = 'scss'
const styleEntry = `main.${styleExt}`

const markupExt = 'html'
const markupEntry = `index.${markupExt}`

const scripts = {
  dev: {
    in: path.join('src', 'main.js'),
    watch: [
      path.join('src', 'main.js'),
      path.join('src', 'modules', '**', '*.js')
    ],
    out: path.join('.build', 'js')
  },
  prod: {
    in: path.join('src', 'main.js'),
    out: path.join('dist', 'js')
  }
}

const styles = {
  dev: {
    in: path.join('src', 'assets', 'styles', `${styleEntry}`),
    watch: [
      path.join('src', 'assets', 'styles', '**', `*.${styleExt}`),
      path.join('src', 'modules', '**', `${styleExt}`)
    ],
    out: path.join('.build', 'css')
  }
}

const imgPath = path.join('src', 'assets', 'img', '**')

const images = {
  dev: {
    in: [
      path.join(imgPath, '*', 'jpg'),
      path.join(imgPath, '*', 'jpeg'),
      path.join(imgPath, '*', 'png'),
      path.join(imgPath, '*', 'gif'),
      path.join(imgPath, '*', 'svg')
    ],
    out: path.join('.build', 'img')
  }
}

const html = {
  dev: {
    in: path.join('src', markupEntry),
    watch: path.join('src', 'templates', '**', `*.${markupExt}`),
    root_out: path.join('.build'),
    templates_out: path.join('.build', 'templates')
  }
}

export {
  scripts,
  styles,
  images,
  html
}
