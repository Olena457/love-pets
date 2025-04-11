import ResultsNotFound from '../../ResultsNotFound/ResultsNotFound';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../../redux/profile/profileSelectors';
import NoticesContainer from '../../NoticesContainer/NoticesContainer.jsx';
import NoticesList from '../../NoticesList/NoticesList.jsx';

const Viewed = () => {
  const userData = useSelector(selectProfile);
  const viewed = userData?.noticesViewed;

  return (
    <NoticesContainer isEmpty={!viewed?.length}>
      {viewed?.length ? (
        <NoticesList profile={true} viewed={true} notices={viewed} />
      ) : (
        <ResultsNotFound />
      )}
    </NoticesContainer>
  );
};

export default Viewed;
