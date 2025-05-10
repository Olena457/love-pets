// import Modal from '../../components/Modal/Modal.jsx';
// import { useSelector } from 'react-redux';
// import {
//   selectIsAuthenticated,
//   selectUser,
// } from '../../redux/users/usersSelectors.js';
// import ModalAttention from '../ModalAttention/ModalAttention.jsx';
// import ModalNotices from '../ModalNotices/ModalNotices.jsx';

// const ContainerModal = () => {
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const user = useSelector(selectUser);
//   const notice = useSelector(state => state.notices.selectedNotice);

//   return (
//     <Modal>
//       {!isAuthenticated || !user ? (
//         <ModalAttention />
//       ) : notice ? (
//         <ModalNotices notice={notice} />
//       ) : null}
//     </Modal>
//   );
// };

// export default ContainerModal;
