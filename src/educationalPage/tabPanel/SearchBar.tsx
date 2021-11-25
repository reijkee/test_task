import React from 'react';
import '../../App.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { filterAuthorsActions } from './filterAuthorsState/filterAuthorsActions';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  searchBarBorder: {
    display: 'flex',
  },
  searchBarInput: {
    paddingLeft: '1em',
  },
});

function SearchBar() {
  const classes = styles();
  const dispatch = useDispatch();

  const searchInput = document.getElementById('MuiInputBase-input');

  const search$ = new Observable<string>((observer) => {
    searchInput?.addEventListener('input', () => {
      observer.next((searchInput as HTMLInputElement).value);
    });
  });

  search$
    .pipe(debounceTime(1250), distinctUntilChanged())
    .subscribe((value: string) => {
      dispatch(filterAuthorsActions(value));
    });

  return (
    <div className={classes.searchBarBorder}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="filter by author"
        className={classes.searchBarInput}
        type="text"
        id="MuiInputBase-input"
      />
    </div>
  );
}

export default SearchBar;
