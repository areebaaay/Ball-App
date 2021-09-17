import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bookBall, removeBall } from '../actions/ballActions';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Ball = ({ ball }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const bookHandler = (e) => {
    dispatch(bookBall(ball._id));

    setTimeout(() => {
      dispatch(removeBall(ball._id));
    }, 15 * 60 * 1000);
  };

  const returnHandler = (e) => {
    dispatch(removeBall(ball._id));
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={ball.name} />
      <CardMedia className={classes.media} image="images/football.jpg" />
      {/* {ball.image} */}
      <CardContent>
        <Typography variant="subtitle1">In Stock: {ball.inStock}</Typography>
      </CardContent>
      <div>
        <Button color="primary" disabled={!userInfo} onClick={bookHandler}>
          Book a ball
        </Button>
        <Button color="primary" disabled={!userInfo} onClick={returnHandler}>
          Return the ball
        </Button>
      </div>
    </Card>
  );
};

export default Ball;
