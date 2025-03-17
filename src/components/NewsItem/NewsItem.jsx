import css from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { imgUrl, title, text, date, url } = item;
  return (
    <div className={css.item}>
      <img src={imgUrl} alt={title} className={css.photoNews} />
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
      <div className={css.container}>
        <p className={css.date}>{new Date(date).toLocaleDateString()}</p>
        <a
          href={url}
          target="_blank"
          rel="nooperer norefferrer"
          className={css.link}
        >
          Reade more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
