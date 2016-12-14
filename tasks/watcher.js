import watch from 'gulp-watch'

import { scripts, styles, images, html } from '../conf/paths'

// Tasks
import compileScripts from './scripts'
import compileStyles from './styles'
import moveImg from './images'
import { compileIndex, compileTemplate } from './html'

export default bs => {
  const reload = bs.reload
  const stream = bs.stream

  // Watch scripts
  watch(scripts.dev.watch, () => compileScripts(reload))
  watch(styles.dev.watch, () => compileStyles(stream))
  watch(images.dev.in, () => moveImg(reload))
  watch(html.dev.in, () => compileIndex(reload))
  watch(html.dev.watch, () => compileTemplate(reload))
}
