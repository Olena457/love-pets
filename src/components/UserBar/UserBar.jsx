import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/usersSelectors.js';
import Icon from '../../components/Icon/Icon.jsx';
import css from './UserBar.module.css';

const UserBar = () => {
  const userData = useSelector(selectUser);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={css.userBarContainer}>
      <Link to="/profile" className={css.circle}>
        <Icon id="user" width={24} height={24} />
      </Link>
      <span className={`${css.userName} ${isHomePage ? css.whiteText : ''}`}>
        {userData?.name}
      </span>
    </div>
  );
};

export default UserBar;
