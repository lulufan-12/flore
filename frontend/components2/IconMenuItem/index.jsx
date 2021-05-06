import React from 'react'
import Link from 'next/link'
import classes from './classes.module.css'

const iconMenuItem = (props) => {
    return (
        <div className={classes.Item}>
            <Link href={props.link}>
                <a className={classes.Title}>
                    {props.children}
                </a>
            </Link>
        </div>
    )
}

export default iconMenuItem