import React from 'react'
import classes from './classes.module.css'

const card = (props) => {

    return (
        <div className={classes.Card}>
            <img src={props.product.path} alt={props.product.title} />
            <h1>{props.product.title}</h1>
            <h3>{props.product.price}</h3>
            <h6>{props.product.priceDivided}</h6>
            <p>
                <button>Detalhes</button>
                <i className="fas fa-heart"></i>
            </p>
        </div>
    )
}

export default card