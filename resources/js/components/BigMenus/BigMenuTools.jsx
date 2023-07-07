import React from 'react';
import { NavLink } from 'react-router-dom';

const BigMenuTools = () => {
    const tools = [
        { name: 'Clients' },
        { name: 'Delivery' },
        { name: 'Documents' },
        { name: 'Inventory' },
        { name: 'Invoices' },
        { name: 'Staffs' },
    ];
    return (
        <div className="bg-teal-100 p-3 rounded-md sm:w-full lg:w-9/12 flex">
            {tools.map((tool) => (
                <div key={tool.name} className="bg-white m-2 py-2 px-3 rounded-md">
                    <NavLink to={'/'}>{tool.name}</NavLink>
                </div>
            ))}
        </div>
    );
};

export default BigMenuTools;
