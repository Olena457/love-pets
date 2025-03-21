import NewsItem from '../NewsItem/NewsItem.jsx';
import css from './NewsList.module.css';
import { useSelector } from 'react-redux';
import { selectNews } from '../../redux/news/newsSelectors.js';

const NewsList = () => {
  const news = useSelector(selectNews);
  return (
    <div className={css.list}>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
