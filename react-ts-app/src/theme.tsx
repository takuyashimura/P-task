import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'blue.500',
      },
    },
  },
});
export default theme;
