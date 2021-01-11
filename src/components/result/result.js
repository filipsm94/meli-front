import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Item from './item/item';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import Spinner from '../spinner/spinner';
import Box from '../../hoc/fake';

const ResultPage = (props) =>{
    const query = new URLSearchParams(props.location.search).get("search");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:4000/api/items?q=${query}`).then((response) => {
            setCategories(response.data.categories);
            setProducts(response.data.items);
        }).catch((error) => {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        }).finally(() => setLoading(false));
    },[query])


    return (
    <div>
        {
            loading ? <Spinner /> 
            : 
            <Box>
            {
                categories ? <Breadcrumbs categories={categories} />: null
            }
            {
                products.length > 0 ? products.map((product,i) => 
                <Item key={i}
                    idProduct={product.id} 
                    urlImg={product.picture}
                    amount={product.price.amount}
                    currency={product.price.currency}
                    title={product.title} />)
                :
                <p>No encontramos ningun resultado</p>
            }
            </Box>
        }
        
    </div>
    )
};

export default withRouter(ResultPage);