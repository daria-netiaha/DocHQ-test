import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './PlanCard.module.css';

const PlanCard = (props) => {
    return (
        <div className={styles.planCard}>
            <div className={styles.wrap}
                style={{ 'backgroundImage': 'url(' + props.image + ')', 'boxShadow': '10px 10px ' + props.color }} >
                <Typography variant="h4">{props.name}</Typography>
                <a href={props.link}>VIEW WORK OUT &gt;</a>
            </div>
        </div>
    )
}

export default PlanCard;