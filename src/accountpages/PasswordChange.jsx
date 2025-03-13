import { CheckCheck } from 'lucide-react';
import React, { useState } from 'react';

const PasswordChange = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            // Simpan perubahan password di sini
            setShowSuccessModal(true);
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className='flex w-full'>
            <div className='bg-white p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all'>
                <h2 className="text-lg font-bold mb-6 text-gray-800">Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>New Password</label>
                        <div className='relative'>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='w-full px-4 py-3 border-b border-black/30 focus:outline-none transition-all'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className='absolute right-3 top-3 text-gray-500 hover:text-green focus:outline-none'
                            >
                                {showNewPassword ? (
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    </svg>
                                ) : (
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Confirm Password</label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='w-full px-4 py-3 border-b border-black/30 focus:outline-none transition-all'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className='absolute right-3 top-3 text-gray-500 hover:text-blue-600 focus:outline-none'
                            >
                                {showConfirmPassword ? (
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    </svg>
                                ) : (
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {error && <p className='text-red-700 text-sm mb-4 text-center'>{error}</p>}
                    <button
                        type='submit'
                        className='w-full bg-white text-black/70 border border-black/20 py-3 px-4 rounded-lg hover:border-black hover:text-black cursor-pointer focus:outline-none transition-all'
                    >
                        Save Changes
                    </button>
                </form>

                
            </div>
            {showSuccessModal && (
                    <div className="fixed inset-0 h-screen w-screen z-[999999999] flex items-center justify-center bg-black/40">
                        <div className="bg-white p-8 rounded-lg shadow-xl text-sm flex flex-col justify-center items-center text-center max-w-[300px]">
                            <CheckCheck className='w-10 h-10 text-green' />
                            <h2 className="text-base font-semibold mb-2">Success!</h2>
                            <p className="text-gray-700 mb-4">Your password has been changed successfully.</p>
                            <button
                                onClick={closeModal}
                                className="bg-white border border-black/30 text-black/70 hover:text-black hover:border-black transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default PasswordChange;