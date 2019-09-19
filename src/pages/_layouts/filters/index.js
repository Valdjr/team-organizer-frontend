import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { MdSearch } from 'react-icons/md';

import { filterUsersRequest } from '../../../store/modules/filterUsers/actions';

import {
  ContentFilters,
  CardContentS,
  FilterTitle,
  Dropdown,
  InputNaked,
  ContentFilter,
  ContentSearch,
} from './styles';

let timer = null;

export default function Filters({ filterby, sortby, who }) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  function handleSearch(event) {
    clearTimeout(timer);
    if (event.type === 'keydown' && event.keyCode === 13) {
      // executeFilter();
    } else if (event.type === 'change') {
      setSearch(event.target.value);
      timer = setTimeout(() => {
        // executeFilter();
      }, 1300);
    }
  }

  const [filter, setFilter] = useState(
    filterby.length > 0 ? filterby.find(x => x.selected === true).value : ''
  );
  function handleChangeFilter(event) {
    setFilter(event.target.value);
  }

  const [sort, setSort] = useState(
    sortby.length > 0 ? sortby.find(x => x.selected === true).value : ''
  );
  function handleChangeSort(event) {
    setSort(event.target.value);
  }

  useEffect(() => {
    switch (who) {
      case 'users':
        dispatch(filterUsersRequest(filter, search, sort));
        console.log('oie');
        break;
      case 'teams':
        // dispatch(filterUsersRequest(filter, search));
        break;
      default:
        break;
    }
  }, [dispatch, filter, search, sort, who]);

  const [widthFilter, setWidthFilter] = useState('0px');
  const [widthSort, setWidthSort] = useState('0px');
  useEffect(() => {
    const widthFontCalc = nameLength =>
      (nameLength < 8 ? nameLength * 15 : nameLength * 10) + 7;

    if (filterby.length > 0) {
      const currentWidth = Number(widthFilter.slice(0, -2));
      filterby.map(filterD => {
        const widthFont = widthFontCalc(filterD.name.length);
        if (widthFont > currentWidth) {
          setWidthFilter(`${widthFont}px`);
        }
        return true;
      });
    }

    if (sortby.length > 0) {
      const currentWidth = Number(widthSort.slice(0, -2));
      sortby.map(sortD => {
        const widthFont = widthFontCalc(sortD.name.length);
        if (widthFont > currentWidth) {
          setWidthSort(`${widthFont}px`);
        }
        return true;
      });
    }
  }, [filterby, sortby, widthFilter, widthSort]);

  return (
    <ContentFilters>
      {filterby.length > 0 && (
        <CardContentS>
          <ContentFilter>
            <FilterTitle>FILTER BY</FilterTitle>
            <Dropdown
              value={filter}
              onChange={handleChangeFilter}
              IconComponent={KeyboardArrowDownOutlinedIcon}
              style={{ width: widthFilter }}
            >
              {filterby.map(filterD => (
                <MenuItem key={filterD.value} value={filterD.value}>
                  {filterD.name}
                </MenuItem>
              ))}
            </Dropdown>
          </ContentFilter>
          <div className="divider" />
          <ContentSearch>
            <MdSearch color="#000" size={25} />
            <InputNaked
              type="search"
              value={search}
              placeholder="SEARCH..."
              inputProps={{ 'aria-label': 'SEARCH...' }}
              onChange={handleSearch}
              onKeyDown={handleSearch}
            />
          </ContentSearch>
        </CardContentS>
      )}

      {sortby.length > 0 && (
        <CardContentS>
          <ContentFilter>
            <FilterTitle>SORT BY</FilterTitle>
            <Dropdown
              value={sort}
              onChange={handleChangeSort}
              IconComponent={KeyboardArrowDownOutlinedIcon}
              style={{ width: widthSort }}
            >
              {sortby.map(sortD => (
                <MenuItem key={sortD.value} value={sortD.value}>
                  {sortD.name}
                </MenuItem>
              ))}
            </Dropdown>
          </ContentFilter>
        </CardContentS>
      )}
    </ContentFilters>
  );
}

Filters.propTypes = {
  filterby: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  sortby: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  who: PropTypes.string.isRequired,
};

Filters.defaultProps = {
  filterby: [],
  sortby: [],
};
