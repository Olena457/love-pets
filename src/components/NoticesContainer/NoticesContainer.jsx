import React from 'react';
import styles from './NoticesContainer.module.css';

const NoticesContainer = ({ isEmpty, children }) => {
  return (
    <div
      className={
        isEmpty ? styles.noticesContainerEmpty : styles.noticesContainer
      }
    >
      {children}
    </div>
  );
};

export default NoticesContainer;
