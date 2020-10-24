import React from 'react';
import s from './Phone.module.css';
import PropTypes from 'prop-types';

const PhoneList = props => {
  const { onSearch, onDelete } = props;

  return (
    <ul className={s.ul}>
      {onSearch.map(el => {
        const { tel, name, id } = el;
        return (
          <li key={id} className={s.li}>
            {' '}
            {name}: {tel}{' '}
            <button type="button" onClick={() => onDelete(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

PhoneList.propTypes = {
  onSearch: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default PhoneList;