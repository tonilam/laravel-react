import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Account, Login, NotFound } from './pages';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="account" element={<Account />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
