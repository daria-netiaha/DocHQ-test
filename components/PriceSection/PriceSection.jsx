import React from 'react';
import styles from './PriceSection.module.css';
import PriceCard from '../PriceCard/PriceCard';

const PriceSection = () => {
    let priceData = [
        {
            'name': 'Plan 1',
            'price': '£30',
            'subtitle': '',
            'options': ['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'],
            'bgColor': '#000000',
            'color': '#fff',
            'btnType': 'secondary',
            'link': '/plan',
            'mark': ''
        }, {
            'name': 'Plan 2',
            'price': '£45',
            'subtitle': 'PER TIMEFRAME',
            'options': ['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'],
            'bgColor': '#6AFBC6',
            'color': '#000',
            'btnType': 'primary',
            'link': '/plan2',
            'mark': 'Most popular'
        }, {
            'name': 'Plan 3',
            'price': '£60',
            'subtitle': 'PER TIMEFRAME',
            'options': ['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'],
            'bgColor': '#000000',
            'color': '#fff',
            'btnType': 'secondary',
            'link': '/plan3',
            'mark': ''
        },
    ];

    return (
        <section className={styles.pricesSection}>
            <div className="container-xs">
                <div className={styles.priceCards}>
                    {priceData.map((item, index) =>
                        <PriceCard name={item.name}
                            price={item.price}
                            subtitle={item.subtitle}
                            options={item.options}
                            bgColor={item.bgColor}
                            color={item.color}
                            btnType={item.btnType}
                            link={item.link}
                            mark={item.mark}
                            key={index}>
                        </PriceCard>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PriceSection;