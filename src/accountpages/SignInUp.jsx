import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { X } from 'lucide-react';

import Logo from '../assets/tees.png'
import { Link } from 'react-router-dom';

const SignInUp = ({ openLogin, closeLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        setFormData({ username: "", email: "", password: "" });
    };


    useEffect(() => {
        if (openLogin) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openLogin]);

    if (!openLogin) return null;

    return (
        <div className="fixed w-screen flex justify-center items-center z-[99999999999] h-screen bg-black/50 backdrop-blur-sm p-3">
            <div className="bg-white relative p-5 sm:px-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <img src={Logo} alt="Logo" className="w-14 sm:w-16 md:w-20 mx-auto mb-4" />
                <p className="text-center text-xs sm:text-sm mb-4">
                    Halo, there! Nice to meet you
                </p>
                <form className="space-y-3 text-xs">
                    {isSignUp && (
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <Link onClick={closeLogin} to="/profile" className="block w-full">
                        <p className="bg-[#3D9970] mx-auto text-center text-sm text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </p>
                    </Link>
                </form>
                <div className="my-3 sm:my-4 flex items-center justify-center text-xs sm:text-sm">
                    <div className="border-t w-full"></div>
                    <span className="mx-2 text-gray-500">or</span>
                    <div className="border-t w-full"></div>
                </div>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <button className="flex items-center justify-center w-full border border-gray-300 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition">
                        <FcGoogle className="text-lg mr-2" /> Continue with Google
                    </button>
                    <button className="flex items-center justify-center w-full border border-gray-300 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition text-blue-700">
                        <FaFacebook className="text-lg mr-2" /> Continue with Facebook
                    </button>
                    <button className="flex items-center justify-center w-full border border-gray-300 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition">
                        <FaApple className="text-lg mr-2" /> Continue with Apple
                    </button>
                </div>
                <p className="mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm">
                    <span className="cursor-pointer text-blue-600 hover:underline" onClick={toggleForm}>
                        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                    </span>
                </p>
                <button onClick={closeLogin} className="absolute top-4 right-4 sm:top-5 sm:right-5 cursor-pointer">
                    <X />
                </button>
            </div>


        </div>
    );
};

export default SignInUp;
