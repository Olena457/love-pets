import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../redux/modal/modalSlice.js';
import {
  selectIsApproveModalOpen,
  selectIsOpenModal,
} from '../../redux/modal/modalSelectors.js';
import ModalApproveAction from './../../components/ModalApproveAction/ModalApproveAction';
import Modal from '../../components/Modal/Modal.jsx';
import ContainerPage from '../../components/ContainerPage/ContainerPage.jsx';
import CatMob from '../../assets/imgs/mobile/404-mob@1x.png';
import CatMobRetina from '../../assets/imgs/mobile/404-mob@2x.png';
import CatTablet from '../../assets/imgs/tablet/404-tablet@1x.png';
import CatTabletRetina from '../../assets/imgs/tablet/404-tablet@2x.png';
import CatDesk from '../../assets/imgs/desktop/404-desk@1x.png';
import CatDeskRetina from '../../assets/imgs/desktop/404-desk@2x.png';
import css from './NotFoundPage.module.css';

const PageNotFound = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsOpenModal);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);
  return (
    <ContainerPage>
      <div className={css.container}>
        <div className={css.commonContainer}>
          <div className={css.imageWrapper}>
            <picture>
              <source
                srcSet={`${CatDesk} 1x, ${CatDeskRetina} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${CatTablet} 1x, ${CatTabletRetina} 2x`}
                media="(min-width: 768px)"
              />
              <img
                src={CatMob}
                srcSet={`${CatMob} 1x, ${CatMobRetina} 2x`}
                alt="404 Cat"
                className={css.catImage}
              />
            </picture>
          </div>
          <div className={css.wrapperText}>
            <h2 className={css.description}>
              Ooops! This page not found <span>&#58;&#40;</span>
            </h2>
            <Link to="/home" className={css.btnGo}>
              To home page
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          {isApproveModalOpen && (
            <ModalApproveAction onClose={() => dispatch(closeModal())} />
          )}
        </Modal>
      )}
    </ContainerPage>
  );
};

export default PageNotFound;
