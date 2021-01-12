import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Box from '../../../hoc/fake';
import classes from './navbar-search.module.scss';

const NavbarSearch = (props) => {
    let history = useHistory();

    const linktohandler = (evt) =>{
        evt.preventDefault();
        if(props.textProduct){        
            history.push({
                pathname: '/items',
                search:`search=${props.textProduct}`
            })
        }
    }

    const keypresshandler = (evt) => {
        if (evt.key === 'Enter') {
            linktohandler(evt)
        }
    }
    
    return (
        <Box>
            <form className={classes.Form} noValidate>
                <input 
                    className={classes.Input} placeholder="Nunca dejes de buscar"
                    type="text" value={props.textProduct} onChange={event => props.setTextProduct(event.target.value)}
                    onKeyPress={(evt) => keypresshandler(evt)} />
                <button className={classes.Bnt} onClick={(evt) =>linktohandler(evt)} >
                    <BsSearch size="20" />
                </button>
            </form>
        </Box>
    )
}

export default NavbarSearch;