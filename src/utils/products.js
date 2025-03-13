import Img1 from '../assets/Imagesrecently1.png';
import Img2 from '../assets/Imagesrecently2.png';
import Img3 from '../assets/Imagesrecently3.png';
import Img4 from '../assets/Imagesrecently4.png';
import Img5 from '../assets/Imagesrecently5.png';
import Img6 from '../assets/Imagesrecently6.png';

import Img7 from '../assets/man-tshirt/menshirt1.png';
import Img8 from '../assets/man-tshirt/menshirt2.png';
import Img9 from '../assets/man-tshirt/menshirt3.png';
import Img10 from '../assets/man-tshirt/menshirt4.png';
import Img11 from '../assets/man-tshirt/menshirt5.png';
import Img12 from '../assets/man-tshirt/meshirt6.png';

import Img13 from '../assets/man-jacket/menjack.png';
import Img14 from '../assets/man-jacket/menjack2.png';
import Img15 from '../assets/man-jacket/menjack3.png';
import Img16 from '../assets/man-jacket/menjack4.png';
import Img17 from '../assets/man-jacket/menjack5.png';
import Img18 from '../assets/man-jacket/menjack6.png';

import Img19 from '../assets/man-blazzer/blazzer.png';
import Img20 from '../assets/man-blazzer/blazzer2.png';
import Img21 from '../assets/man-blazzer/blazzer3.png';

import Img22 from '../assets/woman-dress/womendress.png';
import Img23 from '../assets/woman-dress/womendress2.png';
import Img24 from '../assets/woman-dress/womendress3.png';
import Img25 from '../assets/woman-dress/womendress4.png';
import Img26 from '../assets/woman-dress/womendress5.png';
import Img27 from '../assets/woman-dress/womendress6.png';

import Img28 from '../assets/women-jacket/womenjacket.png';
import Img29 from '../assets/women-jacket/womenjacket2.png';
import Img30 from '../assets/women-jacket/womenjacket3.png';
import Img31 from '../assets/women-jacket/womenjacket4.png';
import Img32 from '../assets/women-jacket/womenjacket5.png';
import Img33 from '../assets/women-jacket/womenjacket6.png';

import Img34 from '../assets/women-blazzer/womenblazzer.png';
import Img35 from '../assets/women-blazzer/womenblazzer2.png';
import Img36 from '../assets/women-blazzer/womenblazzer3.png';
import Img37 from '../assets/women-blazzer/womenblazzer4.png';
import Img38 from '../assets/women-blazzer/womenblazzer5.png';
import Img39 from '../assets/women-blazzer/womenblazzer6.png';


