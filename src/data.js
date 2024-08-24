import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import {spotifyThumbnail, memorygameThumbnail, ui_ux_design, ecommerce} from "./images"
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]



export const projects = [
  {
    id:1,
    title: 'BuyBazaar',
    image: ecommerce,
    category: "Web",
    data: {
      description: `BuyBazaar is an innovative e-commerce platform built with the MERN stack. It provides a modern, user-friendly shopping experience, allowing users to browse a wide range of products, securely add items to their cart, and checkout with ease. The app leverages React for a dynamic frontend, Express and Node.js for smooth backend operations, and MongoDB for reliable data management. Enjoy personalized recommendations, secure payment gateways, and a seamless interface designed for accessibility and convenience.`,
      demoLink: "https://buy-bazaar.onrender.com/",
    },
    stack: [
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "cyan",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      }
    ]
  },
  
  {
    id:2,
    title: 'Sing With Me',
    image: spotifyThumbnail,
    category:"Web",
    data:{
      description:`Experience the joy of music at your fingertips with our innovative Sing with Me web application. Seamlessly explore and play your favorite tracks with user-friendly navigation, secure authentication, and personalized playlists. Enjoy a modern interface that prioritizes convenience and accessibility, ensuring an immersive music experience for every user.`,
      demoLink: "https://sing-with-me-4953.onrender.com/",
    },
    stack:[
      {
        name:"JAVA SCRIPT",
        icon: <IoLogoJavascript/>,
        iconColor:"yellow",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  
  {
    id:1,
    title: 'Juice Haven',
    image: ui_ux_design,
    category:"UI/UX",
    data:{
      description: `Juice Haven is a beautifully designed web app offering an exceptional juice ordering experience. The app features a clean and intuitive nav bar that guides users through the various sections. The home page captivates visitors with vibrant images of the top juice offerings, enticing them to explore more.`,
      demoLink: "https://www.figma.com/design/MbBtyTxN6TEbc78MhHR5ha/Untitled?node-id=0-1&t=s3G47rGNGiJbqsxw-1",
    },
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
    ]
  },
  {
    id:4,
    title: 'Memory Game',
    image: memorygameThumbnail,
    category:"Web",
    data:{
      description: `Test your memory skills with our engaging Memory Game! This fun and challenging game involves 9 cards, each with a hidden image. Your task is to select two cards consecutively to find matching pairs. If the cards match, they remain face up; if not, they will flip back to their backside. Enjoy a delightful experience that sharpens your memory and attention to detail.`,
      demoLink: "https://sharukh-babu.github.io/Memory-Game/",
    },
    stack:[
      {
        name:"HTML",
        icon: <DiHtml5/>,
        iconColor:"skyblue",
      },
      {
        name:"CSS",
        icon: <IoLogoCss3/>,
        iconColor:"green",
      },
      {
        name:"JAVA SCRIPT",
        icon: <IoLogoJavascript/>,
      },
    ]
  },
]
  


export const experience = [
    {
        title:"UI/UX",
        data:[
            {
                skill:"Figma",
                level:"Intermediate",
            }
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Experienced",
            },
            {
                skill:"Bootstrap",
                level:"Intermediate",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"Gsap",
                level:"Intermediate",
            }
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
              skill:"Express JS",
              level:"Intermediate",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
            {
              skill:"JAVA",
              level:"Experienced",
          },
        ]
    },
]



export const socialHandles = [
  
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/SHARUKH-BABU",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/shaik-sharukhbabu-80a52a281/",
  },
  {
    name:"FaceBook",
    icon:<AiFillFacebook/>,
    link:"https://www.facebook.com/sharukhbabu.shaik.3/"
  }
];