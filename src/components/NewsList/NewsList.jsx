import { useSelector } from 'react-redux';
import { selectNews } from '../../redux/news/newsSelectors.js';
import NewsItem from '../NewsItem/NewsItem.jsx';
import css from './NewsList.module.css';

const NewsList = () => {
  const news = useSelector(selectNews);
  return (
    <div className={css.listNews}>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
