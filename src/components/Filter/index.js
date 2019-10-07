import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { MdSearch } from 'react-icons/md';

import { filterParmsChange } from '../../store/modules/filterParms/actions';
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

export default function Filters({ filterby, sortby, ThisPage, who }) {
  const dispatch = useDispatch();

  const [searchWait, setSearchWait] = useState('');
  const [searchTyped, setSearchTyped] = useState('');
  const [filterChoosed, setFilterChoosed] = useState(
    filterby.length > 0 ? filterby.find(x => x.selected === true).value : ''
  );
  const [sortChoosed, setSortChoosed] = useState(
    sortby.length > 0 ? sortby.find(x => x.selected === true).value : ''
  );
  useEffect(() => {
    dispatch(
      filterParmsChange({
        filter: filterChoosed,
        search: searchWait,
        sort: sortChoosed,
        page: ThisPage,
      })
    );
  }, [dispatch, filterChoosed, searchWait, sortChoosed, ThisPage]);

  const { filter, search, sort, page } = useSelector(
    state => state.filterParms
  );

  useEffect(() => {
    switch (who) {
      case 'users':
        dispatch(
          filterUsersRequest({
            filter,
            search,
            sort,
          })
        );
        break;
      case 'teams':
        dispatch(
          filterTeamsRequest({
            withUsers: true,
            page,
            filter,
            search,
          })
        );
        break;
      default:
    }
  }, [dispatch, filter, search, sort, page, who]);

  function handleSearch(event) {
    clearTimeout(timer);
    const currentValue = event.target.value;
    if (event.type === 'keydown' && event.keyCode === 13) {
      setSearchWait(currentValue);
    } else {
      setSearchTyped(currentValue);
      timer = setTimeout(() => {
        setSearchWait(currentValue);
      }, 300);
    }
  }

  function handleChangeFilter(event) {
    setFilterChoosed(event.target.value);
    if (who === 'teams') {
      setSearchTyped('');
      setSearchWait('');
    }
  }

  function handleChangeSort(event) {
    setSortChoosed(event.target.value);
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
              value={searchTyped}
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
  ThisPage: PropTypes.number,
  who: PropTypes.string.isRequired,
};

Filters.defaultProps = {
  ThisPage: 1,
  filterby: [],
  sortby: [],
};
