import { useEffect, useRef, useState } from "react";
import products from "../utils/products";
import { Link } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { HeartIcon } from "@heroicons/react/24/outline";

import Banner from '../assets/menn.jpg'
import Banner2 from '../assets/man-jacket/menjack6.png'
import Banner3 from '../assets/man-jacket/menjack5.png'
import Banner4 from '../assets/man-tshirt/menshirt2.png'
import Logo from '../assets/tees.png'

import gsap from "gsap";
import { SearchIcon } from "lucide-react";

const categories = ["t-shirt", "dress", "pants", "blazzer", "jacket", "shoes", "sandals"];
const colors = ["Cornflowerblue", "Aquamarine", "Darksalmon", "Mediumseagreen"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const sortOptions = ["Price: Low to High", "Price: High to Low", "Name: A-Z", "Name: Z-A"];

export default function Men() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100);
    const [sortBy, setSortBy] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;

    const banners = [
        { src: Banner, text: "- Men Fashion -" },
        { src: Banner2, text: "- Elegant Style -" },
        { src: Banner3, text: "- Trendy Looks -" },
        { src: Banner4, text: "- Chic & Classy -" }
    ];

    const handleFilterChange = (value, setFilterState) => {
        setFilterState((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
        setCurrentPage(1);
    };

    const handleSizeClick = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    const handleColorClick = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color) ? prev.filter((s) => s !== color) : [...prev, color]
        );
    };

    const removeFilter = (value, setFilterState) => {
        setFilterState((prev) => prev.filter((item) => item !== value));
    };

    const appliedFilters = [
        ...selectedCategories.map((cat) => ({ type: "Category", value: cat, setter: setSelectedCategories })),
        ...selectedColors.map((col) => ({ type: "Color", value: col, setter: setSelectedColors })),
        ...selectedSizes.map((size) => ({ type: "Size", value: size, setter: setSelectedSizes })),
    ];

    const scrollToSection = () => {
        setTimeout(() => {
            const element = document.getElementById("target-section");
            if (element) {
                const navbarHeight = 120; // Sesuaikan dengan tinggi navbar Anda
                const offset = element.offsetTop - navbarHeight;
                window.scrollTo({ top: offset, behavior: "smooth" });
            }
        }, 500); // Delay 500ms, sesuaikan sesuai kebutuhan
    };


    let filteredProducts = products.flatMap(product =>
        product.name === "Men's Fashion" ? product.items.filter(item =>
            (selectedCategories.length > 0 ? selectedCategories.includes(item.categori) : true) &&
            (selectedColors.length > 0 ? selectedColors.includes(item.color) : true) &&
            (selectedSizes.length > 0 ? selectedSizes.includes(item.size) : true) &&
            item.price <= maxPrice
        ) : []
    );


    if (sortBy === "Price: Low to High") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Name: A-Z") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Name: Z-A") {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);
    const [tempPrice, setTempPrice] = useState(maxPrice);

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(imageRef.current, {
                opacity: 0, duration: 1, onComplete: () => {
                    setCurrentIndex((prev) => (prev + 1) % banners.length);
                    gsap.to(imageRef.current, { opacity: 1, duration: 1 });
                }
            });

            gsap.to(textRef.current, {
                opacity: 0, y: 20, duration: 1, onComplete: () => {
                    gsap.set(textRef.current, { y: -20 });
                    gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1 });
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const [isLoading, setIsLoading] = useState(false)
    const loadingRef = useRef(null);
    const dotsRef = useRef([]);
    const spinnerRef = useRef(null);

    useEffect(() => {
        if (isLoading) {
            // Animasi fade-in dan scale-in untuk background loading
            gsap.fromTo(
                loadingRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0, ease: "power3.out" }
            );

            // Animasi titik-titik bergerak
            gsap.to(dotsRef.current, {
                opacity: 1,
                stagger: 0.3,
                repeat: -1,
                yoyo: true,
                duration: 0.6,
                ease: "power3.out",
            });

            const timer = setTimeout(() => {
                gsap.to(loadingRef.current, {
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    onComplete: () => setIsLoading(false),
                });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <section className=" min-h-screen pt-20 md:pt-30">

            {isLoading && (
                <div
                    ref={loadingRef}
                    className="h-screen bg-white/50 backdrop-blur-2xl fixed inset-0 flex justify-center items-center overflow-hidden z-20 pointer-events-none"
                >
                    {/* Tulisan Loading dengan Titik Bergerak */}
                    <img src={Logo} alt="" className="h-5 mr-2" />
                    <p className="text-black flex">
                        <span ref={(el) => (dotsRef.current[0] = el)} className="opacity-0 text-4xl">.</span>
                        <span ref={(el) => (dotsRef.current[1] = el)} className="opacity-0 text-4xl">.</span>
                        <span ref={(el) => (dotsRef.current[2] = el)} className="opacity-0 text-4xl">.</span>
                    </p>
                </div>
            )}

            <div className="lg:px-15 px-3">
                <div className="w-full relative h-70 flex bg-[#000] justify-center items-center text-2xl md:text-5xl font-bold text-white md:px-15 px-5 rounded-lg overflow-hidden">
                    <img ref={imageRef} src={banners[currentIndex].src} alt="" className="absolute w-full h-full object-cover opacity-50" />
                    <p ref={textRef} className="w-full text-center z-10">
                        {banners[currentIndex].text}
                    </p>
                </div>
            </div>
            <div id="target-section" className="flex lg:flex-row flex-col-reverse gap-x-8 px-3 md:px-3 lg:px-15 mb-8 mt-8 min-h-screen">
                <aside className="flex flex-col gap-y-6 lg:w-1/5 bg-white h-full md:sticky md:-top-57 md:overflow-visible text-black/70 w-full scrollbar-hidden border border-black/20 rounded-lg p-5 shadow-lg">
                    <div>
                        <div className="flex items-center gap-2 flex-wrap mb-8 md:w-full">
                            <div className="flex flex-col gap-y-2 md:w-full">
                                <p className="text-sm text-black/70 font-medium mb-1">Applied Filters:</p>
                                <div className="flex flex-wrap gap-x-2 md:grid md:grid-cols-1 md:gap-y-2 md:w-full">
                                    {appliedFilters.length > 0 ? (
                                        appliedFilters.map(({ type, value, setter }) => (
                                            <span key={value} className="flex md:w-full justify-between items-center bg-white text-black/70 border border-black/20 px-3 py-1 rounded-md text-xs">
                                                {type}: {value}
                                                <button
                                                    onClick={() => [removeFilter(value, setter), setIsLoading(true), scrollToSection(true)]}
                                                    className=" text-black text-xs font-semibold ml-2 cursor-pointer"
                                                >
                                                    X
                                                </button>
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-sm text-black/40">None</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <label className="block text-sm font-medium">Category</label>
                        {categories.map((category) => (
                            <div key={category} className="flex items-center gap-3 py-5 border-b border-b-black/15">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleFilterChange(category, setSelectedCategories)}
                                    className="w-4 h-4 cursor-pointer"
                                    onClick={() => [scrollToSection(true), setIsLoading(true)]}
                                />
                                <label className="text-xs">{category}</label>
                            </div>

                        ))}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Color</label>
                        <div className="flex flex-wrap gap-2 py-2">
                            {colors.map((color) => (
                                <div className={`w-9 h-9 border flex justify-center items-center rounded-full transition-all 
                                    ${selectedColors.includes(color) ? "border-black/40 border-3" : "border-none"}`}>
                                    <button
                                        key={color}
                                        onClick={() => [handleColorClick(color), scrollToSection(true), setIsLoading(true)]}
                                        className={`w-8 h-8 rounded-full transition-all cursor-pointer 
                                ${selectedColors.includes(color) ? " scale-70" : ""}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                        <div className="flex flex-wrap gap-2 py-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => [handleSizeClick(size), scrollToSection(true), setIsLoading(true)]}
                                    className={`px-4 py-2 border cursor-pointer rounded-md text-xs font-medium transition-all
                            ${selectedSizes.includes(size)
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-black border-gray-400 hover:border-black"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Max Price: ${tempPrice}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={tempPrice}
                            onChange={(e) => setTempPrice(e.target.value)}
                            onMouseUp={() => [setMaxPrice(tempPrice), scrollToSection(true), setIsLoading(true)]}
                            onTouchEnd={() => setMaxPrice(tempPrice)}
                            className="w-full appearance-none h-2 rounded-lg outline-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, black ${tempPrice}%, #e5e7eb ${tempPrice}%)`,
                            }}
                        />
                        <style jsx>{`
                                    input[type="range"]::-webkit-slider-thumb {
                                        -webkit-appearance: none;
                                        appearance: none;
                                        width: 16px;
                                        height: 16px;
                                        background: black;
                                        border-radius: 50%;
                                        cursor: pointer;
                                    }
                                    
                                    input[type="range"]::-moz-range-thumb {
                                        width: 16px;
                                        height: 16px;
                                        background: black;
                                        border-radius: 50%;
                                        cursor: pointer;
                                    }
                                `}
                        </style>
                    </div>


                </aside>
                <main className="lg:w-4/5 w-full relative">
                    <div className="flex flex-col gap-y-7 w-full text-black/70 text-sm">
                        <div className="flex gap-x-3">
                            <Link to="/" className="hover:text-black hover:font-semibold">Home</Link>
                            <p>›</p>
                            <p className="font-semibold flex gap-x-1 items-center">Men <FaShop /></p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-sm text-black/70 ">Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} results.</h2>
                            <div className="relative">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-fit text-sm cursor-pointer"
                                >
                                    {sortBy || "Sort By"} {""}▾
                                </button>
                                {isOpen && (
                                    <div className="absolute w-40 p-2 top-7 right-0 border border-black/15 rounded-xl bg-white shadow-2xl z-10 cursor-pointer">
                                        {sortOptions.map((option) => (
                                            <p
                                                key={option}
                                                onClick={() => {
                                                    setSortBy(option);
                                                    setIsOpen(false);
                                                }}
                                                className="p-2 hover:text-black text-black/70 cursor-pointer text-sm"
                                            >
                                                {option}
                                            </p>
                                        ))}
                                        <p className="p-2 hover:text-black text-black/70 cursor-pointer text-sm" onClick={() => {
                                            setSortBy(""), setIsOpen(false)
                                        }}>All</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 mt-5">
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-2xl shadow-lg border border-black/10 overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-auto lg:h-72 object-cover"
                                        />
                                        {/* Icon Search */}
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white to-50% backdrop-blur-md">
                                            <SearchIcon className="w-10 h-10 text-black/70 bg-white/80 rounded-full p-2 shadow-md" />
                                        </div>
                                    </div>
                                    <div className="md:p-5 p-2">
                                        <div className=" flex justify-between">
                                            <h3 className="font-semibold text-black/70 text-sm md:text-base">{product.name}</h3>
                                            <HeartIcon className="md:w-5 w-3 text-black/70" />
                                        </div>
                                        <p className="text-gray-500 md:text-sm text-xs capitalize">{product.categori}</p>
                                        <div className="flex justify-between mt-5 items-center">
                                            <p className="md:text-xl text-sm text-black/70 font-semibold">${product.price}</p>
                                            <p className="text-green-800/50 text-[10px] md:text-sm">{product.location}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center my-10 border border-black/15 shadow-2xl rounded-md w-fit mx-auto p-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => [setCurrentPage(i + 1), scrollToSection(true), setIsLoading(true)]}
                                className={` px-3 rounded ${currentPage === i + 1 ? "bg-[#fafafa] text-black" : " text-black/30"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}