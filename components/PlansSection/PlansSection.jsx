import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './PlansSection.module.css';
import PlanCard from '../PlanCard/PlanCard';

const PlansSection = () => {
    let plansData = [
        {
            'name': 'Plan 1',
            'image': '/images/plan-img-1.jpg',
            'color': '#6AFBC6',
            'link': '/plan'
        }, {
            'name': 'Plan 2',
            'image': '/images/plan-img-2.jpg',
            'color': '#FFDE33',
            'link': '/plan2'
        }, {
            'name': 'Plan 3',
            'image': '/images/plan-img-3.jpg',
            'color': '#16D2EC',
            'link': '/plan3'
        }
    ];

    return (
        <section className={styles.plansSection}>
            <div className="container">
                <div className={styles.txt}>
                    <Typography variant="h5">Complete our simple fitness assesment and recieve your personalised workout plans to get you one step closer to achieving your fitness goals.</Typography>
                    <Typography variant="h3">Take our quick & easy fitness quiz in just 2 mins!</Typography>
                </div>
                <div className={styles.planCards}>
                    {plansData.map((plan, index) =>
                        <PlanCard name={plan.name} image={plan.image} color={plan.color} link={plan.link} key={index}></PlanCard>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PlansSection;