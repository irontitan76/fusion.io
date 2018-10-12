import { createMuiTheme } from '@material-ui/core/styles';

const aqua = '#7fdbff';
const blue = '#0074D9'; /* Medium Electric Blue */
const dark = '#111111'; /* Medium Electric Blue */
const gray = '#999999';
const green = '#3d9970';
const light = '#f2f2f2';
const lightgray = '#dddddd';
const lime = '#01ff70';
const maroon = '#85144b';
const navy = '#001f3f';
const offwhite = '#eef2f4' /* Porcelian */
const olive = '#3d9970';
const orange = '#ff851b'; /* Tango */
const purple = '#b10dc9';
const red = '#ff4136';
const teal = '#39cccc';
const yellow = '#ffdc00';

/* Incident Response Site - Material UI Theme */
export default createMuiTheme({
  palette: {
    aqua,
    blue,
    dark,
    gray,
    green,
    light,
    lightgray,
    lime,
    maroon,
    navy,
    offwhite,
    olive,
    orange,
    primary: { main: blue, contrastText: offwhite },
    purple,
    red,
    secondary: { main: olive, contrastText: offwhite },
    teal,
    type: 'light',
    yellow
  },
  shape: {
    borderRadius: 0
  }
});
