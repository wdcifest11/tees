import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import InfiniteScrollText from "./InfiniteScrollText";
import { FaSadTear, FaSearch } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import products from "../utils/products";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";

import Logo from '../assets/tees.png'
import Img1 from '../assets/Imagesrecently1.png'
import Img2 from '../assets/Imagesrecently2.png'

import Img3 from '../assets/man-jacket/menjack.png'
import Img4 from '../assets/man-jacket/menjack2.png'

import Img5 from '../assets/women-blazzer/womenblazzer.png'
import Img6 from '../assets/women-blazzer/womenblazzer2.png'


import { List, ShoppingBag, Store, User, X } from "lucide-react";
import SignInUp from "../accountpages/SignInUp";

export default function Navbar() {
    const [searchDropDown, setsearchDropDown] = useState(false);
    const [menDropDown, setMenDropDown] = useState(false);
    const [womenDropDown, setWomenDropDown] = useState(false);
    const [kidDropDown, setKidDropDown] = useState(false);
    const searchdropdownRef = useRef(null);
    const menDropDownRef = useRef(null);
    const womenDropDownRef = useRef(null);
    const kidDropDownRef = useRef(null);

    const [showBlur, setShowBlur] = useState(false);
    const blurRef = useRef(null);

    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState("");

    const allProducts = products.flatMap(category => category.items);

    const filteredProducts = allProducts.filter((product) =>
        product.categori.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // KidDRRopdown
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.killTweensOf(kidDropDownRef.current); // Hentikan animasi sebelumnya agar tidak bentrok

            if (kidDropDown) {
                gsap.set(kidDropDownRef.current, { display: "block" }); // Pastikan elemen muncul sebelum animasi

                gsap.to(kidDropDownRef.current, {
                    height: "auto",
                    autoAlpha: 1, // Menampilkan container
                    duration: 0.5,
                    ease: "power3.out"
                });

                gsap.fromTo(
                    kidDropDownRef.current.querySelectorAll("div, img, a, h2"),
                    { opacity: 0, y: -5 },
                    { opacity: 1, y: 0, duration: 0.3, delay: 0.2, stagger: 0.05, ease: "power3.out" }
                );
            } else {
                // **Langsung sembunyikan container sebelum animasi anak-anak berjalan**
                gsap.set(kidDropDownRef.current, { autoAlpha: 0, display: "none" });

                // **Animasi tetap berjalan, tapi container sudah hilang lebih dulu**
                gsap.to(kidDropDownRef.current.querySelectorAll("div, img, p, h2"), {
                    opacity: 0,
                    y: -5,
                    duration: 0.1,
                    stagger: 0.04,
                    ease: "power3.out"
                });
            }
        })

        return () => ctx.revert();
    }, [kidDropDown]);

    // WomenDropDown
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.killTweensOf(womenDropDownRef.current); // Hentikan animasi sebelumnya agar tidak bentrok

            if (womenDropDown) {
                gsap.set(womenDropDownRef.current, { display: "block" }); // Pastikan elemen muncul sebelum animasi

                gsap.to(womenDropDownRef.current, {
                    height: "auto",
                    autoAlpha: 1, // Menampilkan container
                    duration: 0.5,
                    ease: "power3.out"
                });

                gsap.fromTo(
                    womenDropDownRef.current.querySelectorAll("div, img, a, h2"),
                    { opacity: 0, y: -5 },
                    { opacity: 1, y: 0, duration: 0.3, delay: 0.2, stagger: 0.05, ease: "power3.out" }
                );
            } else {
                // **Langsung sembunyikan container sebelum animasi anak-anak berjalan**
                gsap.set(womenDropDownRef.current, { autoAlpha: 0, display: "none" });

                // **Animasi tetap berjalan, tapi container sudah hilang lebih dulu**
                gsap.to(womenDropDownRef.current.querySelectorAll("div, img, p, h2"), {
                    opacity: 0,
                    y: -5,
                    duration: 0.1,
                    stagger: 0.04,
                    ease: "power3.out"
                });
            }
        })

        return () => ctx.revert();
    }, [womenDropDown]);

    // MenDropDown
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.killTweensOf(menDropDownRef.current); // Hentikan animasi sebelumnya agar tidak bentrok

            if (menDropDown) {
                gsap.set(menDropDownRef.current, { display: "block" }); // Pastikan elemen muncul sebelum animasi

                gsap.to(menDropDownRef.current, {
                    height: "auto",
                    autoAlpha: 1, // Menampilkan container
                    duration: 0.5,
                    ease: "power3.out"
                });

                gsap.fromTo(
                    menDropDownRef.current.querySelectorAll("div, img, a, h2"),
                    { opacity: 0, y: -5 },
                    { opacity: 1, y: 0, duration: 0.3, delay: 0.2, stagger: 0.05, ease: "power3.out" }
                );
            } else {
                // **Langsung sembunyikan container sebelum animasi anak-anak berjalan**
                gsap.set(menDropDownRef.current, { autoAlpha: 0, display: "none" });

                // **Animasi tetap berjalan, tapi container sudah hilang lebih dulu**
                gsap.to(menDropDownRef.current.querySelectorAll("div, img, p, h2"), {
                    opacity: 0,
                    y: -5,
                    duration: 0.1,
                    stagger: 0.04,
                    ease: "power3.out"
                });
            }
        })

        return () => ctx.revert();
    }, [menDropDown]);

    // Seacrh DropDown
    useEffect(() => {
        if (searchDropDown) {
            gsap.to(searchdropdownRef.current, {
                height: "70vh",
                visibility: "visible",
                duration: 2,
                ease: "power3.out"
            });

            gsap.fromTo(
                searchdropdownRef.current.children,
                { opacity: 0, y: -5 },
                { opacity: 1, y: 0, duration: 0.3, delay: 0.2, stagger: 0.01, ease: "power3.out" }
            );
        } else {
            gsap.to(searchdropdownRef.current, {
                height: "0vh",
                duration: 2,
                ease: "power3.out",
                onComplete: () => {
                    gsap.set(searchdropdownRef.current, { visibility: "hidden" }); // Visibility diubah setelah animasi selesai
                }
            });

            gsap.fromTo(
                searchdropdownRef.current.children,
                { opacity: 0, y: 0 },
                { opacity: 0, y: -5, duration: 0.1, stagger: 0.04, ease: "power3.out" }
            );
        }
    }, [searchDropDown]);

    useEffect(() => {
        if (showSearch) {
            gsap.fromTo(
                searchRef.current,
                { width: "0px", height: "0px" },
                { width: "150px", height: "30px", duration: 2, ease: "power3.out" }
            );
        } else {
            gsap.to(searchRef.current, { width: "0px", height: "0px", duration: 2, ease: "power3.out" });
        }
    }, [showSearch]);

    useEffect(() => {
        if (showBlur) {
            gsap.fromTo(
                blurRef.current,
                { opacity: 0, backdropFilter: "blur(0px)" },
                { opacity: 1, backdropFilter: "blur(10px)", duration: 0.5, ease: "power2.out" }
            );
        } else {
            gsap.to(blurRef.current, { opacity: 0, backdropFilter: "blur(0px)", duration: 0.5, ease: "power2.in" });
        }
    }, [showBlur]);

    //Navbar Mobile
    const [isMobile, setIsMobile] = useState(false)

    //Signsignup
    const [openLogin, setOpenLogin] = useState(false);


    return (
        <header className="relative w-full z-50 bg-blue-300 h-full">
            <nav className="text-black fixed w-full bg-white h-20 md:h-30 flex flex-col items-center">
                <InfiniteScrollText />

                {/* WomenDROPdown */}
                <div
                    ref={womenDropDownRef}
                    className="absolute w-full bg-white text-black/50 overflow-hidden z-50 pt-20 md:pt-30 lg:px-15 px-5"
                    style={{ height: 0, visibility: "hidden" }}
                    onMouseLeave={() => [setWomenDropDown(false), setKidDropDown(false), setMenDropDown(false), setShowBlur(false)]}
                >
                    <div className="h-full flex items-center justify-center pb-10 pt-10">
                        <div className="w-full h-full flex gap-x-20">
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Clothing</h2>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">T-shirt</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Blazzer</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Jacket</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Dress</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Pants</Link>
                            </div>
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Accessories</h2>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Shoes</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Sandals</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Bracelet</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Liontin</Link>
                                <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]} className="hover:text-black">Ring</Link>
                            </div>
                            <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img1} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Casual T-shirt</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/women" onClick={() => [setWomenDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img2} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Dress Winter</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* MenDropDOwn */}
                <div
                    ref={menDropDownRef}
                    className="absolute w-full bg-white text-black/50 overflow-hidden z-50 pt-20 md:pt-30 lg:px-15 px-5"
                    style={{ height: 0, visibility: "hidden" }}
                    onMouseLeave={() => [setWomenDropDown(false), setKidDropDown(false), setMenDropDown(false), setShowBlur(false)]}
                >
                    <div className="h-full flex items-center justify-center pb-10 pt-10">
                        <div className="w-full h-full flex gap-x-20">
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Clothing</h2>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">T-shirt</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Blazzer</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Jacket</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Pants</Link>
                            </div>
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Accessories</h2>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Shoes</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Sandals</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Bracelet</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Liontin</Link>
                                <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]} className="hover:text-black">Ring</Link>
                            </div>
                            <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img3} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Casual Jacket</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/men" onClick={() => [setMenDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img4} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Jacket Winter</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* KidDropdownn */}
                <div
                    ref={kidDropDownRef}
                    className="absolute w-full bg-white text-black/50 overflow-hidden z-50 pt-20 md:pt-30 lg:px-15 px-5"
                    style={{ height: 0, visibility: "hidden" }}
                    onMouseLeave={() => [setWomenDropDown(false), setKidDropDown(false), setMenDropDown(false), setShowBlur(false)]}
                >
                    <div className="h-full flex items-center justify-center pb-10 pt-10">
                        <div className="w-full h-full flex gap-x-20">
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Clothing</h2>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">T-shirt</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Blazzer</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Jacket</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Dress</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Pants</Link>
                            </div>
                            <div className="text-black/70 text-sm flex flex-col gap-y-3">
                                <h2 className="font-semibold text-lg">Accessories</h2>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Shoes</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Sandals</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Bracelet</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Liontin</Link>
                                <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]} className="hover:text-black">Ring</Link>
                            </div>
                            <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img5} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Blazzer Kid</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/kid" onClick={() => [setKidDropDown(false), setShowBlur(false)]}>
                                <div className="flex flex-wrap gap-x-2 h-40">
                                    <img src={Img6} alt="" className="h-auto max-h-40 object-cover hover:shadow-lg hover:transition-all hover:duration-300" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold hover:text-black hover:transition-all hover:duration-300">Dress Blazzer</p>
                                        <p>Popular Second</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Search DropDown */}
                <div
                    ref={searchdropdownRef}
                    className="absolute w-full bg-white text-black/50 overflow-hidden z-50 pt-20 md:pt-30 lg:px-15 px-5"
                    style={{ height: "0vh", visibility: "hidden" }}
                >
                    <div className="pb-8 pt-5 h-full">
                        <div className="bg-white h-full overflow-y-auto w-full">
                            {filteredProducts.length > 0 ? (
                                <div className="flex flex-col h-full justify-between items-center">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                                        {filteredProducts.map((product) => (
                                            <Link onClick={() => [setShowSearch(false), setsearchDropDown(false)]} to={`/product/${product.id}`} key={product.id} className="block">
                                                <div className="flex items-center gap-4 hover:bg-[#fafafa] transition">
                                                    <img src={product.image} alt="" className="h-20" />
                                                    <div>
                                                        <h2 className="text-sm text-black/70">{product.name}</h2>
                                                        <p className="text-sm text-black/70">{product.categori}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                    <div className="flex gap-x-2 text-sm text-black/70 mt-8">
                                        <p className="">See all product?</p>
                                        <Link onClick={() => [setShowSearch(false), setsearchDropDown(false)]} to="/women" className="font-semibold flex gap-x-1 items-center">Go to shop <FaShop /></Link>
                                    </div>

                                </div>
                            ) : (
                                <div className="h-full w-full flex justify-center items-center text-center text-black/70 text-xl gap-x-2">
                                    <p className="">No products found</p>
                                    <FaSadTear className="text-2xl" />
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="bg-white z-[9999999] w-full items-center justify-center flex h-20">
                    <div className="flex justify-between items-center gap-x-4 text-sm z-50 w-full px-3 lg:px-15">
                        <div className="flex gap-x-6 items-center">
                            <Link onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} to="/"><img src={Logo} className="h-6" /></Link>
                            <ul className="hidden lg:flex space-x-6 z-50">
                                <li className="relative cursor-default">
                                    <p onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setMenDropDown(true), setWomenDropDown(false), setKidDropDown(false), setShowBlur(true)]} className="hover:text-black text-black/50">Men</p>
                                </li>
                                <li className="relative cursor-default">
                                    <p onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setMenDropDown(false), setWomenDropDown(true), setKidDropDown(false), setShowBlur(true)]} className="hover:text-black text-black/50">Women</p>
                                </li>
                                <li className="relative cursor-default">
                                    <p onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(true), setShowBlur(true)]} className="hover:text-black text-black/50">Kids</p>
                                </li>
                                <li><Link to="/about" onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className="hover:text-black text-black/50">About</Link></li>
                                <li><Link to="/tips" onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className="hover:text-black text-black/50">Tips & Tricks</Link></li>
                            </ul>
                        </div>
                        <div className="flex lg:hidden w-full gap-x-2 items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="text-black py-1 bg-transparent border border-black/70 rounded-lg outline-none w-full pl-3"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="text-black/70" />
                        </div>

                        <div className="flex justify-center items-center gap-x-7">

                            {/* Search */}
                            <div className="hidden lg:flex items-center justify-center gap-x-2">
                                <div
                                    ref={searchRef}
                                    className="overflow-hidden bg-white border border-black/70 rounded-2xl flex items-center"
                                    style={{ width: "0px", height: "0px" }}
                                >
                                    <input
                                        type="text"
                                        className="text-black bg-transparent outline-none w-full pl-3"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                </div>
                                <div className="text-black/50 cursor-pointer" onMouseEnter={() => [setShowSearch(true), setShowBlur(true), setsearchDropDown(true), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]}>
                                    <FaSearch />
                                </div>

                            </div>

                            <Link to="/sell" onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className=" hidden lg:flex text-white cursor-pointer bg-[#3D9970] p-2 text-sm rounded-lg px-3 hover:bg-green-800/80">Sell Now!</Link>

                            <Link to="/cart" onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className="text-black/50 text-base hidden lg:flex cursor-pointer hover:text-black">
                                <ShoppingBagIcon className="w-5" />
                            </Link>

                            <div onMouseEnter={() => [setShowSearch(false), setsearchDropDown(false), setShowBlur(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className="text-black/50 text-base hidden lg:flex cursor-pointer hover:text-black">
                                <UserIcon onClick={() => setOpenLogin(true)} className="w-5" />
                            </div>

                        </div>


                    </div>
                </div>
                {showBlur && (
                    <div
                        ref={blurRef}
                        style={{ backdropFilter: "blur(0px)", opacity: 0 }}
                        onMouseEnter={() => [setShowBlur(false), setShowSearch(false), setsearchDropDown(false), setMenDropDown(false), setWomenDropDown(false), setKidDropDown(false)]} className="h-screen w-screen bg-white/30 fixed inset-0 z-10 backdrop-blur-md">
                    </div>
                )}
            </nav>
            <nav className="lg:hidden fixed bottom-0 z-[99999]  bg-white w-full px-5">
                <div className="flex justify-between max-w-2xl items-center text-xs text-black/70 h-18 mx-auto">
                    <div onClick={() => setIsMobile((prev) => !prev)} className="flex flex-col items-center gap-y-2">
                        <List className="w-5 h-5" />
                        <p>Menu</p>
                    </div>
                    <Link to="/sell">
                        <div onClick={() => setIsMobile(false)} className="flex flex-col items-center gap-y-2">
                            <Store className="w-5 h-5" />
                            <p>Sell Now</p>
                        </div>
                    </Link>

                    <Link to="/cart">
                        <div onClick={() => setIsMobile(false)} className="flex flex-col items-center gap-y-2">
                            <ShoppingBag className="w-5 h-5" />
                            <p>Cart</p>
                        </div>
                    </Link>

                    <div onClick={() => [setIsMobile(false), setOpenLogin(true)]} className="flex flex-col items-center gap-y-2">
                        <User className="w-5 h-5" />
                        <p>Account</p>
                    </div>

                </div>
            </nav>
            {isMobile && (
                <div className="fixed lg:hidden pb-18 top-20 md:top-30 h-full bg-black/40 backdrop-blur-2xl left-0 z-[99] w-full text-sm">
                    <div className="h-full w-3/4 max-w-sm pb-32 bg-white text-black/70 p-5 overflow-y-auto">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="font-semibold text-lg mb-4">Menu</h2>
                                <X onClick={() => setIsMobile(false)} className="w-6" />
                            </div>
                            <div className="h-full flex flex-col gap-y-8 text-base">
                                <div className="flex flex-col gap-y-4">
                                    <Link onClick={() => setIsMobile(false)} to="/men">Men</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/women">Women</Link>
                                    <Link onClick={() => setIsMobile(false)} to="kid">Kids</Link>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <Link onClick={() => setIsMobile(false)} to="/women">T-shirt</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/women">Sandals</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/women">Shoes</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/women">Jacket</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/women">Blazzer</Link>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="flex gap-2 flex-wrap">
                                        <p className="font-semibold">Popular Fashion</p>
                                        <p className=" animate-pulse">swipe right ›</p>
                                    </div>
                                    <div className="flex gap-x-1 overflow-auto max-w-sm scrollbar-hidden">
                                        <img src={Img1} alt="" className="w-auto" />
                                        <img src={Img2} alt="" className="w-auto" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <Link onClick={() => setIsMobile(false)} to="/about" className="text-lg font-semibold">About</Link>
                                    <Link onClick={() => setIsMobile(false)} to="/tips" className="text-lg font-semibold">Tips & Trick</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <SignInUp openLogin={openLogin} closeLogin={() => setOpenLogin(false)} />

        </header>
    );
}
