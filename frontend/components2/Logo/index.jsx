import React from 'react';
import Link from 'next/link';
import classes from './classes.module.css';

const logo = (props) => (
    <div>
        <Link href={props.link}>
            <a>
                <img className={classes.logo} src={props.src} alt={props.alt} />
            </a>
        </Link>
    </div>
);

export default logo;