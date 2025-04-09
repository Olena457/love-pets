import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import Modal from '../../components/Modal/Modal.jsx';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import ModalNotices from '../ModalNotices/ModalNotices.jsx';

const ModalWrapper = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Modal>{isAuthenticated ? <ModalNotices /> : <ModalAttention />}</Modal>
  );
};

export default ModalWrapper;
