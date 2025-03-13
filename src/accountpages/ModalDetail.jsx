import React from 'react';

const ModalDetail = ({ selectedOrder, onClose }) => {
    if (!selectedOrder) return null;

    return (
        <div className='bg-black/40 fixed inset-0 z-[999999999] flex justify-center items-center h-screen w-screen'>
            <div className="bg-white p-6 rounded-lg w-[400px]">
                <h2 className="text-base lg:text-lg font-bold mb-4">Order Details</h2>
                <div className="flex items-center mb-4 text-sm">
                    <img
                        src={selectedOrder.image}
                        alt={selectedOrder.name}
                        className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="ml-4">
                        <h3 className="font-semibold">{selectedOrder.name}</h3>
                        <p>Merk: {selectedOrder.brand}</p>
                        <p className='font-semibold'>${selectedOrder.price}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-gray-600">Ordered on: 27 July 2023</p>
                    <p className="text-sm text-gray-600">Status: Completed</p>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Shipping Address</h3>
                    <p className="text-sm text-gray-600">123 Main St, City, Country</p>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Payment Method</h3>
                    <p className="text-sm text-gray-600">Credit Card **** **** **** 1234</p>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 bg-green text-white py-2 px-4 rounded-lg hover:bg-green-800/80 cursor-pointer transition-all duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalDetail;