import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    grey?: string;
  }

  interface SimplePaletteColorOptions {
    grey?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#ffffff',
      grey: '#c8c9cb',
      main: '#3e5fff',
      dark: '#000000',
    },
    secondary: {
      light: '#b9babd',
      grey: '#383c43',
      main: '#f3f7fc',
      dark: '#8a8c91',
    },
    background: {
      default: '#ffffff',
      paper: '#f3f7fc',
    },
  },
  spacing: 4,
  typography: {
    fontSize: 16,
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(8),

          [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6),
            paddingLeft: 0,
          },
        }),
        alignLeft: ({ theme }) => ({
          [theme.breakpoints.up('xs')]: {
            paddingLeft: 0,
          },
        }),
        alignRight: ({ theme }) => ({
          [theme.breakpoints.up('xs')]: {
            paddingRight: 0,
          },
        }),
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: ({ theme }) => ({
          fontSize: theme.spacing(6),
        }),
      },
    },
  },
});
