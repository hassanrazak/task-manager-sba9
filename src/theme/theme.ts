import { createTheme } from '@mui/material/styles';

export const typography = {
  fontFamily: 'Roboto, sans-serif',
  h6: {
    fontWeight: 600,
  },
  body2: {
    fontSize: '0.875rem',
  },
  caption: {
    fontStyle: 'italic',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.85rem',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f4f4f4' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#181b20ff' },
  },
});