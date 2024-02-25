import { nanoid } from "nanoid"
import bestseller1 from "/public/imgs/bestseller1.png"
import bestseller2 from "/public/imgs/bestseller2.png"
import bestseller3 from "/public/imgs/bestseller3.png"

import service1 from "/public/icons/service1.svg"
import service2 from "/public/icons/service2.svg"
import service3 from "/public/icons/service3.svg"
import service4 from "/public/icons/service4.svg"

import blogs1 from "/public/imgs/blogs1.png"
import blogs2 from "/public/imgs/blogs2.png"
import blogs3 from "/public/imgs/blogs3.png"
import blogs4 from "/public/imgs/blogs4.png"

import social1 from "/public/imgs/social1.png"
import social2 from "/public/imgs/social2.png"
import social3 from "/public/imgs/social3.png"
import social4 from "/public/imgs/social4.png"
import social5 from "/public/imgs/social5.png"
import social6 from "/public/imgs/social6.png"
import social7 from "/public/imgs/social7.png"

export const headerData = [
    {
        name: "Products",
        id: nanoid(),
        path: "/",
    },
    {
        name: "Brand",
        id: nanoid(),
        path: "/",
    },
    {
        name: "About Us",
        id: nanoid(),
        path: "/",
    },
    {
        name: "FAQ",
        id: nanoid(),
        path: "/",
    },
    {
        name: "Contact",
        id: nanoid(),
        path: "/",
    },
    {
        name: "Where to buy ",
        id: nanoid(),
        path: "/",
    },
]

export const headerSelectorData = [
    {
        name: "En",
        option: "English",
        id: nanoid(),
    },
    {
        name: "Ru",
        option: "Russian",
        id: nanoid(),
    },
    {
        name: "Uz",
        option: "Uzbek",
        id: nanoid(),
    },

]

export const heroData = [
    {
        name: "Discover summer promotions",
        text: "Free sample and free shipping when you spend $50",
        btn1: "Skincare",
        btn2: "Shop All",
        id: nanoid(),
    }
]

export const bestSellerData = [
    {
        img: bestseller1,
        name: "Facial Balancing Gel",
        price: "$45.00-$99.00",
        id: nanoid(),
    },
    {
        img: bestseller2,
        name: "Post-Shave Lotion",
        price: "$54.00",
        id: nanoid(),
    },
    {
        img: bestseller3,
        name: "Facial Balancing Gel",
        price: "$25.00",
        id: nanoid(),
    },
    {
        img: bestseller2,
        name: "Post-Shave Lotion",
        price: "$54.00",
        id: nanoid(),
    },
]

export const serviceData = [
    {
        icon: service1,
        name: "Ethical business",
        text: "Only green beauty products.",
        id: nanoid(),
    },
    {
        icon: service2,
        name: "Shipped free & with love",
        text: "On orders abouve $50.",
        id: nanoid(),
    },
    {
        icon: service3,
        name: "Delivered in 1-3 days",
        text: "And packaged with love.",
        id: nanoid(),
    },
    {
        icon: service4,
        name: "Personalized experience",
        text: "Free consultations via email.",
        id: nanoid(),
    },

]

export const blogsData = [
    {
        img: blogs1,
        name: "Some beaty secrets from our editor in chief",
        price: "Beauty May 2, 2021",
        id: nanoid(),
    },
    {
        img: blogs2,
        name: "Morning beauty routine: our main rules",
        price: "Fragrance May 2, 2021",
        id: nanoid(),
    },
    {
        img: blogs3,
        name: "Organic ingredients: do they even work?",
        price: "Beauty May 2, 2021",
        id: nanoid(),
    },
    {
        img: blogs4,
        name: "The best cosmetic products",
        price: "Makeup May 2, 2021",
        id: nanoid(),
    },

]

export const socialData = [
    {
        img1: social1,
        img2: social2,
        img3: social3,
        img4: social4,
        img5: social5,
        img6: social6,
        img7: social7,
        id: nanoid(),
    },
]

export const footerAboutData = [
    {
        link: "Finde",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Brand",
        id: nanoid(),
        path:"/",
    },
    {
        link: "About Us",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Contact",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Where to buy",
        id: nanoid(),
        path:"/",
    },
]
export const footerHelpData = [
    {
        link: "Shipping & Returns",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Track Order",
        id: nanoid(),
        path:"/",
    },
    {
        link: "FAQ",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Terms & Conditions",
        id: nanoid(),
        path:"/",
    },
    {
        link: "Privacy Policy",
        id: nanoid(),
        path:"/",
    },
]