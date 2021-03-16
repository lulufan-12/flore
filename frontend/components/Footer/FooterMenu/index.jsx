import React from 'react'
import classes from './classes.module.css'

const footermenu = (props) => {
    const list_items = props.items.map(item => {
        return (
            <li key={item.name}>
                <a href={item.path}>
                    {item.name}
                </a>
            </li>
        )
    })
    return (
        <div>
            <ul className={classes.FooterMenu}>
                {list_items}
            </ul>
        </div>
    )
}
    

    

export default footermenu