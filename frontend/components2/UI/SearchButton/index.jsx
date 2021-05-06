import React from 'react';
import classes from './classes.module.css';

const searchButton = (props) => (
    <React.Fragment>
        <button onClick={props.click} className={classes.SearchButton}><i className="fas fa-search"></i></button>
    </React.Fragment>
);

export default searchButton;