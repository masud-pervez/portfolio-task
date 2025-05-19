import { BiWorld } from "react-icons/bi";
import { FiBriefcase, FiHome, FiMail, FiUser } from "react-icons/fi";

export const navLinks = [
  {
    icon: FiHome,
    name: "Home",
    href: "#home",
  },
  {
    icon: FiUser,
    name: "Resume",
    href: "#resume",
  },
  {
    icon: FiBriefcase,
    name: "Work History",
    href: "#workhistory",
  },
  {
    icon: BiWorld,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    icon: FiMail,
    name: "Contact",
    href: "#contact",
  },
];

export const education = [
  {
    year: "2016–2020",
    university: "Harvard University",
    degree: "B.A. and M.S., Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
  {
    year: "2014–2016",
    university: "Helwan University",
    degree: "Bachelor Degree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
];

export const workHistory = [
  {
    year: "2016-2022",
    positon: "UI/UX design",
    company: "Web site design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
  {
    year: "2012–2016",
    positon: "Junio Web designers",
    company: "Prodict designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
  },
];

export const skills = [
  {
    percent: "95%",
    title: "UI/UX Design",
  },
  {
    percent: "90%",
    title: "Photography",
  },
  {
    percent: "80%",
    title: "Creativity",
  },
  {
    percent: "95%",
    title: "Team work",
  },
  {
    percent: "95%",
    title: "Web Design",
  },
];

export const blogs = [
  [
    {
      date: "Photography | 28 Apr 2022",
      title: "The artist vocation is to send light into the human heart.",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "1.png",
    },
    {
      date: "Graphic design |  28 Apr 2022",
      title: "There are countless versions of lorem ipsum, the most famous.",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "2.png",
    },
    {
      date: "Design |  28 Apr 2022",
      title: "UI Interactions of the week",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "3.png",
    },
  ],
  [
    {
      date: "Adventure |  28 Apr 2022",
      title: "The mission of art is to represent nature not to imitate her.",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "4.png",
    },
    {
      date: "Travel |  28 Apr 2022",
      title: "The principles of true art is not toportray, but to evoke.",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "5.png",
    },
    {
      date: "Travel |  28 Apr 2022",
      title: "Party Jokes Startling But Unnecessary",
      desc: "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      writer: "Posted By Daryl Smith",
      img: "6.png",
    },
  ],
];

export const plans = [
  {
    title: "Intro",
    price: 29,
    features: [
      "Interface Design",
      "Front-end Code",
      "Back-end Development",
      { name: "Search Engine Optimization", disabled: true },
      { name: "Awesome Support", disabled: true },
      { name: "Responsive site", disabled: true },
      { name: "Easy in use", disabled: true },
      { name: "Useful site", disabled: true },
      { name: "Speedy web", disabled: true },
    ],
    isFilledButton: true,
  },
  {
    title: "Base",
    price: 49,
    features: [
      "Interface Design",
      "Front-end Code",
      "Back-end Development",
      "Search Engine Optimization",
      { name: "Awesome Support", disabled: true },
      "Responsive site",
      { name: "Easy in use", disabled: true },
      { name: "Useful site", disabled: true },
      { name: "Speedy web", disabled: true },
    ],
    isFilledButton: false,
  },
  {
    title: "Popular",
    price: 99,
    features: [
      "Interface Design",
      "Front-end Code",
      "Back-end Development",
      "Search Engine Optimization",
      "Awesome Support",
      "Responsive site",
      { name: "Easy in use", disabled: true },
      { name: "Useful site", disabled: true },
      { name: "Speedy web", disabled: true },
    ],
    isFilledButton: false,
  },
  {
    title: "Enterprise",
    price: 199,
    features: [
      "Interface Design",
      "Front-end Code",
      "Back-end Development",
      "Search Engine Optimization",
      "Awesome Support",
      "Responsive site",
      "Easy in use",
      "Useful site",
      "Speedy web",
    ],
    isFilledButton: false,
  },
];
