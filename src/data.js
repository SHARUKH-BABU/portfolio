import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import {spotifyThumbnail, memorygameThumbnail} from "./images"
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]



export const projects = [
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
      id:3,
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
    {
      id:5,
      title: 'Mobile bank - App Design',
      image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
      category:"UI/UX",
      data:{
        description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
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