const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '5px',
    borderRadius: '30px',
    padding: '2px',
    color: '#262626',
    backgroundColor: '#ffffff',
    border: state.isFocused ? '2px solid #F6B83D' : '1px solid #D1C6C6',
    boxShadow: state.isFocused ? '0 0 5px #F6B83D' : 'none',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      border: '2px solid #F6B83D',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#262626',
    fontSize: window.innerWidth <= 320 ? '10px' : '16px',
    textTransform: 'capitalize',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#262626',
    fontSize: window.innerWidth <= 320 ? '12px' : '16px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
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
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(38, 38, 38, 0.4)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 5,
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: window.innerWidth <= 320 ? '12px' : '16px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    color: state.isSelected
      ? '#f6b83d'
      : state.isFocused
      ? '#f9b020'
      : 'rgba(38, 38, 38, 0.6)',
    backgroundColor: state.isSelected
      ? '#ffffff'
      : state.isFocused
      ? 'rgba(255, 255, 255, 0.9)'
      : 'transparent',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ':active': {
      backgroundColor: 'transparent',
    },
  }),
};

export default selectStyles;
