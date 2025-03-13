import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import WomenShopPage from './pages/WomenShopPage';
import MenShopPage from './pages/MenShopPage';
import KidsShopPage from './pages/KidsShopPage';
import GetStartedModal from './utils/GetStartedModal';
import DetailPage from './pages/DetailPage';
import ChatPage from './pages/ChatPage';
import ChatOffering from './pages/ChatOffering';
import ModalOffer from './components/ModalOffer';
import ChatBarter from './pages/ChatBarter';
import Sell from './pages/Sell';
import MainLayoutAcc from './accountpages/MainLayoutAcc';
import Cart from './pages/Cart';
import Tips from './pages/Tips';
import About from './pages/About';

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferingOpen, setIsOfferingOpen] = useState(false);
  const location = useLocation(); // Untuk mendapatkan path saat ini

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 700);

      return () => clearTimeout(timer);
    } else {
      setIsModalOpen(false);
    }
  }, [location.pathname]); // Efek berjalan saat path berubah


  useEffect(() => {
    // Cek apakah path sesuai dengan /offer/:id
    const isOfferPage = /^\/offer\/\d+$/.test(location.pathname);
    
    if (isOfferPage) {
      const timer = setTimeout(() => {
        setIsOfferingOpen(true);
      }, 700);
      
      return () => clearTimeout(timer);
    } else {
      setIsOfferingOpen(false);
    }
  }, [location.pathname]); // Efek akan berjalan setiap path berubah

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ModalOffer isOffering={isOfferingOpen} offeringClose={() => setIsOfferingOpen(false)} />
      <main className={`${isModalOpen ? 'pointer-events-none' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenShopPage />} />
          <Route path="/men" element={<MenShopPage />} />
          <Route path="/kid" element={<KidsShopPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/offer/:id" element={<ChatOffering />} />
          <Route path="/barter/:id" element={<ChatBarter />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/profile" element={<MainLayoutAcc />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {/* Footer hanya ditampilkan jika bukan di halaman /chat */}
      {!location.pathname.startsWith("/chat") && !location.pathname.startsWith("/offer") && <Footer />  && !location.pathname.startsWith("/barter") && <Footer />}

    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
