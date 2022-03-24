import React from 'react'
import styles from './card.module.css'
export default function Card({ Number, Title, LastUpdate }) {
    console.log("card", Number);
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                {Title}
            </div>
            <div className={styles.cardNumber}>
                {Number}
            </div>
            <div className={styles.cardLastUpdate}>
                4{LastUpdate}
            </div>
        </div>
    )
}
