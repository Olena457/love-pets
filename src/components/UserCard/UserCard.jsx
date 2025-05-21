import { useDispatch, useSelector } from 'react-redux';
import { openModalEditUser } from '../../redux/modal/modalSlice';
import Icon from '../Icon/Icon.jsx';
import UserBlock from '../UserBlock/UserBlock.jsx';
import { selectProfile } from '../../redux/profile/profileSelectors.js';
import PetBlock from '../PetBlock/PetBlock.jsx';
import css from './UserCard.module.css';
import defaultAvatar from '../../assets/imgs/test.jpg';
// import ProfileContainer from '../ProfileContainer/ProfileContainer.jsx';

const UserCard = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectProfile);
  return (
    <div className={css.userCardWrapper}>
      <div className={css.userCardBageWrapper}>
        <p className={css.userBage}>
          User
          <Icon className={css.bageUser} id="user" width={18} height={18} />
        </p>
        <button
          className={css.userCardEditButton}
          onClick={() => dispatch(openModalEditUser())}
        >
          <Icon id="edit" width={18} height={18} />
        </button>
      </div>
      <UserBlock avatar={userData.avatar || { defaultAvatar }} />
      <PetBlock />
    </div>
  );
};
export default UserCard;
