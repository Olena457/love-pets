import css from './HomePage.module.css';
const HomePage = () => {
  <div className="home">
    <div className={css.content}></div>
    <h1 className={css.title}>
      Take good<span className={css.light}>care</span> of your small pets
    </h1>
    <p className={css.description}>
      Choosing a pet for your home is a choice that is meant to enrich your life
      with immeasurable joy and tenderness.
    </p>
    <div className={css.photo}></div>
  </div>;
};
export default HomePage;
