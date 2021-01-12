import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Item from '../../components/Item';
import Spinner from '../../components/Spinner';
import { searchProductByText } from '../../services/searchProducts';

const SearchPage = (props) =>{
    const query = new URLSearchParams(props.location.search).get("search");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        searchProductByText(query).then(({categories,items})=>{
            setProducts(items);
            setCategories(categories);
        }).catch().finally(()=> setLoading(false));

    },[query])

    if(loading) return <Spinner />;

    return (
        <>
        {   categories ? <Breadcrumbs categories={categories} />: null  }
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
        </>
    )
};

export default withRouter(SearchPage);