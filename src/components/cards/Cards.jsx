import React from 'react';
import styles from './cards.module.css';
import Card from './card/Card';
export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate }, country }) {
    if (!confirmed) {
        return 'Loading...';
    }
    const confirmedval = confirmed.value;
    const deathval = deaths.value;
    const recoveredval = recovered.value;
    return (

        <div className={styles.cards}>
            <div className={styles.cardsTitle}>Covid-19</div>
            <div className={styles.cardsCountry}>
                {country}
            </div>
            <div className={styles.cardsCard}>
                <Card Number={confirmedval} Title="Confirmed" LastUpdate={lastUpdate} />
                <Card Number={recoveredval} Title="Recovered" LastUpdate={lastUpdate} />
                <Card Number={deathval} Title="Deaths" LastUpdate={lastUpdate} />

            </div>

        </div>
    )
}
