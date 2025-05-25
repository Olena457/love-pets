import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from './Loader.module.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={css.container}>
      <div className={css.loader}>
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            strokeWidth: 2,
            pathColor: '#ffffff',
            trailColor: 'rgba(255, 255, 255, 0.2)',
          })}
        />
        <div className={css.progressText}>{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
