import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }

  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

const muiTheme = createTheme();

const MuiThemeWrapper = ({ children }: { readonly children: ReactNode }) => (
  <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
);

export default MuiThemeWrapper;
