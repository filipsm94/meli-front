import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo__mercado_libre.png';
import NavbarSearch from '../navbar/navbar-search';
import classes from './header.module.scss';

const Header = (props) =>{

    const [textProduct, setTextProduct] = useState('');

    return (
            <header className={classes.ColorCabecera}>
                <div className={classes.Center}>
                    <div className={classes.Logo}>
                        <Link to="/" onClick={() => setTextProduct('')}><img src={logo} alt="Mercado Libre"/></Link>
                    </div>
                    <div className={classes.SearchBar}>
                        <NavbarSearch clicked={props.action} textProduct={textProduct} setTextProduct={setTextProduct}></NavbarSearch>
                    </div>
                </div>
            </header>
        )
}

export default Header;