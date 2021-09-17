import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBalls } from '../actions/ballActions';

const BallList = ({ history }) => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const ballList = useSelector((state) => state.ballList);
  const { balls, loading } = ballList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listBalls());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      BALL LIST SCREEN
      {loading ? (
        <h1>LOADING!!!</h1>
      ) : (
        <table
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '5rem',
            borderCollapse: 'collapse',
          }}>
          <tr style={{ backgroundColor: '#3f51b5', color: 'white' }}>
            <th>BALL ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>IN STOCK</th>
            <th>OWNED BY</th>
          </tr>
          {balls.map((ball) =>
            ball.ownedBy.length > 0 ? (
              ball.ownedBy.map((b) => (
                <tr>
                  <td>{ball._id}</td>
                  <td>{ball.name}</td>
                  <td>{ball.image}</td>
                  <td>{ball.inStock}</td>
                  <td>{b.user}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>{ball._id}</td>
                <td>{ball.name}</td>
                <td>{ball.image}</td>
                <td>{ball.inStock}</td>
                <td>-</td>
              </tr>
            )
          )}
        </table>
      )}
    </div>
  );
};

export default BallList;
