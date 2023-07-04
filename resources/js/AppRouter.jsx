import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Account, Login, NotFound, Profile, Settings } from './pages';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="account" element={<Account />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
