import React from 'react'
import Link from 'next/link'
import classes from './classes.module.css'

const header2 = () => {
    return (
        <header className={classes.Header}>
            <Link href="/">
                <a>
                    <img src="assets/logo.jpg" alt="Flore Prata Logo" />
                </a>
            </Link>
        </header>
    )
}

export default header2