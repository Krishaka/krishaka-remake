import {
  BsEnvelope,
  BsFacebook,
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export const companyName = "Krishaka";
export const companyTagLine = "Where farming meets technology!";
export const companyMail = "mpavoperations@gmail.com";
export const companyNumber = "+91-9840046978";
export const companyBrief =
  "An Agritech Startup which aims to turn farming a Lucrative industry by integrating technology into the farming.";

export const navList = [
  {
    navItemName: "home",
    link: "/",
  },
  {
    navItemName: "about",
    link: `/about`,
  },
  {
    navItemName: "products",
    link: "/products",
  },
  {
    navItemName: "team",
    link: "/team",
  },
  {
    navItemName: "contact",
    link: "/contact",
  },
];

export const productList = [
  {
    productName: "product one",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability.",
  },
  {
    productName: "product two",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability.",
  },
  {
    productName: "product three",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability.",
  },
];

export const socialIconsList = [
  {
    iconName: "instagram",
    Icon: BsInstagram,
    link: "https://www.instagram.com/krishaka_agrow/",
  },
  {
    iconName: "linkedIn",
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/in/krishaka-agrow-268735294/",
  },
];

export const contactInfoList = [
  {
    iconName: "mail",
    Icon: BsEnvelope,
    text: companyMail,
    link: `mailto:${companyMail}`,
  },
  {
    iconName: "phone",
    Icon: BsFillTelephoneFill,
    text: companyNumber,
    link: `tel:${companyNumber}`,
  },
  {
    iconName: "location",
    Icon: BsGeoAltFill,
    text: "Nirmaan, Sudha Sankar Innovation Home, IIT Madras, Chennai, 600036",
    link: "https://maps.app.goo.gl/Ygxiev8kasDtmjDYA",
  },
];

export const teamData = [
  {
    name: "Easwar V",
    position: "CEO",
    imageUrl: "/images/easwar.jpg",
    link: "https://www.linkedin.com/in/easwar-veeragandham-132367194/",
    insta: "https://www.instagram.com/easwar_v",
    mail: companyMail,
  },
  {
    name: "G . Sri Venkatesh",
    position: "Production Design",
    imageUrl: "/images/blank-photo.png",
    link: "https://www.linkedin.com/in/g-sri-venkatesh-618905249/",
    insta: "https://www.instagram.com/gsv.2099",
    mail: companyMail,
  },
  {
    name: "Bala Saimani V",
    position: "Product Manager",
    imageUrl: "/images/bala-sai.png",
    link: "https://www.linkedin.com/in/bala-saimani-voonna-52491a25a/",
    insta: "https://www.instagram.com/vbalasai_09",
    mail: companyMail,
  },
];
export const AboutTimelineData = [
  {
    title: "Founding of Krishaka",
    date: "January 2022",
    description:
      "Krishaka was established with the mission to transform small-scale farming through affordable automation. We began with a focus on developing solutions tailored to address labor shortages and rising operational costs faced by small-scale farmers.",
  },
  {
    title: "First Prototype Completed",
    date: "June 2022",
    description:
      "Developed and completed the first working prototype of the paddy transplanter. This marked a significant step in demonstrating the feasibility of using low-power automation for small-scale farming tasks.",
  },
  {
    title: "Field Testing & Iteration",
    date: "September 2022",
    description:
      "Conducted initial field testing of the paddy transplanter in different soil conditions. Feedback from farmers was gathered, leading to design improvements and performance optimization.",
  },
  {
    title: "Nirmaan Pre-Incubation Support",
    date: "January 2023",
    description:
      "Joined IIT Madras’s Nirmaan Pre-Incubation Program, gaining access to mentorship, field contacts for testing, basic prototyping funding, and special talks from industry veterans.",
  },
  {
    title: "Market Launch",
    date: "October 2023",
    description:
      "Officially launched Krishaka's products, offering machines for rental and sale. Expanded market reach through partnerships with FPOs and agricultural businesses, marking our entry into the commercial market.",
  },
];
