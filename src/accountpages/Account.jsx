import React, { useState } from 'react';
import Profp from '../assets/cust1.png';

const Account = () => {
    const [profile, setProfile] = useState({
        name: 'Remon',
        email: 'remon@example.com',
        profilePicture: Profp,
    });

    const [editMode, setEditMode] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({
                    ...profile,
                    profilePicture: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setEditMode(false);
        setShowModal(true); // Tampilkan modal ketika save changes
    };

    const closeModal = () => {
        setShowModal(false); // Tutup modal
    };

    return (
        <div className="flex w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-6 text-gray-800">Account Details</h2>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    {editMode && (
                        <div className="relative">
                            <input
                                type="file"
                                onChange={handleProfilePictureChange}
                                className="hidden"
                                id="profilePictureInput"
                            />
                            <label
                                htmlFor="profilePictureInput"
                                className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 0a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V5zm0 4a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V9zm0 4a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Choose File
                            </label>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        ) : (
                            <p className="mt-1 text-gray-900">{profile.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        ) : (
                            <p className="mt-1 text-gray-900">{profile.email}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    {editMode ? (
                        <button
                            onClick={handleSave}
                            className="w-full px-4 py-2 border-black/30 border text-black/70 hover:text-black rounded-md hover:border-black transition-all duration-300 cursor-pointer"
                        >
                            Save Changes
                        </button>
                    ) : (
                        <button
                            onClick={() => setEditMode(true)}
                            className="w-full px-4 py-2 border-black/30 border text-black/70 hover:text-black rounded-md hover:border-black transition-all duration-300 cursor-pointer"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>

            {/* Modal Success */}
            {showModal && (
                <div className="fixed inset-0 z-[99999999] flex items-center justify-center bg-black/40">
                    <div className="bg-white p-8 text-sm max-w-[300px] rounded-lg shadow-lg flex flex-col justify-center items-center text-center text-black/70">
                        <h2 className="text-lg font-bold mb-4">Success!</h2>
                        <p>Your changes have been saved successfully.</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 text-black font-semibold cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Account;