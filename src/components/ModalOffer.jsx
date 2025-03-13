import React, { useEffect } from 'react';

const ModalOffer = ({ isOffering, offeringClose }) => {

  useEffect(() => {
    if (isOffering) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOffering]);

  if (!isOffering) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white py-8 px-6 md:py-10 md:px-12 rounded-lg shadow-2xl w-xs flex flex-col items-center max-h-[90vh] overflow-y-auto text-gray-800 text-center">
        <p className="text-lg font-medium">You are offering a discount of</p>
        <p className="text-6xl font-extrabold text-green-800 mt-2">50%</p>
        <p className="text-sm text-gray-600 mt-1">Continue the conversation in chat instead.</p>
        <button 
          onClick={offeringClose} 
          className="mt-6 bg-green cursor-pointer hover:bg-green-800/80 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ModalOffer;
