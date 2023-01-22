import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './PriceCard.module.css';

const PriceCard = (props) => {
    return (
        <div className={styles.priceCard}>
            <p className={styles.mark}>{props.mark}</p>
            <div className={styles.wrap}
                style={{ 'backgroundColor': props.bgColor, 'color': props.color }} >
                <div className="card-head">
                    <Typography variant="h5" className={styles.name}>{props.name}</Typography>
                    <p className={styles.price}>{props.price}</p>
                    <p className={styles.subTitle}> {props.subtitle} </p>
                </div>
                <div className="card-foot">
                    <ul className="checkmark-list">
                        {props.options.map((option, index) =>
                            <li>
                                <CheckCircleIcon fontSize="medium" ></CheckCircleIcon>
                                {option}
                            </li>
                        )}
                    </ul>
                    <Button variant="contained" href={props.link} color={props.btnType}>Lorem</Button>
                </div>
            </div>
        </div >
    )
}

export default PriceCard;