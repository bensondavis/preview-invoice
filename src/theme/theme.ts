import {  createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          fontFamily: 'inherit',
          WebkitFontSmoothing: "antialiased"
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          fontFamily: 'inherit',
          textAlign: "right",
          width: "fit-content"
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: "bold"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          textAlign: "left",
        }
      }
    }
  },
  palette:{
    primary: {
      main: "#42a5f5",
      dark: "#42a5f5"
    },
    secondary: {
      main: "#ce93d8"
    },
    error: {
      main: "#f44336"
    }
  }
});

export default theme;