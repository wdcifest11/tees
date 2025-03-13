import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sell = () => {
    const navigate = useNavigate();
    const [userProduct, setUserProduct] = useState({
        image: null,
        name: '',
        brand: '',
        size: '',
        price: '',
        location: '',
        category: ''
    });
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal preview
    const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol modal loading

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProduct({ ...userProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserProduct({ ...userProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi form
        if (!userProduct.image || !userProduct.name || !userProduct.brand || !userProduct.size || !userProduct.price || !userProduct.location || !userProduct.category) {
            alert('Please fill all fields');
            return;
        }
        // Tampilkan modal loading
        setIsLoading(true);
        // Simulasikan proses upload selama 2 detik
        setTimeout(() => {
            setIsLoading(false);
            setShowModal(true); // Tampilkan modal preview setelah loading selesai
        }, 2000);
    };

    const handleCloseModal = () => {
        setShowModal(false); // Tutup modal
        navigate('/profile'); // Arahkan ke halaman profil
    };

    return (
        <section className='pt-20 md:pt-30 bg-gray-50 min-h-screen pb-20'>
            <div className='max-w-4xl mx-auto p-5'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Sell Your Product</h1>
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg'>
                    {/* Upload Image Section */}
                    <div className='mb-6'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-5">
                                {userProduct.image ? (
                                    <img src={userProduct.image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <svg className="w-12 h-12 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                        </svg>
                                        <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 800x400px)</p>
                                    </div>
                                )}
                                <input type="file" name="image" accept="image/*" className="hidden" onChange={handleImageChange} required />
                            </label>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name Product</label>
                            <input type="text" name="name" value={userProduct.name} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Product Brand</label>
                            <input type="text" name="brand" value={userProduct.brand} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Product Size</label>
                            <input type="text" name="size" value={userProduct.size} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Product Price</label>
                            <input type="text" name="price" value={userProduct.price} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Location</label>
                            <input type="text" name="location" value={userProduct.location} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                            <select name="category" value={userProduct.category} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option value="" disabled>Select Category</option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Pants">Pants</option>
                                <option value="Jacket">Jacket</option>
                                <option value="Blazer">Blazer</option>
                                <option value="Sandals">Sandals</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='mt-8'>
                        <button type="submit" className="w-full bg-green text-white p-3 rounded-lg hover:bg-green-800/80 transition duration-300">
                            Upload Product
                        </button>
                    </div>
                </form>

                {/* Modal Loading */}
                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                            <h2 className="text-2xl font-bold mb-4">Uploading...</h2>
                            <svg className="w-10 h-10 mx-auto mb-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                                <circle cx="50" cy="50" r="45" stroke="#38b2ac" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="75" strokeLinecap="round">
                                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                            <p className="text-gray-600">Please wait while we upload your product...</p>
                        </div>
                    </div>
                )}

                {/* Modal Preview */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-2xl font-bold mb-4">Product Preview</h2>
                            <div className="mb-4">
                                <img src={userProduct.image} alt="Product Preview" className="w-full h-48 object-cover rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <p><strong>Name:</strong> {userProduct.name}</p>
                                <p><strong>Brand:</strong> {userProduct.brand}</p>
                                <p><strong>Size:</strong> {userProduct.size}</p>
                                <p><strong>Price:</strong> {userProduct.price}</p>
                                <p><strong>Location:</strong> {userProduct.location}</p>
                                <p><strong>Category:</strong> {userProduct.category}</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleCloseModal}
                                    className="w-full bg-green text-white p-3 rounded-lg hover:bg-green-800/80 transition duration-300"
                                >
                                    Close and Go to Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sell;