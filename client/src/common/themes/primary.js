/* eslint-disable multiline-comment-style */
import { createMuiTheme } from '@material-ui/core/styles';

// const aqua = '#7fdbff';
const blue = '#0074D9'; /* Medium Electric Blue */
const dark = '#111111'; /* Medium Electric Blue */
const gray = '#999999';
const green = '#3d9970';
const light = '#f2f2f2';
// const lightgray = '#dddddd';
// const lime = '#01ff70';
// const maroon = '#85144b';
const navy = '#001f3f';
const offwhite = '#eef2f4'; /* Porcelian */
const orange = '#ff851b'; /* Tango */
// const purple = '#b10dc9';
const red = '#ff4136';
const teal = '#39cccc';
const yellow = '#ffdc00';

/* Incident Response Site - Material UI Theme */
export default createMuiTheme({
  palette: {
    ai: { contrastText: offwhite, main: navy },
    blue,
    consulting: { contrastText: offwhite, main: blue },
    cosmos: { contrastText: offwhite, main: dark },
    dark,
    energy: { contrastText: offwhite, main: orange },
    finance: { contrastText: offwhite, main: green },
    green,
    health: { contrastText: offwhite, main: teal },
    legal: { contrastText: dark, main: gray },
    light,
    media: { contrastText: offwhite, main: red },
    offwhite,
    orange,
    primary: { contrastText: offwhite, main: blue },
    red,
    secondary: { contrastText: offwhite, main: green },
    technology: { contrastText: offwhite, main: blue },
    transport: { contrastText: offwhite, main: gray },
    type: 'light',
    yellow,
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    useNextVariants: true,
  },
});
