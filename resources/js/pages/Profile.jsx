import React, { useEffect, useState } from 'react';
import UserApi from '../apis/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SIMPLE_TOAST } from '../data/ToastSettings';

const Profile = () => {
    // ********** ********** ********** State ********** ********** **********
    // ********** ********** ********** ********** ********** ********** **********
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phoneNumber: '', email: '' });

    // ********** ********** ********** Functions ********** ********** **********
    // ********** ********** ********** ********** ********** ********** **********
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        UserApi.saveUser(formData)
            .then((response) => {
                alert(
                    `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}`,
                );
            })
            .catch((error) => {
                toast.error('Error on saving your profile.', SIMPLE_TOAST);
            });
    };

    // ********** ********** ********** Hooks ********** ********** **********
    // ********** ********** ********** ********** ********** ********** **********
    useEffect(() => {
        UserApi.getUsers()
            .then(({ data }) => {
                const user = data.pop();
                setFormData((prevFormData) => ({ ...prevFormData, email: user.email, phoneNumber: user.phone }));
                toast.success('Your profile is ready.', SIMPLE_TOAST);
            })
            .catch((error) => {
                toast.error('Error on loading your profile.', SIMPLE_TOAST);
            });
    }, []);

    // ********** ********** ********** Template ********** ********** **********
    // ********** ********** ********** ********** ********** ********** **********
    return (
        <div className="p-2 md:px-5">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h1>
                    Hi {formData.firstName} {formData.lastName},
                </h1>
                <div className="flex flex-wrap flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-1 flex flex-col">
                        <label className="text-xs font-bold">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border rounded-md p-1 shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-1 flex flex-col">
                        <label className="text-xs font-bold">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border rounded-md p-1 shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-1 flex flex-col">
                        <label className="text-xs font-bold">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-md p-1 shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-1 flex flex-col">
                        <label className="text-xs font-bold">Phone</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="border rounded-md p-1 shadow-sm"
                        />
                    </div>
                    <div className="w-full text-center md:text-right p-1">
                        <button type="submit" className="bg-teal-300 border px-2 py-1">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;
