import { useState } from 'react';
import css from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { imgUrl, title, text, date, url } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={css.item}>
      <img src={imgUrl} alt={title} className={css.photoNews} />
      <div className={css.wrapper}>
        <h2 className={css.title}>{title}</h2>
        <p
          className={`${css.text} ${isExpanded ? css.expanded : css.collapsed}`}
          onClick={toggleExpand}
        >
          {isExpanded ? text : `${text.substring(0, 100)}...`}
        </p>
        <div className={css.container}>
          <p className={css.date}>{new Date(date).toLocaleDateString()}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.linkMore}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
