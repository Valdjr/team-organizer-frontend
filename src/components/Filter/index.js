import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { MdSearch } from 'react-icons/md';

import { filterUsersRequest } from '../../store/modules/filterUsers/actions';
import { filterTeamsRequest } from '../../store/modules/filterTeams/actions';

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
  const [filter, setFilter] = useState(
    filterby.length > 0 ? filterby.find(x => x.selected === true).value : ''
  );
  const [sort, setSort] = useState(
    sortby.length > 0 ? sortby.find(x => x.selected === true).value : ''
  );
  const [par, setPar] = useState({
    filter,
    search,
    sort,
  });

  useEffect(() => {
    switch (who) {
      case 'users':
        dispatch(
          filterUsersRequest({
            filter: par.filter,
            search: par.search,
            sort: par.sort,
          })
        );
        break;
      case 'teams':
        dispatch(
          filterTeamsRequest({
            withUsers: true,
            filter: par.filter,
            search: par.search,
          })
        );
        break;
      default:
    }
  }, [dispatch, par, who]);

  function handleSearch(event) {
    clearTimeout(timer);
    const currentValue = event.target.value;
    if (event.type === 'keydown' && event.keyCode === 13) {
      setPar({ filter, search: currentValue, sort });
    } else {
      setSearch(currentValue);
      timer = setTimeout(() => {
        setPar({ filter, search: currentValue, sort });
      }, 300);
    }
  }

  function handleChangeFilter(event) {
    setFilter(event.target.value);
  }

  function handleChangeSort(event) {
    setSort(event.target.value);
    setPar({ filter, search, sort: event.target.value });
  }

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
            <MdSearch color="#3E3E3E" size={25} />
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
