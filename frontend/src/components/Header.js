import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    //threshold indicates how far the user have to scroll befor its triggered
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <ElevationScroll className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Ball Game
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            {userInfo ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" onClick={logoutHandler}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}
            {userInfo && userInfo.isAdmin && (
              <>
                <Button color="inherit" component={Link} to="/admin/ball">
                  Add Ball
                </Button>
                <Button color="inherit" component={Link} to="/admin/ballList">
                  Balls
                </Button>
                <Button color="inherit" component={Link} to="/admin/userList">
                  Users
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
