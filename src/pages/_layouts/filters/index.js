import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { MdSearch } from 'react-icons/md';

import {
  ContentFilters,
  CardContentS,
  FilterTitle,
  Dropdown,
  InputNaked,
} from './styles';

export default function Filters({ filterwWidth, sortWidth, filterby, sortby }) {
  const [filter, setFilter] = useState(
    filterby.dropdown
      ? filterby.dropdown.find(x => x.selected === true).value
      : ''
  );
  const [sort, setSort] = useState(
    sortby.dropdown ? sortby.dropdown.find(x => x.selected === true).value : ''
  );

  function handleChangeFilter(event) {
    setFilter(event.target.value);
  }

  function handleChangeSort(event) {
    setSort(event.target.value);
  }

  return (
    <ContentFilters style={{ width: `${filterwWidth + sortWidth + 20}px` }}>
      {filterby.dropdown && (
        <CardContentS style={{ width: `${filterwWidth}px` }}>
          <FilterTitle>FILTER BY</FilterTitle>
          <Dropdown
            value={filter}
            onChange={handleChangeFilter}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            style={{ width: filterby.width }}
          >
            {filterby.dropdown.map(filterD => (
              <MenuItem key={filterD.value} value={filterD.value}>
                {filterD.name}
              </MenuItem>
            ))}
          </Dropdown>
          <div className="divider" />
          <MdSearch color="#000" size={25} />
          <InputNaked
            placeholder="SEARCH..."
            inputProps={{ 'aria-label': 'SEARCH...' }}
            type="search"
          />
        </CardContentS>
      )}

      {sortby.dropdown && (
        <CardContentS style={{ width: `${sortWidth}px` }}>
          <FilterTitle>SORT BY</FilterTitle>
          <div className="divider" />
          <Dropdown
            value={sort}
            onChange={handleChangeSort}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            style={{ width: sortby.width }}
          >
            {sortby.dropdown.map(sortD => (
              <MenuItem key={sortD.value} value={sortD.value}>
                {sortD.name}
              </MenuItem>
            ))}
          </Dropdown>
        </CardContentS>
      )}
    </ContentFilters>
  );
}

Filters.propTypes = {
  filterwWidth: PropTypes.number,
  sortWidth: PropTypes.number,
  filterby: PropTypes.shape({
    width: PropTypes.string.isRequired,
    dropdown: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        selected: PropTypes.bool,
      })
    ),
  }),
  sortby: PropTypes.shape({
    width: PropTypes.string.isRequired,
    dropdown: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        selected: PropTypes.bool,
      })
    ),
  }),
};

Filters.defaultProps = {
  filterwWidth: 0,
  sortWidth: 0,
  filterby: {},
  sortby: { width: '0px' },
};
