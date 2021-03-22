import React from 'react'
import IconMenu from './IconMenu'
import classes from './classes.module.css'

const title = (props) => {
    return(
        <div className={classes.Title}>
            <a href="#">
                <img src="assets/logo.jpg" alt="Flore Prata Logo" />
            </a>
            <form>
                <input type="search" />
                <button><i className="fas fa-search"></i></button>
            </form>
            <IconMenu />
        </div>
    )
    
}

export default title