import React from 'react';
import NavbarSearch from '../navbar/navbar-search';
import classes from './header.module.css';
import logo from '../../../assets/logo__mercado_libre.png';
import { Link } from 'react-router-dom';

const Header = (props) =>{

    return (
            <header className={classes.Header}>
                <div className={classes.Center}>
                    <div className={classes.Logo}>
                        <Link to="/" onClick={() => props.updateHandler('')}><img src={logo} alt="Mercado Libre"/></Link>
                    </div>
                    <div className={classes.SearchBar}>
                        <NavbarSearch clicked={props.action} textProduct={props.searchText} setTextProduct={props.updateHandler}></NavbarSearch>
                    </div>
                </div>
            </header>
        )
}

export default Header;