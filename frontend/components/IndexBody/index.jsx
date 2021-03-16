import React from 'react'
import Carousel from './Carousel'
import Section from './Section'
import classes from './classes.module.css'

const indexbody = () => {
    const items = [{id: 1}, {id: 2}, {id: 3}]
    return (
        <main className={classes.Main}>
            <h1 className={classes.Subtitle}>Faça o que te faz <span className={classes.SubtitleEmphasis}>Florê</span></h1>
            <Carousel />
            <img src="assets/banner-fino.jpg" alt="Formas de Pagamento" className={classes.Img} />
            <Section title="LANÇAMENTOS" items={items} />
            
        </main>
    )
}

export default indexbody