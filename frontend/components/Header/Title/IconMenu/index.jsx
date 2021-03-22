import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import Item from './Item'
import classes from './classes.module.css'

const title = () => {
    const [menu1_visible, setMenu1Visible] = useState(false)
    const [menu2_visible, setMenu2Visible] = useState(false)
    const [menu3_visible, setMenu3Visible] = useState(true)
    const [session, loading] = useSession()
    let menu1
    if(!session) {
        menu1 = (menu1_visible) ? (
            <div className={classes.Menu1}>
                <a onClick={() => signIn("auth0")}>Entrar</a>
            </div>
        ) : null
    }
    else{
        menu1 = (menu1_visible) ? (
            <div className={classes.Menu1}>
                <a>Meus Pedidos</a>
                <a>Favoritos</a>
                <a>Carrinho</a>
                <a onClick={() => signOut("auth0")}>Sair</a>
            </div>
        ) : null
    }
    
    let menu2 = (menu2_visible) ? (
        <ul className={`${classes.Submenu}`}>
            <li>Submenu 1 Submenu 1 Submenu 1 Submenu 1</li>
            <li>Submenu 2 Submenu 2 Submenu 2 Submenu 2</li>
            <li>Submenu 3 Submenu 3 Submenu 3 Submenu 3</li>
        </ul>
    ) : null
    
    const clearMenu = () => {
        setMenu1Visible(false)
        setMenu2Visible(false)
        setMenu3Visible(false)
    }

    const toggleMenuHandler = e => {
        const menu = e.target.id
        console.log(menu)
        clearMenu()
        switch(menu){
            case "menu1":
                setMenu1Visible(!menu1_visible)
            break;
            case "menu2":
                setMenu2Visible(!menu2_visible)
            break;
            case "menu3":
                setMenu3Visible(!menu3_visible)
            break;
        }
    }
    return(
        <div className={classes.Items}>
            <Item show={menu1_visible}
                title={<i className="fas fa-user" id="menu1" onClick={toggleMenuHandler}></i>}
                content={menu1}
            />

            <Item show={menu2_visible}
                title={<i className="fas fa-heart" id="menu2" onClick={toggleMenuHandler}></i>}
                content={menu2}
             />

            <Item show={menu3_visible}
                title={<i className="fas fa-shopping-cart" id="menu3" onClick={toggleMenuHandler}></i>}
                content={<h1>Hello World</h1>}
             />
        </div>
    )
}

export default title