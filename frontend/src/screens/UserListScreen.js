import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../actions/userActions';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
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
            <th>USER ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
          </tr>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Admin' : 'User'}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default UserListScreen;
