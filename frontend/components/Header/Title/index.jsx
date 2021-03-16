import React from 'react'
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
            <div className={classes.Items}>
                <i className="fas fa-user"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
    
}

export default title