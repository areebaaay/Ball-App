import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBalls } from '../actions/ballActions';
import Grid from '@material-ui/core/Grid';
import Ball from '../components/Ball';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const ballList = useSelector((state) => state.ballList);
  const { balls, loading } = ballList;

  useEffect(() => {
    dispatch(listBalls());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={3}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            {balls.map((ball) => (
              <Grid item key={ball._id} xs={12} md={6} lg={4}>
                <Ball ball={ball} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};
