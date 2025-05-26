import { useEffect, useState } from 'react';
import Select from 'react-select';
import searchCommon from '../../assets/icons/searchCommon.svg';
import blackCross from '../../assets/icons/blackCross.svg';
import selectCustomLocationStyles from './selectCustomLocationStyles.js';
import css from './SelectLocation.module.css';

const SelectLocation = ({ onSubmit, initialValue = '', options }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  const handleClear = () => {
    setSelectedValue('');
    onSubmit('');
  };

  const handleChange = selectedOption => {
    setSelectedValue(selectedOption?.value || '');
    onSubmit(selectedOption?.value || '');
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.search} style={{ position: 'relative' }}>
        <button
          type="button"
          className={css.clearButton}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <img
            src={searchCommon}
            alt="search"
            width="18"
            height="18"
            className={css.searchIcon}
          />
        </button>
        <Select
          value={options.find(opt => opt.value === selectedValue)}
          onChange={handleChange}
          options={options}
          placeholder="Location"
          styles={selectCustomLocationStyles}
        />
        {selectedValue && (
          <button
            type="button"
            className={css.clearButton}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            onClick={handleClear}
          >
            <img src={blackCross} alt="clear" width="18" height="18" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectLocation;
