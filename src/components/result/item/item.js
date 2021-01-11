import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './item.module.css';

const Item = (props) => {
    const currency = ` ${props.currency}`;
    let match = useRouteMatch();

    return (
        <Link className={classes.Card} to={{
            pathname:`${match.url}/${props.idProduct}`
        }}>
            <div className={classes.Image}>
                <img src={props.urlImg} />
            </div>
            <div className={classes.Detail}>
                <div className={classes.Product}>
                    <CurrencyFormat className={classes.Price} value={props.amount} displayType={'text'} thousandSeparator={true} prefix={'$ '} suffix={currency} />
                    <h3>{props.title}</h3>
                </div>
                <div className={classes.Reference}>address</div>
            </div>
        </Link>
    )
}

export default Item