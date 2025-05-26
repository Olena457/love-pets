import css from './Title.module.css';

const Title = ({ title }) => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
};

export default Title;
