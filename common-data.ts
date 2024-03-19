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
export const companyTagLine = "Where farming meets technology!";
export const companyMail = "something@gmail.com";
export const companyNumber = "+91-9999999999";
export const companyBrief =
  "An Agritech Startup which aims to turn farming a Lucrative industry by integrating technology into the farming.";

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
    navItemName: "team",
    link: "/team"
  },
  {
    navItemName: "contact",
    link: "/contact"
  }
];

export const productList = [
  {
    productName: "product one",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability."
  },
  {
    productName: "product two",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability."
  },
  {
    productName: "product three",
    productImg: "/images/wallpaper.jpg",
    productDesc:
      "Krishaka, an agritech trailblazer, pioneers farming innovation with cutting-edge vehicles.\
      Specializing in smart farming solutions, Krishaka integrates advanced technology, precision\
      agriculture, and sustainability."
  }
];

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
