import React from 'react'
import IconMenuItem from '../IconMenuItem'
import classes from './classes.module.css'

const title = () => (
    <div className={classes.Items}>
        <IconMenuItem link="/usuario"><i className="fas fa-user"></i></IconMenuItem>
        <IconMenuItem link="/lista-de-desejos"><i className="fas fa-heart"></i></IconMenuItem>
        <IconMenuItem link="/carrinho-de-compras"><i className="fas fa-shopping-cart"></i></IconMenuItem>
    </div>
);

export default title;