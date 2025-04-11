import css from './PetBlock.module.css';
import Icon from '../../Icon/Icon.jsx';
import { openApproveModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';

export const PetBlock = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(openApproveModal());
  };
  return (
    <div className={css.petBlockWrapper}>
      <h2 className={css.titlePet}>My pets</h2>
      <div className={css.ButnAdd}>
        {' '}
        Add pet
        <Icon id="plus" size={18} height={18} color="#fff" />
      </div>
      <div className={css.logoutBtn} onClick={handleLogoutClick}>
        LOG OUT
      </div>
    </div>
  );
};
