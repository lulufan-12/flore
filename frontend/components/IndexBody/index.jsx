import React from 'react'
import Carousel from './Carousel'
import Section from './Section'
import classes from './classes.module.css'

const indexbody = () => {
    const items = [
        {id: 1, title: "Card 1", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 2, title: "Card 2", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 3, title: "Card 3", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 4, title: "Card 4", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 5, title: "Card 5", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 6, title: "Card 5", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"}
    ]
    return (
        <main className={classes.Main}>
            <h1 className={classes.Subtitle}>Faça o que te faz <span className={classes.SubtitleEmphasis}>Florê</span></h1>
            <Carousel />
            <img src="assets/banner-fino.jpg" alt="Formas de Pagamento" className={classes.Img} />
            <Section title="LANÇAMENTOS" items={items} />
            <Section title="PROMOÇÕES" items={items} />
            <Section title="RECOMENDADOS" items={items} />
        </main>
    )
}

export default indexbody