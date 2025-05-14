// import { openApproveModal } from '../../../redux/modal/modalSlice.js';
// import { useDispatch } from 'react-redux';
import Icon from '../../Icon/Icon.jsx';
import LogoutButton from '../../LogoutButton/LogoutButton.jsx';
import css from './PetBlock.module.css';

const PetBlock = () => {
  // const dispatch = useDispatch();
  // const handleLogoutClick = () => {
  //   dispatch(openApproveModal());
  // };
  return (
    <div className={css.petBlockWrapper}>
      <h2 className={css.titlePet}>My pets</h2>
      <div className={css.ButnAdd}>
        Add pet
        <Icon id="plus" size={18} height={18} color="#fff" />
      </div>
      <LogoutButton isHomePage={false} />
      {/* <div className={css.logoutBtn} onClick={handleLogoutClick}>
        LOG OUT
      </div> */}
    </div>
  );
};
export default PetBlock;
