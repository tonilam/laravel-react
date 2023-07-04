import React, { useState } from 'react';

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
        alert(
            `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}`,
        );
    };

    // ********** ********** ********** Template ********** ********** **********
    // ********** ********** ********** ********** ********** ********** **********
    return (
        <div className="p-2 md:px-5">
            <form onSubmit={handleSubmit}>
                <h1>
                    Hi {formData.firstName} {formData.lastName},
                </h1>
                <div className="flex flex-wrap flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="m-2 border rounded-md shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="m-2 border rounded-md shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="m-2 border rounded-md shadow-sm"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="m-2 border rounded-md shadow-sm"
                        />
                    </div>
                    <div className="w-full text-center md:text-right">
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
