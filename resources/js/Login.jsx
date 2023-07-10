import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SIMPLE_TOAST } from './data/ToastSettings';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [status, setStatus] = useState({ ready: false });

    const updateForm = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setCredentials((previousValues) => ({ ...previousValues, [key]: value }));
    };

    const submitLogin = async (event) => {
        event.preventDefault();
        await axios.get('/sanctum/csrf-cookie').then((response) => {
            setStatus((previousValues) => ({ ...previousValues, ready: true }));
        });
        await axios
            .post('/api/login', credentials)
            .then(({ data }) => {
                console.log(data);
                if (data.id > 0) {
                    window.location.href = '/account';
                }
            })
            .catch((error) => {
                console.log(error.response.data.error);
                toast.error(error.response.data.error || 'Something went wrong', SIMPLE_TOAST);
            });
    };

    useEffect(() => {});

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={credentials.email}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={updateForm}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                value={credentials.password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={updateForm}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={!status}
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;

const container = document.getElementById('app');
if (!!container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Login />);
}
