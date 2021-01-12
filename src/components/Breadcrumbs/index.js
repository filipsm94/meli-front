import React from 'react';

const Breadcrumbs = (props) => {

    return (
        <p>
            {props.categories.reduce((prevVal,currVal,ix)=> {
                return (ix+1) !== props.categories.length ? `${prevVal}${currVal} > `:`${prevVal}${currVal}`;
            }, '')}
        </p>
    )
}

export default Breadcrumbs