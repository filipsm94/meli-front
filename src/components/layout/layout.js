import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Box from '../../hoc/fake';
import Header from '../home/header/header';
import classes from './layout.module.scss';

const Layout = (props) =>{
    const [textProduct, setTextProduct] = useState('');

    return (
        <Box>
            <Header searchText={textProduct} updateHandler={setTextProduct}></Header>
            <div className={classes.Content}>
                {props.children}
            </div>
        </Box>
    )
}

export default withRouter(Layout)