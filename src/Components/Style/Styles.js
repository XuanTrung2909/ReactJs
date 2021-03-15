import React, { Component } from 'react'
//cach 1: import duong dan css tu file component
// import './styles.css';

//cach 2: import css tai component

import styles from './styles.module.css';

export default class Styles extends Component {
    render() {
        return (
            <div> 
                <p className="text-red">Cybersoft</p>
                <p className={styles.textGreen}>ahihi</p>
                <p className={styles[`textGreen`]}>ahihi</p>
                <p className={`${styles[`textGreen`]} ${styles[`bg-black`]}`}>ahihi</p>


                <section style={{backgroundColor: 'black', color: 'green'}}>
                    Component
                </section>
                
            </div>
        )
    }
}
