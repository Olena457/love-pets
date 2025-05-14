import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/usersSlice.js';
import Icon from '../../components/Icon/Icon.jsx';
import css from './UserBar.module.css';

const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.userBarContainer}>
      <Link to="/profile" className={css.circle}>
        <Icon id="user" width={18} height={18} />
      </Link>
      <span className={css.userName}>{user?.name}</span>
    </div>
  );
};

export default UserBar;
