import React from 'react'
import classes from './classes.module.css'

const item = (props) => {

    const content = (props.show) ? props.content : null

    return (
        <div className={classes.Item}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Content}>
                {content}
            </div>
        </div>
    )
}

export default item