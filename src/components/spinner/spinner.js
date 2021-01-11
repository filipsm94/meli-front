import React from 'react';
import classes from './spinner.module.scss';

const Spinner = (props) => (
    <div className={classes.Loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Spinner;