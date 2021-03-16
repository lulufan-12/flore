import React from 'react'
import classes from './classes.module.css'

const section = (props) => {
    const list_items = props.items.map(item => {
        return (
            <p>
                Card {item.id} aqui
            </p>
        )
    })
    return (
        <section className={classes.Section}>
            <h2 className={classes.SectionTitle}>
                {props.title}
            </h2>
            <div className={classes.CardsHolder}>
                {list_items}
            </div>
        </section>
    )
}

export default section