import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import classes from './layout.module.scss';

const Layout = (props) =>{

    return (
        <>
            <Header></Header>
            <div className={classes.Content}>
                {props.children}
            </div>
        </>
    )
}

export default withRouter(Layout)