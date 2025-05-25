import { useEffect, useState } from 'react';
import clsx from 'clsx';
import css from './ResultsNotFound.module.css';
import { useLocation } from 'react-router-dom';

const ResultsNotFound = () => {
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/profile':
        setIsProfile(true);
        break;

      case '/profile/favorite':
        setIsProfile(true);
        break;

      case '/profile/viewed':
        setIsProfile(true);
        break;

      default:
        setIsProfile(false);
        break;
    }
  }, [location.pathname]);

  return (
    <div
      className={clsx(css.resultsNotFoundWrap, {
        [css.resultsNotFoundWrapProfile]: isProfile,
      })}
    >
      <h3 className={css.notFoundTitle}>
        Oops,
        <span className={css.notFoundAccentText}>
          it looks like there aren't any furry results
        </span>
        on our adorable page yet. Do not worry! View your pets on the "find your
        favorite pet" page and add them to your favorites.
      </h3>
    </div>
  );
};

export default ResultsNotFound;
