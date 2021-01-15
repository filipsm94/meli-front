import React from 'react';

const Breadcrumbs = ({categories}) => {

    return (
        <p>
            {categories.reduce((prevVal,currVal,ix)=> {
                return (ix+1) !== categories.length ? `${prevVal}${currVal} > `:`${prevVal}${currVal}`;
            }, '')}
        </p>
    )
}

export default Breadcrumbs