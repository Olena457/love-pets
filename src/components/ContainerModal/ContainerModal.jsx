import { useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  selectUser,
} from '../../redux/users/usersSelectors.js';
import ModalAttention from './ModalAttention.jsx';
import ModalNotices from './ModalNotices.jsx';

const ContainerModal = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const notice = useSelector(state => state.notices.selectedNotice);

  if (!isAuthenticated || !user) {
    return <ModalAttention />;
  }

  if (!notice) {
    return null;
  }

  return <ModalNotices notice={notice} />;
};

export default ContainerModal;
