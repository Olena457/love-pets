// import { useState, useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Title from '../../components/Title/Title.jsx';
// import NoticesList from '../../components/NoticesList/NoticesList.jsx';
// import Pagination from '../../components/Pagination/Pagination.jsx';
// import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
// import { openModal, closeModal } from '../../redux/modal/modalSlice.js';
// import Modal from '../../components/Modal/Modal.jsx';
// import ModalAttention from '../../components/ModalAttention/ModalAttention.jsx';
// import ModalNotices from '../../components/ModalNotices/ModalNotices.jsx';
// import {
//   fetchNoticeById,
//   toggleFavoriteNotice,
//   fetchNotices,
// } from '../../redux/notices/noticesOperations.js';
// import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
// import Loader from '../../components/Loader/Loader.jsx';
// import {
//   selectTotalPages,
//   selectCurrentPage,
//   selectIsLoading,
//   selectFavorites,
//   selectSelectedNotice,
// } from '../../redux/notices/noticesSelectors.js';
// import {
//   selectFilteredNoticesWithFilters,
//   selectSearchQuery,
//   selectCategory,
//   selectGender,
//   selectType,
//   selectLocation,
// } from '../../redux/filters/filtersSelectors.js';
// import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
// import css from './NoticesPage.module.css';

// const NoticesPage = () => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(selectIsOpenModal);
//   const notices = useSelector(selectFilteredNoticesWithFilters);
//   const favorites = useSelector(selectFavorites);
//   const selectedNotice = useSelector(selectSelectedNotice);
//   const totalPages = useSelector(selectTotalPages);
//   const currentPage = useSelector(selectCurrentPage);
//   const isLoading = useSelector(selectIsLoading);
//   const searchQuery = useSelector(selectSearchQuery);
//   const category = useSelector(selectCategory);
//   const gender = useSelector(selectGender);
//   const type = useSelector(selectType);
//   const location = useSelector(selectLocation);

//   const [selectedNoticeState, setSelectedNoticeState] = useState(null);
//   const params = useMemo(
//     () => ({
//       page: currentPage,
//       perPage: 6,
//       searchQuery,
//       category,
//       gender,
//       type,
//       location,
//     }),
//     [currentPage, searchQuery, category, gender, type, location]
//   );

//   useEffect(() => {
//     dispatch(fetchNotices(params));
//   }, [dispatch, params]);

//   const handleLearnMore = notice => {
//     if (!isAuthenticated) {
//       dispatch(openModal());
//       return;
//     }

//     setSelectedNoticeState(notice);
//     dispatch(fetchNoticeById(notice._id));
//     dispatch(openModal());
//   };

//   const handleToggleFavorite = notice => {
//     if (!isAuthenticated) {
//       dispatch(openModal());
//       return;
//     }

//     dispatch(toggleFavoriteNotice(notice._id));
//   };
//   const modalData = useSelector(selectModalData);
//   const handleFilterChange = () => {
//     dispatch(setCurrentPage(1));
//     dispatch(
//       fetchNotices({
//         page: 1,
//         perPage: 6,
//         searchQuery,
//         category,
//         gender,
//         type,
//         location,
//       })
//     );
//   };

//   const handlePageChange = page => {
//     dispatch(setCurrentPage(page));
//     dispatch(
//       fetchNotices({
//         page,
//         perPage: 6,
//         searchQuery,
//         category,
//         gender,
//         type,
//         location,
//       })
//     );
//   };

//   return (
//     <div className={css.container}>
//       <Title title="Find your favorite pet" />
//       <NoticesFilters onFilterChange={handleFilterChange} />
//       {isLoading ? (
//         <Loader />
//       ) : notices.length === 0 ? (
//         <div className={css.errorContainer}>
//           No results found for the selected filters.
//           <br /> Please reset the filter and select other options 🐈
//         </div>
//       ) : (
//         <>
//           <NoticesList
//             notices={notices}
//             favorites={favorites}
//             onLearnMore={handleLearnMore}
//             onToggleFavorite={handleToggleFavorite}
//           />
//           {totalPages > 1 && (
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           )}
//         </>
//       )}

//       {isModalOpen && (
//           <Modal onClose={() => dispatch(closeModal())} />>
//         {!isAuthenticated ? (
//             <ModalAttention/>
//           </Modal>
//         ) : (
//           modalData &&(
//             <Modal onClose={() => dispatch(closeModal())} >
//               <ModalNotices
//                 notice={modalData}
//                 onClose={() => dispatch(closeModal())}
//               />
//             )
//           )}
//           </Modal>
//       </>
//     </div>
//   );
// };

// export default NoticesPage;
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import { openModal, closeModal } from '../../redux/modal/modalSlice.js';
import Modal from '../../components/Modal/Modal.jsx';
import ModalAttention from '../../components/ModalAttention/ModalAttention.jsx';
import ModalNotices from '../../components/ModalNotices/ModalNotices.jsx';
import {
  fetchNoticeById,
  toggleFavoriteNotice,
  fetchNotices,
} from '../../redux/notices/noticesOperations.js';
import {
  selectIsOpenModal,
  selectModalData,
} from '../../redux/modal/modalSelectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import {
  selectTotalPages,
  selectCurrentPage,
  selectIsLoading,
  selectFavorites,
  selectSelectedNotice,
} from '../../redux/notices/noticesSelectors.js';
import {
  selectFilteredNoticesWithFilters,
  selectSearchQuery,
  selectCategory,
  selectGender,
  selectType,
  selectLocation,
} from '../../redux/filters/filtersSelectors.js';
import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsOpenModal);
  const modalData = useSelector(selectModalData);
  const notices = useSelector(selectFilteredNoticesWithFilters);
  const favorites = useSelector(selectFavorites);
  const selectedNoticeState = useSelector(selectSelectedNotice);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);
  const gender = useSelector(selectGender);
  const type = useSelector(selectType);
  const location = useSelector(selectLocation);

  const params = useMemo(
    () => ({
      page: currentPage,
      perPage: 6,
      searchQuery,
      category,
      gender,
      type,
      location,
    }),
    [currentPage, searchQuery, category, gender, type, location]
  );

  useEffect(() => {
    dispatch(fetchNotices(params));
  }, [dispatch, params]);

  const handleLearnMore = notice => {
    dispatch(fetchNoticeById(notice._id)); // ✅ Завантажуємо деталі оголошення по `id`
    dispatch(openModal());
  };

  const handleToggleFavorite = notice => {
    dispatch(toggleFavoriteNotice(notice._id));
  };

  const handleFilterChange = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchNotices(params));
  };

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
    dispatch(fetchNotices({ ...params, page }));
  };

  return (
    <div className={css.container}>
      <Title title="Find your favorite pet" />
      <NoticesFilters onFilterChange={handleFilterChange} />

      {isLoading ? (
        <Loader />
      ) : notices.length === 0 ? (
        <div className={css.errorContainer}>
          No results found for the selected filters.
          <br /> Please reset the filter and select other options 🐈
        </div>
      ) : (
        <>
          <NoticesList
            notices={notices}
            favorites={favorites}
            onLearnMore={handleLearnMore}
            onToggleFavorite={handleToggleFavorite}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          {!selectedNoticeState ? (
            <ModalAttention />
          ) : (
            modalData && (
              <ModalNotices
                notice={modalData}
                onClose={() => dispatch(closeModal())}
              />
            )
          )}
        </Modal>
      )}
    </div>
  );
};

export default NoticesPage;
