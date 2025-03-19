import css from './UserBar.module.css';
import Icon from '../../components/Icon/Icon.jsx';

const UserBar = () => {
  return (
    <>
      <div className={css.circle}>
        <Icon id="user" width={20} height={20} className={css.userIcon} />
      </div>
    </>
  );
};

export default UserBar;
