import React from 'react'
import classes from './classes.module.css'

const login = () => {

    return (

        <main className={classes.Page}> 
            <div className={classes.Login}>
                <img src="assets/logo2.png" alt="Flore Prata Logo" />
            </div>
            <section className={classes.Login}>
                <form>
                    <div>
                        <i className="fas fa-user"></i>
                        <input type="email" />
                    </div>
                    <div>
                        <i className="fas fa-lock"></i>
                        <input type="password" />
                    </div>
                    <div>
                        <button>Entrar</button>
                    </div>
                </form>
                <div>
                    <p>Não é cadastrado? <a href="#">Clique aqui</a></p>
                </div>
            </section>

        </main>
    )
}

export default login