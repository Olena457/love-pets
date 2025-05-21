import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/usersSelectors.js';
import Icon from '../../components/Icon/Icon.jsx';

import css from './UserBar.module.css';

const UserBar = () => {
  const userData = useSelector(selectUser);

  return (
    <div className={css.userBarContainer}>
      <span className={css.userName}>{userData?.name}</span>
      <Link to="/profile" className={css.circle}>
        <Icon id="user" width={18} height={18} />
      </Link>
    </div>
  );
};

export default UserBar;
