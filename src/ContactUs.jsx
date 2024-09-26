import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from "notistack";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, message } = formData;
        if (!firstName || !lastName || !email || !phone || !message) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            enqueueSnackbar("Please fill in all the fields", { variant: "warning" });
            return;
        }

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            to_name: "KalkiNI",
            message: formData.message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((res) => {
                console.log('email sent successfully', res);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                enqueueSnackbar("Successfully Sent", { variant: 'success' });
            })
            .catch((err) => {
                console.log("email error", err.message);
                enqueueSnackbar("Email error", { variant: "error" });
            });
    };

    return (
        <section className="w-full p-4">
            <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-purple-700 to-pink-500 p-8 text-white">
                    <h2 className="text-3xl font-bold">Contact Information</h2>
                    <h3 className="text-lg font-light mt-4">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="mt-12 space-y-6">
                        <li className="flex items-center">
                            <i className="fas fa-phone-alt bg-red-500 p-3 rounded-full mr-4"></i>
                            <span className="font-semibold">Phone:</span> <a href="tel:+1235235598" className="ml-2">+ 1235 2355 98</a>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-paper-plane bg-red-500 p-3 rounded-full mr-4"></i>
                            <span className="font-semibold">Email:</span> <a href="mailto:info@yoursite.com" className="ml-2">info@yoursite.com</a>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-globe bg-red-500 p-3 rounded-full mr-4"></i>
                            <span className="font-semibold">Website:</span> <a href="#" className="ml-2">yoursite.com</a>
                        </li>
                    </ul>
                    <ul className="flex space-x-4 mt-8 justify-center">
                        <li><a href="#" className="bg-red-500 p-4 rounded-lg"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" className="bg-red-500 p-4 rounded-lg"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="bg-red-500 p-4 rounded-lg"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="p-8">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl font-bold text-purple-700">Send us a message</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                                    placeholder="Mail"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                                    placeholder="Write your message"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full md:w-auto bg-purple-700 text-white py-3 px-6 mt-6 rounded-lg hover:bg-purple-800 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
