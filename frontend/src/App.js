// import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        Welcome to Ball Game
      </ThemeProvider>
    </Router>
  );
};

export default App;
