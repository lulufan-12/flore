import React from 'react'
import Card from '../../UI/Card'
import classes from './classes.module.css'

const section = (props) => {
    const list_items = props.items.map(item => {
        return (
            <Card product={item} key={item.id} />
        )
    })
    return (
        <section className={classes.Section}>
            <h1 className={classes.SectionTitle}>{props.title}</h1>
            <div className={classes.CardsHolder}>
                {list_items}
            </div>
            
        </section>
    )
}

export default section