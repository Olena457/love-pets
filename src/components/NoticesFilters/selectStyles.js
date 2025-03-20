const selectStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '30px',
    padding: '5px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#fff',
    fontWeight: '500',
    cursor: 'pointer',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#262626',
    fontSize: window.innerWidth <= 320 ? '14px' : '16px',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#262626',
    fontSize: window.innerWidth <= 320 ? '14px' : '16px',
    textTransform: 'capitalize',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#262626',
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '15px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: window.innerWidth <= 320 ? '14px' : '16px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    color: state.isFocused ? '#F6B83D' : 'rgba(38, 38, 38, 0.60)',
    backgroundColor: state.isFocused ? 'transparent' : 'transparent',
    transition: 'color 0.3s ease',
    ':active': {
      backgroundColor: 'transparent',
    },
  }),
};

export default selectStyles;
