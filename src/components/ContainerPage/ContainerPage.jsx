import css from './ContainerPage.module.css';

const ContainerPage = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default ContainerPage;
