import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../../redux/profile/profileSelectors';
import ResultsNotFound from '../../ResultsNotFound/ResultsNotFound';
import NoticesList from '../../NoticesList/NoticesList.jsx';
import css from './Viewed.module.css';

const Viewed = () => {
  const profileData = useSelector(selectProfile);
  const viewedNotices = profileData?.noticesViewed || [];
  const isEmpty = !viewedNotices?.length;

  return (
    <div
      className={clsx(css.noticesContainer, {
        [css.noticesContainerEmpty]: isEmpty,
      })}
    >
      {isEmpty ? (
        <ResultsNotFound />
      ) : (
        <NoticesList profile={true} viewed={true} notices={viewedNotices} />
      )}
    </div>
  );
};

export default Viewed;
