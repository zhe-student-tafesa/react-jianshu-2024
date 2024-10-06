//In order to write global styles, then write reset.css in the global
import { createGlobalStyle } from 'styled-components';

export const GlobalStyleIcon = createGlobalStyle`

@font-face {
  font-family: "iconfont"; /* Project id 2984774 */
  src: url('./iconfont.woff2?t=1638499929992') format('woff2'),
       url('./iconfont.woff?t=1638499929992') format('woff'),
       url('./iconfont.ttf?t=1638499929992') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;




