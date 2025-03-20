import css from './UserBar.module.css';
import Icon from '../../components/Icon/Icon.jsx';

const UserBar = () => {
  return (
    <>
      <div className={css.circle}>
        <Icon id="user" />
      </div>
    </>
  );
};

export default UserBar;
