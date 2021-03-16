import React from 'react'
import classes from './classes.module.css'

const footernewsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <p>Cadastre-se e receba nossas novidades e promoções por e-mail</p>
            <form>
                <input type="email" placeholder="E-mail" />
                <button><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}
export default footernewsletter