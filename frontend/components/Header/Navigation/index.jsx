import React, {useRef} from 'react'
import classes from './classes.module.css'

const navigation = (props) => {
    const items = [
        {name: "Promoções", path: "#"},
        {name: "Colares", path: "#"},
        {name: "Anéis", path: "#"},
        {name: "Pulseiras", path: "#"},
        {name: "Tornozeleiras", path: "#"},
        {name: "Brincos", path: "#"},
        {name: "Argolas", path: "#"},
        {name: "Braceletes", path: "#"},
        {name: "Limpeza", path: "#"}
    ]
    const list_items = items.map(item => {
        return (
            <a href={item.path} key={item.name}>
                {item.name}
            </a>
        )
    })
    const MenuHideHandler = () => {
        if(refMenuHide.current.classList.contains(`${classes.MenuHide}`)){
            refMenuHide.current.classList.remove(`${classes.MenuHide}`)
        }
        else{
            refMenuHide.current.classList.add(`${classes.MenuHide}`)
        }
    }
    const refMenuHide = useRef(null)

    return(
        <nav className={classes.Navigation}>
            <a href="#" className={classes.MenuToggler}
                onClick={MenuHideHandler}><i class="fas fa-bars"></i>
            </a>
            <div className={classes.MenuHide}
                ref={refMenuHide}>
                {list_items}
            </div>
        </nav>
    )
}

export default navigation