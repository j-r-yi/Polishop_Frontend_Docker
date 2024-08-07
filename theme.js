// "use client"
import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/montserrat';

export const theme = extendTheme({
  colors: {
    brand: {
      light: '#D4F2D3',
      main: '#56BB55',
      dark: '#32703C',
    },
  },
  fonts: {
    heading: "'Montserrat Variable', sans-serif",
    body: "'Montserrat Variable', sans-serif",
  },
});
