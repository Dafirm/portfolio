import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import countries from "./assets/countries.png";
import Shopping from "./assets/shopping.png";
import unsplash from "./assets/unsplash.png";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    image: countries,
    url: "https://dafirm-countries-app.vercel.app/",
    github: "https://github.com/Dafirm/countriesapp",
    title: "About Countries",
    text: "This app provides essential information about all countries and is built using key development techniques, including search functionality, JSON API integration, dropdown selection, efficient state management, and a theme toggle for an enhanced user experience.",
  },
  {
    id: nanoid(),
    image: Shopping,
    url: "https://shopping-cart-three-lac.vercel.app/store",
    github: "https://github.com/Dafirm/ShoppingCart",
    title: "Shopping Gadgets",
    text: "A fully functional shopping app with features to add, remove, and adjust product quantities. Designed with a user-friendly interface for a seamless shopping experience.",
  },
  {
    id: nanoid(),
    image: unsplash,
    url: "https://tempsearch.netlify.app/",
    github: "https://github.com/Dafirm/temp-vite-images",
    title: "Image search",
    text: "An image search app that lets you find any image, powered by a rich API. Designed to be user-friendly, responsive, and built with efficient state management for a smooth experience.",
  },
];
