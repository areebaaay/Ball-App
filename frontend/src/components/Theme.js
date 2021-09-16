import { createTheme } from '@material-ui/core/styles';

const ballBlue = '#0B72B9';
const ballOrange = '#FFBA60';

export default createTheme({
  palette: {
    common: {
      blue: `${ballBlue}`,
      orange: `${ballOrange}`,
    },
    primary: {
      main: `${ballBlue}`,
    },
    secondary: {
      main: `${ballOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
