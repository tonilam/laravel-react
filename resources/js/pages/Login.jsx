import React, { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        axios.get('/sanctum/csrf-cookie').then((response) => {
            // Login...
            console.log(response);
        });
    });

    return <div>Login</div>;
};

export default Login;
