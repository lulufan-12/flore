import React from 'react';
import IconMenu from '../IconMenu';
import classes from './classes.module.css';
import Logo from '../Logo';
import SearchForm from '../SearchForm';

const title = (props) => {
    return (
        <div className={classes.Title}>
            <Logo link="/" src="assets/logo.jpg" alt="Florê Prata Logo" />
            <SearchForm />
            <IconMenu />
        </div>
    );
}

export default title