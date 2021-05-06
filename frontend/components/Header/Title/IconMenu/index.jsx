import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import Item from './Item'
import classes from './classes.module.css'

const title = () => {
    const [menu1_visible, setMenu1Visible] = useState(false)
    const [menu2_visible, setMenu2Visible] = useState(false)
    const [menu3_visible, setMenu3Visible] = useState(false)
    const [session, loading] = useSession()
    const router = useRouter()
    let menu1
    let menu2
    let menu3
    if(!session) {
        menu1 = (menu1_visible) ? (
            <div className={classes.Menu1}>
                <a onClick={() => signIn("auth0")}>Entrar</a>
            </div>
        ) : null

        menu2 = (menu2_visible) ? (
            <div className={classes.Menu2}>
                <p>Faça login para ver sua lista de desejos</p>
                <button onClick={signIn("auth0")}>Entrar</button>
            </div>
        ) : null

        menu3 = (menu3_visible) ? (
            <div className={classes.Menu2}>
                <p>Faça login para ver os itens do seu carrinho de compras</p>
                <button onClick={signIn("auth0")}>Entrar</button>
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

        menu2 = (menu2_visible) ? (
            <div className={classes.Menu2}>
                <p>
                    <i className="fas fa-heart"></i> {' '}
                    - Item X
                </p>
                <p>
                    <i className="fas fa-heart"></i> {' '}
                    - Item 2X
                </p>
            </div>
        ) : null

        menu3 = (menu3_visible) ? (
            <div className={classes.Menu2}>
                <p>
                    <i className="fas fa-shopping-cart"></i> {' '}
                    - Item X
                </p>
                <p>
                    <i className="fas fa-shopping-cart"></i> {' '}
                    - Item 2X
                </p>
            </div>
        ) : null
    }
    
    
    
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

    const navigateHandler = e => {
        const menu = e.target.id
        clearMenu()
        switch(menu){
            case "menu2":
                router.push("http://localhost:3000/desejos")
            break;
            case "menu3":
                router.push("http://localhost:3000/carrinho")
            break;
        }
    }

    return(
        <div className={classes.Items}>
            <Item show={menu1_visible}
                title={<i className="fas fa-user" id="menu1" onClick={toggleMenuHandler}></i>}
                content={menu1}
            />

            <Item show="false"
                title={<i className="fas fa-heart" id="menu2" onClick={navigateHandler}></i>}
             />

            <Item show="false"
                title={<i className="fas fa-shopping-cart" id="menu3" onClick={navigateHandler}></i>}
             />
        </div>
    )
}

export default title