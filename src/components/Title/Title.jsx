import css from './Title.module.css';
import React from 'react';

const Title = ({ title }) => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
};

export default Title;
