import { useEffect, useState } from 'react';
import css from './ResultsNotFound.module.css';
import DogImg from '../../assets/imgs/attentionDog.png';
import { useLocation } from 'react-router-dom';

const ResultsNotFound = () => {
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const profilePaths = ['/profile', '/profile/favorites', '/profile/viewed'];
    setIsProfile(profilePaths.includes(location.pathname));
  }, [location.pathname]);

  return (
    <div
      className={
        isProfile ? css.resultsNotFoundWrapProfile : css.resultsNotFoundWrap
      }
    >
      {!isProfile && (
        <img className={css.resultsNotFoundImg} src={DogImg} alt="dog" />
      )}
      <h3 className={css.notFoundTitle}>
        Oops, it looks like
        <span className={css.notFoundAccentText}>
          {' '}
          there aren't any furry results{' '}
        </span>
        on our adorable page.
        {isProfile
          ? 'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.'
          : `Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`}
      </h3>
    </div>
  );
};

export default ResultsNotFound;
