import { Link } from 'react-router-dom';
import css from './UserBar.module.css';
import Icon from '../../components/Icon/Icon.jsx';

const UserBar = () => {
  return (
    <>
      <Link to="/profile" className={css.circle}>
        <Icon id="user" />
      </Link>
    </>
  );
};

export default UserBar;
