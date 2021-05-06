import Section from '../IndexBody/Section'

const desejosBody = () => {
    const items = [
        {id: 1, title: "Card 1", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 2, title: "Card 2", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"},
        {id: 3, title: "Card 3", price: "12.79", priceDivided: "3x de 5.00", path: "assets/aneis.jpg"}
    ]
    return (
        <main>
            <Section title="Lista de Desejo" items={items} />
            
        </main>
    )
}

export default desejosBody