import React from 'react';
import { Outlet } from 'react-router-dom';

const Categories = (props) => {
    let { title } = props
    return (
        <>
            <h1>Category: {title}</h1>
            <Outlet/>
        </>
    );
};

export default Categories;
