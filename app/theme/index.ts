import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#0a1929',
      paper: '#1a2027',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a2027',
        },
      },
    },
  },
});

export default theme;