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
const offwhite = '#eef2f4' /* Porcelian */
const orange = '#ff851b'; /* Tango */
// const purple = '#b10dc9';
const red = '#ff4136';
const teal = '#39cccc';
const yellow = '#ffdc00';

/* Incident Response Site - Material UI Theme */
export default createMuiTheme({
  palette: {
    ai: { main: navy, contrastText: offwhite },
    consulting: { main: blue, contrastText: offwhite },
    cosmos: { main: dark, contrastText: offwhite },
    energy: { main: orange, contrastText: offwhite },
    finance: { main: green, contrastText: offwhite },
    health: { main: teal, contrastText: offwhite },
    legal: { main: gray, contrastText: dark },
    media: { main: red, contrastText: offwhite },
    technology: { main: blue, contrastText: offwhite },
    transport: { main: gray, contrastText: offwhite },
    blue,
    dark,
    green,
    light,
    offwhite,
    orange,
    red,
    primary: { main: blue, contrastText: offwhite },
    secondary: { main: green, contrastText: offwhite },
    yellow,
    type: 'light',
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    useNextVariants: true,
  },
});
