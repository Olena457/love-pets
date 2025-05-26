import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openApproveModal } from '../../redux/modal/modalSlice.js';
import Icon from '../Icon/Icon.jsx';
import css from './PetBlock.module.css';

const PetBlock = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(openApproveModal());
  };
  return (
    <div className={css.petBlockWrapper}>
      <div className={css.containerButton}>
        <h2 className={css.titlePet}>My pets</h2>
        <Link to="/add-pet" className={css.ButnAdd}>
          Add pet
          <Icon id="plus" size={18} height={18} color="#fff" />
        </Link>
      </div>
      <div className={css.logoutBtn} onClick={handleLogoutClick}>
        LOG OUT
      </div>
    </div>
  );
};
export default PetBlock;
