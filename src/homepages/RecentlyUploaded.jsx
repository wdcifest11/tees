import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import products from "../utils/products";
import { Link, useParams } from "react-router-dom";
import { Heart } from "lucide-react";

const RecentlyUploaded = () => {
    const { id } = useParams();

    const [activeCategory, setActiveCategory] = useState(products[0]);
    const productRef = useRef(null);

    useEffect(() => {
        if (productRef.current) {
            gsap.fromTo(productRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.3, ease: "power3.out" }
            );
        }
    }, [activeCategory]);

    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        const updateVisibleProducts = () => {
            if (window.innerWidth >= 1024) {
                setVisibleProducts(20); // lg: 8 produk
            } else if (window.innerWidth >= 768) {
                setVisibleProducts(6); // md: 6 produk
            } else {
                setVisibleProducts(8); // default: 8 produk
            }
        };

        updateVisibleProducts();
        window.addEventListener("resize", updateVisibleProducts);

        return () => {
            window.removeEventListener("resize", updateVisibleProducts);
        };
    }, []);

    return (
        <div className="bg-[#fff] flex flex-col px-3 md:px-3 lg:px-15 py-10 lg:py-20">
            <h2 className="text-xl font-semibold mb-4 text-black/70">Recently Uploaded</h2>
            <div className="flex justify-between mb-4">
                <div className="flex flex-wrap gap-3 sm:gap-5">
                    {products.map((category) => (
                        <button
                            key={category.name}
                            className={`px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm cursor-pointer rounded-lg ${activeCategory.name === category.name
                                ? "bg-green text-white shadow"
                                : "bg-black/3 text-black/70"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <Link to="/women" className="md:mt-6 mt-5 text-black/70 rounded-lg self-end text-sm">
                    View More ›
                </Link>
            </div>

            <div ref={productRef} className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 md:gap-3 gap-2">
                {activeCategory.items.slice(0, visibleProducts).map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-black/10 w-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto md:h-80 object-cover rounded-md md:mb-2"
                            />
                            <div className=" md:p-4 p-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-black/70 md:text-lg text-sm">{product.name}</h3>
                                    <Heart className="md:w-5 w-3" />
                                </div>
                                <p className=" text-gray-500 text-xs md:text-sm">{product.brand}</p>
                                <div className="flex justify-between mt-2 md:mt-5 items-center">
                                    <p className="md:text-xl mb-2 md:mb-0 text-sm text-black/70 font-semibold md:mt-2">
                                        ${product.price}
                                    </p>
                                    <p className="hidden md:flex text-green-800/50 text-xs md:mt-2 md:text-sm">{product.location}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentlyUploaded;