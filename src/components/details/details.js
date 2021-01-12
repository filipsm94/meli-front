import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useParams } from 'react-router-dom';
import Box from '../../hoc/fake';
import Spinner from '../spinner/spinner';
import classes from './details.module.scss';

const DetailsPage = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:4000/api/items/${id}`).then((response) => {
            setProduct(response.data.item);
        }).catch((error) => {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        }).finally(() => setLoading(false));;
    },[id])

    return (
        <Box>
        {
            loading ? <Spinner /> 
            : 
            <div className={classes.Card}>
                <div className={classes.Flex}>
                    <div className={classes.Image}>
                        <img src={product.picture} alt={product.title} />
                        <div className={classes.Description}>
                            <h1>Descripcion del Producto</h1>
                            <p>{product.description}</p>
                            <ul className={classes.Columns}>
                                {
                                    product.features? product.features.map((feature, i)=> <li key={i}>{feature.name} : {feature.value_name}</li> ): null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Purchase}>
                        <p>{product.condition ? 'Nuevo': 'Usado'} - {product.sold_quantity ? product.sold_quantity: 0 } vendidos</p>
                        <p>{product.title}</p>
                        {product.price  ? <p>
                            <CurrencyFormat className={classes.Price} value={product.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$ '} suffix={` ${product.price.currency}`} />
                        </p> : null}
                        <button className={classes.Btn}>Comprar</button>
                    </div>
                </div>
            </div>
        }
        </Box>
    );
}

export default DetailsPage