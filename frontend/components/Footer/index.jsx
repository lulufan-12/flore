import React from 'react'
import FooterMenu from './FooterMenu'
import FooterNewsletter from './FooterNewsletter'
import classes from './classes.module.css'

const footer = () => {
    const menu_categorias = [
        {name: "Categorias", path: "#"},
        {name: "Colares", path: "#"},
        {name: "Anéis", path: "#"},
        {name: "Pulseiras", path: "#"},
        {name: "Tornozeleiras", path: "#"},
        {name: "Brincos", path: "#"},
        {name: "Braceletes", path: "#"},
        {name: "Pingentes", path: "#"},
        {name: "Limpeza", path: "#"}
    ]
    const menu_informacoes = [
        {name: "Informações", path: "#"},
        {name: "Quem somos", path: "#"},
        {name: "Trocas e devoluções", path: "#"},
        {name: "Garantia", path: "#"},
        {name: "Política de prazo e entrega", path: "#"},
        {name: "FAQ", path: "#"}
    ]
    const menu_contato = [
        {name: "Contato", path: "#"},
        {name: "Instagram", path: "#"},
        {name: "Whatsapp (24) 99218-9708", path: "#"},
        {name: "contato@florepratas.com", path: "#"}
    ]
    return(
        <footer>
            <FooterNewsletter />
            <div className={classes.Footer}>
                <a href="#">
                    <img src="assets/logo2.png" alt="Flore Prata Logo" />
                </a>
                <FooterMenu items={menu_categorias} />
                <FooterMenu items={menu_informacoes} />
                <FooterMenu items={menu_contato} />
            </div>
        </footer>
    )
}    

export default footer