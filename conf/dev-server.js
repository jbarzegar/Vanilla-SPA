import history from 'connect-history-api-fallback'

function devServer(bs) {
  bs.init({
    server: {
      baseDir: './.build'
    },
    middleware: [history()],
    notify: false,
    ui: false,
    reloadOnRestart: true,
    open: false
  })
}

export default devServer
