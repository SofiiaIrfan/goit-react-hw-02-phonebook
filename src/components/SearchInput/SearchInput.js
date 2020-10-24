import React from 'react';
import s from './Search.module.css';
import PropTypes from 'prop-types';

const SearchInput = props => {
  return (
    <label className={s.label}>
      Name Search <input type="text" name="filter" onChange={props.onSearch} />
    </label>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;