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
    productName: "Groundnut Thresher",
    productImg: "/images/goundnut_thrusher.jpeg",
    productDesc:
      "This specialized agricultural machine is designed to efficiently separate groundnuts from their vines and shells and by automating this process, this facilitates the rapid processing of groundnut harvests and significantly reduces the labor required for manual threshing.",
    productPageDesc:
      "Our groundnut thresher drastically improves the threshing process by cutting the time to around 5 hours per acre, offering an 80% reduction in labor. Unlike traditional methods, there is no need for crops to dry before threshing, allowing efficient operation even during rainy conditions. With a 96% efficiency rate, this machine guarantees superior performance, saving time and resources",
  },
  {
    productName: "Groundnut Harvester",
    productImg: "/images/groundnut_harvester.jpeg",
    productDesc:
      "Specialized machine designed to efficiently harvest groundnuts (peanuts) from the soil. It digs up the crop, separates the pods from the soil, and clears away excess dirt, making the harvesting process faster and more effective. ",
    productPageDesc:
      "Our groundnut harvester presents the best in delicate harvesting. Capable of uprooting an acre's worth of groundnut plants in just 3 hours, it achieves a remarkable 98.75% reduction in time. Its design ensures minimal disturbance to the pods, gently lifting the plants without separating the groundnuts from the soil, preserving crop integrity and quality.",
  },
  {
    productName: "Paddy Transplante",
    productImg: "/images/paddy_transplanter.jpeg",
    productDesc:
      "The Paddy transplanter which streamlines the labor-intensive process of planting paddy rice by automating the transplantation of seedlings ensuring uniform planting depth and spacing, and ultimately boosts crop yields",
    productPageDesc:
      "Our paddy transplanter makes the planting process by significantly reducing time and labor. With this advanced machine, farmers can plant an acre of paddy in just 2.5 hours, marking an impressive 97.6% reduction in time compared to traditional methods. Its superior design ensures better output and user-friendliness, planting each seedling at a precise 90-degree angle and a depth of 8 cm for optimal growth. Furthermore, the transplanter supports crops of various lengths, unlike other companies’ machines that may impose size restrictions. Powered by an electric vehicle (EV) mechanism, the transplanter offers extremely low maintenance costs and precise control over steering and spacing, enhancing operational efficiency",
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
    text: "Nirmaan, Sudha Sankar Innovation Hub, IIT Madras, Chennai, 600036",
    link: "https://maps.app.goo.gl/Ygxiev8kasDtmjDYA",
  },
];

export const teamData = [
  {
    name: "Easwar V",
    position: "Founder & CEO",
    imageUrl: "/images/easwar.jpeg",
    link: "https://www.linkedin.com/in/easwar-veeragandham-132367194/",
    insta: "https://www.instagram.com/easwar_v",
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
  {
    name: "Sri Venkatesh",
    position: "Product Design",
    imageUrl: "/images/blank-photo.png",
    link: "https://www.linkedin.com/in/g-sri-venkatesh-618905249/",
    insta: "https://www.instagram.com/gsv.2099",
    mail: companyMail,
  },
  {
    name: "Nandamuri Saketh",
    position: "Software Lead",
    imageUrl: "/images/blank-photo.png",
    link: "https://www.linkedin.com/feed/",
    insta: "https://www.instagram.com/",
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
    date: "September 2022",
    description:
      "Joined IIT Madras’s Nirmaan Pre-Incubation Program, gaining access to mentorship, field contacts for testing, basic prototyping funding, and special talks from industry veterans.",
  },
];

export const formLinkForJob = "https://forms.gle/moP36qiQH9Vpxx3Z8";
