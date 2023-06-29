import React from 'react';

import { NavLink } from 'react-router-dom';
import Links from '../data/Links';

const Menu = () => {
    return (
        <div>
            Menu
            {Links.map((item) => (
                <p key={item.title}>
                    <NavLink to={`/${item.link}`}>{item.title}</NavLink>
                </p>
            ))}
        </div>
    );
};

export default Menu;
