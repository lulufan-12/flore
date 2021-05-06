import React from 'react';
import classes from './classes.module.css';

const searchInput = (props) => (
    <React.Fragment>
        <input value={props.value} className={classes.SearchInput} type="search" onChange={props.changed} />
    </React.Fragment>
);

export default searchInput;