import {
  BsEnvelope,
  BsFacebook,
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter
} from "react-icons/bs";

export const companyName = "Krishaka";
export const companyTagLine = "A company that aspires to bring a change!";
export const companyMail = "something@gmail.com";
export const companyNumber = "+91-9999999999";
export const companyBrief =
  "An innovative force in agriculture, standing at the forefront of revolutionizing the farming landscape with its cutting-edge products.";

export const navList = [
  {
    navItemName: "home",
    link: "/"
  },
  {
    navItemName: "about",
    link: `/about`
  },
  {
    navItemName: "products",
    link: "/products"
  },
  {
    navItemName: "contact",
    link: "/contact"
  }
];

export const productList = ["product one", "product two", "product three"];

export const socialIconsList = [
  { iconName: "instagram", Icon: BsInstagram, link: "/" },
  { iconName: "facebook", Icon: BsFacebook, link: "/" },
  { iconName: "twitter", Icon: BsTwitter, link: "/" },
  { iconName: "linkedIn", Icon: BsLinkedin, link: "/" }
];

export const contactInfoList = [
  {
    iconName: "mail",
    Icon: BsEnvelope,
    text: companyMail,
    link: `mailto:${companyMail}`
  },
  {
    iconName: "phone",
    Icon: BsFillTelephoneFill,
    text: companyNumber,
    link: `tel:${companyNumber}`
  },
  {
    iconName: "location",
    Icon: BsGeoAltFill,
    text: "Flat No XYZ, Locality ABC, Chennai - 62, IN",
    link: "https://maps.app.goo.gl/eU4qyhhoG6f8bFdH6"
  }
];

export const teamData = [
  {
    name: "Nani Naresh",
    position: "Head Of Content",
    imageUrl: "/images/wallpaper.jpg",
    link: "https://www.linkedin.com/feed/",
    insta: "https://www.instagram.com/",
    mail: companyMail
  },
  {
    name: "Swami Suresh",
    position: "Head Of Design",
    imageUrl: "/images/wallpaper.jpg",
    link: "https://www.linkedin.com/feed/",
    insta: "https://www.instagram.com/",
    mail: companyMail
  },
  {
    name: "Manoj Mahesh",
    position: "Cheif Technical Officer",
    imageUrl: "/images/wallpaper.jpg",
    link: "https://www.linkedin.com/feed/",
    insta: "https://www.instagram.com/",
    mail: companyMail
  }
];
