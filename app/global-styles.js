import {injectGlobal} from 'styled-components'
import {colors, typeface} from './utils/styles'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: ${typeface.size.normal}
  }

  body, label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${colors.gray};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`
