import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import AddBallScreen from './screens/AddBallScreen';
import UserListScreen from './screens/UserListScreen';
import BallListScreen from './screens/BallListScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/admin/ball" component={AddBallScreen} />
          <Route path="/admin/userList" component={UserListScreen} />
          <Route path="/admin/ballList" component={BallListScreen} />
          <Route path="/profile" component={UpdateProfileScreen} />
        </main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