const products = [
    {
        name: "Women's Fashion", items: [
            {
                id: 1, name: "Casual Shirt", brand: "Brand A", price: 10.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Cornflowerblue", status: "Pending", size: "L", categori: "t-shirt", image: Img1, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img22
                }
            },
            {
                id: 2, name: "Formal Shirt", brand: "Brand B", price: 80.25, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "XL", categori: "dress", image: Img2, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img23
                }
            },
            {
                id: 3, name: "Modern Shirt", brand: "Brand C", price: 35.20, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "XXL", categori: "sandals", image: Img3, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img24
                }
            },
            {
                id: 4, name: "Vintage Shirt", brand: "Brand D", price: 22.34, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "M", categori: "shoes", image: Img4, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img25
                }
            },
            {
                id: 5, name: "Colorize Shirt", brand: "Brand E", price: 12.25, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Pending", size: "S", categori: "jacket", image: Img5, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img26
                }
            },
            {
                id: 6, name: "Keyach Shirt", brand: "Brand F", price: 40.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "M", categori: "blazzer", image: Img6, offeredProduct: {
                    name: 'T-shirt B',
                    brand: 'Brand B',
                    price: 800,
                    image: Img27
                }
            },

            { id: 7, name: "Beach Dress", brand: "Brand A", price: 18.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "dress", image: Img22 },
            { id: 8, name: "Lingch Dress", brand: "Brand A", price: 79.43, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "dress", image: Img23 },
            { id: 9, name: "Sweet Dress", brand: "Brand A", price: 90.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "dress", image: Img24 },
            { id: 10, name: "Forest Dress", brand: "Brand A", price: 99.65, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "dress", image: Img25 },
            { id: 11, name: "Beauty Dress", brand: "Brand A", price: 12.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "dress", image: Img26 },
            { id: 12, name: "Cook Dress", brand: "Brand A", price: 78.00, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "dress", image: Img27 },

            { id: 13, name: "Play Jacket", brand: "Brand A", price: 20.45, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img28 },
            { id: 14, name: "Lala Jacket", brand: "Brand A", price: 14.76, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img29 },
            { id: 15, name: "Noir Jacket", brand: "Brand A", price: 46.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img30 },
            { id: 16, name: "Chuko Jacket", brand: "Brand A", price: 44.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img31 },
            { id: 17, name: "Avatar Jacket", brand: "Brand A", price: 33.66, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img32 },
            { id: 18, name: "Enoc Jacket", brand: "Brand A", price: 22.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Pending", size: "Medium", categori: "jacket", image: Img33 },

           
        ]
    },
    {
        name: "Men's Fashion", items: [
            { id: 19, name: "Bald Shirt", brand: "Brand A", price: 98.23, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img7 },
            { id: 20, name: "Smriw Shirt", brand: "Brand B", price: 32.14, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img8 },
            { id: 21, name: "Ahka Shirt", brand: "Brand C", price: 65.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img9 },
            { id: 22, name: "Boxy Shirt", brand: "Brand D", price: 53.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Cornflowerblue", status: "Pending", size: "Medium", categori: "t-shirt", image: Img10 },
            { id: 23, name: "Choky Shirt", brand: "Brand A", price: 55.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Cornflowerblue", status: "Completed", size: "Medium", categori: "t-shirt", image: Img11 },
            { id: 24, name: "Tester Shirt", brand: "Brand A", price: 65.44, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "Medium", categori: "t-shirt", image: Img12 },

            { id: 25, name: "Whole Jacket", brand: "Brand A", price: 34.45, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "Medium", categori: "jacket", image: Img13 },
            { id: 26, name: "Big Jacket", brand: "Brand A", price: 10.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "Medium", categori: "jacket", image: Img14 },
            { id: 27, name: "Wim Jacket", brand: "Brand A", price: 22.56, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "Medium", categori: "jacket", image: Img15 },
            { id: 28, name: "Xond Jacket", brand: "Brand A", price: 22.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img16 },
            { id: 29, name: "Sako Jacket", brand: "Brand A", price: 87.88, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img17 },
            { id: 30, name: "Bai Jacket", brand: "Brand A", price: 44.21, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img18 },

            { id: 31, name: "Casual Blazzer", brand: "Brand A", price: 22.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img19 },
            { id: 32, name: "Formal Blazzer", brand: "Brand A", price: 87.88, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img20 },
            { id: 33, name: "Aka Blazzer", brand: "Brand A", price: 44.21, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Aquamarine", status: "Completed", size: "Medium", categori: "jacket", image: Img21 },
        ]
    },
    {
        name: "Kid's Fashion", items: [
            { id: 34, name: "Bald Shirt", brand: "Brand A", price: 98.23, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img34 },
            { id: 35, name: "Smriw Shirt", brand: "Brand B", price: 32.14, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img35 },
            { id: 36, name: "Ahka Shirt", brand: "Brand C", price: 65.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Darksalmon", status: "Pending", size: "Medium", categori: "t-shirt", image: Img36 },
            { id: 37, name: "Boxy Shirt", brand: "Brand D", price: 53.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Cornflowerblue", status: "Pending", size: "Medium", categori: "t-shirt", image: Img37 },
            { id: 38, name: "Choky Shirt", brand: "Brand A", price: 55.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Cornflowerblue", status: "Completed", size: "Medium", categori: "t-shirt", image: Img38 },
            { id: 39, name: "Tester Shirt", brand: "Brand A", price: 65.44, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Mediumseagreen", status: "Completed", size: "Medium", categori: "t-shirt", image: Img39 },
        ]
    }
];

export default products;
