// import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
        </main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
