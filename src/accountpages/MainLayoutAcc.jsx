import React, { useState } from 'react';
import { User, ShoppingCart, Heart, MapPin, Lock, LogOut, Store } from 'lucide-react';
import Address from './Address';
import WishList from './WishList';
import products from '../utils/products';
import Order from './Order';
import PasswordChange from './PasswordChange';
import Account from './Account';
import { Link } from 'react-router-dom';
import MyProduct from './MyProduct';
import Barter from './Barter';
import { FaTradeFederation } from 'react-icons/fa';

const MainLayoutAcc = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showAll, setShowAll] = useState(false); // Tambahkan ini jika Anda ingin mengontrol tampilan produk

  // Menggabungkan semua produk dari berbagai kategori
  const allProducts = products.flatMap(category => category.items);

  // Menentukan produk yang akan ditampilkan
  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 5);

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <Account />
      case 'myproduct':
        return <MyProduct displayedProducts={displayedProducts} />
      case 'order':
        return <Order displayedProducts={displayedProducts} />;
      case 'wishlist':
        return <WishList displayedProducts={displayedProducts} />;
      case 'barter':
        return <Barter displayedProducts={displayedProducts} />;
      case 'address':
        return <Address />;
      case 'password':
        return <PasswordChange />
      default:
        return <Account />
    }
  };

  return (
    <section className="pt-20 md:pt-30 px-3 lg:px-15 bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8">
        <div className='flex gap-x-3 items-center mb-8'>
          <Link to="/" className='text-lg cursor-pointer text-black/70 hover:text-black'>
          Home
          </Link>
          <p>›</p>
          <h2 className="text-lg font-semibold">My Account</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-6 min-h-screen">
            <ul className="space-y-4">
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'account' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('account')}
              >
                <User size={20} />
                <span>Account</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'myproduct' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('myproduct')}
              >
                <Store size={20} />
                <span>My Product</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'order' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('order')}
              >
                <ShoppingCart size={20} />
                <span>Orders</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'barter' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('barter')}
              >
                <FaTradeFederation size={20} />
                <span>Barter</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'address' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('address')}
              >
                <MapPin size={20} />
                <span>Address</span>
              </li>
              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'wishlist' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('wishlist')}
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </li>

              <li
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'password' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('password')}
              >
                <Lock size={20} />
                <span>Password</span>
              </li>
              <li className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer text-black/70 hover:bg-gray-50">
                <LogOut size={20} />
                <span>Logout</span>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLayoutAcc;