import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../utils/products";
import Img from '../assets/seller.png'
import { FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";
import BuyNow from "./BuyNow";
import Offering from "./Offering";
import ModalBarter from "./ModalBarter";

const ProductDetails = () => {
  const { id } = useParams();
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const [offeringOpen, setOfferingOpen] = useState(false)
  const [barterOpen, setBarterOpen] = useState(false)

  const navigate = useNavigate()

  const handlechat = () => {
    navigate(`/chat/${product.id}`)
  }

  // Menggabungkan semua produk dari berbagai kategori
  const allProducts = products.flatMap(category => category.items);

  // Mencari produk berdasarkan id
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 text-lg">Produk tidak ditemukan</div>;
  }

  // Menentukan produk yang akan ditampilkan
  const displayedProducts = showAll ? products[0].items : products[0].items.slice(0, 8);

  return (
    <section className="min-h-screen pt-20 md:pt-30 text-black/70">
      <div className="flex lg:flex-row flex-col px-5 lg:px-15 gap-x-5">

        <div className="lg:w-3/5 h-full">
          <div className=" flex flex-col sm:flex-row gap-2">
            {/* Gambar utama */}
            <img
              src={product.image}
              alt={product.name}
              className="sm:w-3/4 w-full h-auto object-cover rounded-lg"
            />

            {/* Container gambar kecil dengan jarak */}
            <div className="flex sm:flex-col flex-row sm:w-1/4 w-full gap-2 overflow-hidden">
              <div className="w-1/4 sm:w-full h-20 sm:h-auto object-cover rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover scale-[4]"
                />
              </div>
              <div className="w-1/4 sm:w-full h-20 sm:h-auto object-cover rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover scale-[7]"
                />
              </div>
              <div className="w-1/4 sm:w-full h-20 sm:h-auto object-cover rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover scale-[3]"
                />
              </div>
              <div className="w-1/4 sm:w-full h-20 sm:h-auto object-cover rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover scale-[3]"
                />
              </div>


            </div>
          </div>
          {/* Informasi Penjual */}
          <div className="bg-white rounded-lg shadow-lg border border-black/20 w-full mt-5 p-2 md:p-5">
            <p className="text-sm">Seller:</p>
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <div className="flex gap-2 mt-2">
                <img src={Img} alt="" className="w-10 h-10 rounded-full" />
                <div className="text-xs">
                  <p className="font-semibold">Maria Jeya</p>
                  <p>maria@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-2 items-center text-xs sm:text-sm">
                <p>4.5</p>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="hidden sm:block">See all 100 reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-full mt-5 lg:mt-0">
          <div className="w-full bg-white border border-black/20 shadow-lg p-5 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-xl font-bold mt-1">${product.price}</p>

            <div className="border-t border-gray-700 mt-3 pt-3">
              <p className="font-semibold">Product Details:</p>
              <div className="text-xs mt-5 flex flex-col gap-y-3">
                <p><span className="font-semibold">Brand:</span> <span className="">{product.brand}</span></p>
                <p><span className="font-semibold">Size:</span> {product.size}</p>
                <p><span className="font-semibold">Condition:</span> <span className="font-semibold">Very Good</span></p>
                <p><span className="font-semibold">Color:</span> {product.color}</p>
                <p><span className="font-semibold">Payment Options:</span> <span className="font-semibold">Bank Card</span></p>
                <p><span className="font-semibold">Uploaded:</span> 4 hours ago</p>
                <p><span className="font-semibold">Location:</span> <span className="font-semibold">{product.location}</span></p>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-3 pt-3">
              <p className="font-semibold">Description:</p>
              <p className="text-xs mt-5">
                Classic and stylish Calvin Klein wool-blend coat with a timeless toggle closure design. Features a structured silhouette, cozy mid-length cut, and buttoned sleeve cuffs for an elegant touch. <span className="text-green-400 cursor-pointer">view more</span>
              </p>
            </div>

            <div className="mt-4 text-sm">
              <button onClick={() => setModalOpen(true)} className=" cursor-pointer w-full bg-green hover:bg-green-800/80 transition-all duration-300 text-white py-2 rounded-lg font-semibold">Buy Now</button>
              <button  onClick={() => setOfferingOpen(true)} className="w-full cursor-pointer bg-[#fafafa] hover:bg-gray-100 py-2 mt-2 rounded-lg border border-black/20">Make an offer</button>
              <button onClick={() => setBarterOpen(true)} className="w-full cursor-pointer bg-[#fafafa] hover:bg-gray-100 py-2 mt-2 rounded-lg border border-black/20">Apply for barter</button>
              <button className="w-full cursor-pointer bg-[#fafafa] hover:bg-gray-100 py-2 mt-2 rounded-lg border border-black/20" onClick={handlechat}>Message seller</button>
            </div>
          </div>
        </div>

      </div>
      <div className="lg:px-15 px-3 mt-20 flex flex-col items-center justify-center mb-10">
        <div className="self-start">
          <h2 className="mb-1 font-semibold text-lg md:text-2xl">You might also like</h2>
          <p className="mb-5 text-sm">SIMILIAR PRODUCTS</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 md:gap-3 gap-2">
          {displayedProducts.map((product) => (
            <Link to={`/product/${product.id}`}>
            <div key={product.id} className="bg-white md:p-4 rounded-2xl shadow-lg border border-black/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-md md:mb-4 mb-2"
              />
              <div className="flex justify-between items-center px-2 md:px-0">
                <h3 className="font-semibold text-black/70 md:text-lg text-sm">{product.name}</h3>
                <Heart className="md:w-5 w-3" />
              </div>
              <p className="px-2 md:px-0 text-gray-500 text-xs md:text-sm">{product.brand}</p>
              <div className="flex justify-between mt-2 md:mt-5 px-2 md:px-0 items-center">
                <p className="md:text-xl mb-2 md:mb-0 text-sm text-black/70 font-semibold md:mt-2">${product.price}</p>
                <p className="hidden md:flex text-green-800/50 text-xs md:mt-2 md:text-sm">{product.location}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
        {!showAll && products[0].items.length > 6 && (
          <button
            className="mt-8 px-5 py-2 md:py-3 md:px-8 md:shadow-lg self-center bg-green  cursor-pointer hover:bg-green-800/80 text-white transition-all duration-300 shadow font-semibold rounded-lg text-xs md:text-sm"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        )}
      </div>
      <BuyNow modalOpen={modalOpen} modalClose={() => setModalOpen(false)} />
      <Offering offeringOpen={offeringOpen} offeringClose={() => setOfferingOpen(false)} />
      <ModalBarter isBarter ={barterOpen} barterClose={() => setBarterOpen(false)} />

    </section>

  );
};

export default ProductDetails;
