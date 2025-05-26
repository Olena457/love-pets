import { useEffect, useState } from 'react';
import searchCommon from '../../assets/icons/searchCommon.svg';
import blackCross from '../../assets/icons/blackCross.svg';
import css from './SearchField.module.css';

const SearchField = ({ onSubmit, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery('');
    onSubmit('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.searchContainer}>
      <form className={css.search} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          className={css.input}
        />
        <div className={css.iconsContainer}>
          <button
            type="button"
            className={css.clearButton}
            onClick={handleSubmit}
          >
            <img
              src={searchCommon}
              alt="search"
              width="18"
              height="18"
              className={css.searchIcon}
            />{' '}
          </button>
          {query && (
            <button
              type="button"
              className={css.clearButton}
              onClick={handleClear}
            >
              <img src={blackCross} alt="clear" width="18" height="18" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchField;
