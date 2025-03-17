import css from './SearchField.module.css';
import Icon from '../Icon/Icon.jsx';
import { useEffect, useState } from 'react';

const SearchField = ({ onSubmit, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    const currentQuery = '';
    setQuery(currentQuery);
    onSubmit(currentQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <form className={css.search} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          className={css.input}
        />
        <div className={css.iconsContainer}>
          {query && (
            <Icon
              id="cross"
              width={16}
              height={16}
              stroke="#262626"
              className={css.clearIcon}
              onClick={handleClear}
            />
          )}
          <Icon
            id="search"
            width={16}
            height={16}
            stroke="#262626"
            className={css.searchIcon}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchField;
