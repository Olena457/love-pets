import css from './UserCard.module.css';
import Icon from '../Icon/Icon';
import { UserBlock } from './UserBlock/UserBlock.jsx';
import { PetBlock } from './PetBlock/PetBlock.jsx';
import { useDispatch } from 'react-redux';
import { openModalEditUser } from '../../redux/modal/modalSlice.js';

export const UserCard = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.userCardWrapper}>
      <div className={css.userCardBageWrapper}>
        <p className={css.userBage}>
          User
          <Icon name="user" width={18} height={18} />
        </p>
        <button
          className={css.userCardEditButton}
          onClick={() => dispatch(openModalEditUser())}
        >
          <Icon id="edit" width={18} height={18} />
        </button>
      </div>
      <UserBlock />
      <PetBlock />
    </div>
  );
};
