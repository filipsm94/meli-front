import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import classes from './navbar.module.scss';

const NavbarSearch = ({textProduct,setTextProduct}) => {
    let history = useHistory();

    const linktohandler = (evt) =>{
        evt.preventDefault();
        if(textProduct){        
            history.push({
                pathname: '/items',
                search:`search=${textProduct}`
            })
        }
    }

    const keypresshandler = (evt) => {
        if (evt.key === 'Enter') {
            linktohandler(evt)
        }
    }
    
    return (
        <>
            <form className={classes.Form} noValidate>
                <input 
                    className={classes.Input} placeholder="Nunca dejes de buscar"
                    type="text" value={textProduct} onChange={event => setTextProduct(event.target.value)}
                    onKeyPress={(evt) => keypresshandler(evt)} />
                <button className={classes.Bnt} onClick={(evt) =>linktohandler(evt)} >
                    <BsSearch size="20" />
                </button>
            </form>
        </>
    )
}

//add proptypes

export default NavbarSearch;