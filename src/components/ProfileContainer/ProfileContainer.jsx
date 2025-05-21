import css from './ProfileContainer.module.css';

const ProfileContainer = ({ children }) => {
  return <div className={css.containerProfile}>{children}</div>;
};

export default ProfileContainer;
