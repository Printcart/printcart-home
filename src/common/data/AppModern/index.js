/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from "common/assets/image/appModern/logo.png";

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: "Home",
      path: "#home",
      offset: "84",
    },
    {
      id: 2,
      label: "Services",
      path: "#home",
      offset: "81",
    },
    {
      id: 3,
      label: "Printshop",
      path: "#home",
      offset: "81",
    },
    {
      id: 4,
      label: "Integration",
      path: "#home",
      offset: "81",
    },
    {
      id: 5,
      label: "Community",
      path: "#home",
      offset: "81",
    },
    {
      id: 6,
      label: "Documentation",
      path: "#home",
      offset: "81",
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from "common/assets/image/appModern/printcart-company1.png";
import client2 from "common/assets/image/appModern/printcart-company2.png";
import client3 from "common/assets/image/appModern/printcart-company3.png";
import client4 from "common/assets/image/appModern/printcart-company4.png";

export const client = [
  {
    id: 1,
    image: client1,
    title: "The new york times",
  },
  {
    id: 2,
    image: client2,
    title: "amazon",
  },
  {
    id: 3,
    image: client3,
    title: "evernote",
  },
  {
    id: 4,
    image: client4,
    title: "the verge",
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from "common/assets/image/appModern/icon1.svg";
import featureIcon2 from "common/assets/image/appModern/icon2.svg";
import featureIcon3 from "common/assets/image/appModern/icon3.svg";
import featureIcon4 from "common/assets/image/appModern/icon4.svg";

export const features = {
  slogan: "Cloud Print Commerce Platform",
  title: "ENTERPRISE CLOUD PRINTING TECHNOLOGY",
  items: [
    {
      id: 1,
      color: "#38B6FF",
      icon: featureIcon1,
      title: "Mission",
      description:
        "Printcart helps Print shops and Print companies sell Custom Printing Products globally.",
    },
    {
      id: 2,
      color: "#ff4742",
      icon: featureIcon2,
      title: "How it services",
      description:
        "Buyer in the world can customize their print products and gets products in a few weeks.",
    },
    {
      id: 3,
      color: "#fb5781",
      icon: featureIcon3,
      title: "Target client",
      description:
        "Printcart is the solution for any Traditional print business and printing startups need to change.",
    },
    {
      id: 4,
      color: "#f18e47",
      icon: featureIcon4,
      title: "Business Model",
      description:
        "Printcart.com provides B2B SaaS services for all Print shop owners and developers globally. ",
    },
  ],
};

/* ------------------------------------ */
// FilterServices
/* ------------------------------------ */

export const filterServices = [
  {
    id: 1,
    name: "All",
    color: "red",
  },
  {
    id: 2,
    name: "Leadee Services",
    color: "orange",
  },
  {
    id: 3,
    name: "Design & Branding",
    color: "blue",
  },
  {
    id: 4,
    name: "Development & IT",
    color: "green",
  },
  {
    id: 5,
    name: "Digital Marketing",
    color: "aqua",
  },
  {
    id: 6,
    name: "Writing & Translation",
    color: "violet",
  },
  {
    id: 7,
    name: "Ecommerce Partners",
    color: "pink",
  },
  {
    id: 8,
    name: "Business Administration",
    color: "teal",
  },
  {
    id: 9,
    name: "Specific Industry",
    color: "black",
  },
];
/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from "common/assets/image/appModern/printcart-appslide-1.png";
import appSlide2 from "common/assets/image/appModern/printcart-appslide-2.png";
import appSlide3 from "common/assets/image/appModern/printcart-appslide-3.png";
import appIcon from "common/assets/image/appModern/icon1.svg";

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: "App Slide 1",
    },
    {
      id: 2,
      image: appSlide2,
      title: "App Slide 2",
    },
    {
      id: 3,
      image: appSlide3,
      title: "App Slide 3",
    },
  ],
  title: "The Re-Invention of Printing Industry",
  description:
    "We are proud of applying innovative ideas and technologies in eCommerce to transform the printing industry with lower costs and better operations.",
  features: [
    {
      id: 1,
      icon: appIcon,
      title: "Cloud Print API Techology",
      description:
        "Manage entire print job workflow seamlessly from product, project, design on a Dashboard",
    },
    {
      id: 2,
      icon: appIcon,
      title: "Print Ecommerce Storefront",
      description:
        "Sell any printing product via omni- channels with custom designer, pricing matrix or order upload",
    },
    {
      id: 3,
      icon: appIcon,
      title: "Shipping & Fullfillment API",
      description:
        "Simplify the connection between POD partner with designer, marketer and printshop agency",
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from "common/assets/image/appModern/printcart-workflow.png";

export const designAndBuilt = {
  image: codingImage,
  slogan: "PRINTJOB WORKFLOW",
  title: "Custom Printjob Workflow Development",
  description:
    "Printcart team is open with any customization and automation workflow project",
};

/* ------------------------------------ */
// Design and built before data section
/* ------------------------------------ */
import codingImage2 from "common/assets/image/appModern/printcart-workflow-2.png";

export const designAndBuiltBefore = {
  image: codingImage2,
  slogan: "PRINTSHOP STOREFRONT SOLUTION",
  title: "Supply a ready Storefront Website for Printer",
  description:
    "The Complete Web 2 Print Management System. Ready To Streamline Your Business.",
};

/* ------------------------------------ */
// Design and built before3 data section
/* ------------------------------------ */
import codingImage3 from "common/assets/image/appModern/printcart-workflow3-product.gif";

export const designAndBuiltBefore3 = {
  image: codingImage3,
  slogan: "COMMERCIAL PRINTING PRODUCTS",
  title: "Personalize Any Product and send them to printing",
  description:
    "Allows your users to design the products as per their needs and purchase them in your Printshop.",
};

/* ------------------------------------ */
// Design and built before4 data section
/* ------------------------------------ */
import codingImage4 from "common/assets/image/appModern/ecommerce.png";

export const designAndBuiltBefore4 = {
  image: codingImage4,
  slogan: "API FIRST COMMERCE",
  title: "",
  description:
    "You can build applications to manage the commerce features of a merchant site",
};

/* ------------------------------------ */
// Code data section
/* ------------------------------------ */
import codeImage from "common/assets/image/appModern/code-3.png";

export const designAndBuiltcode = {
  image: codeImage,
  slogan: "PRINTCART REST API",
  title: "Interact with data from your Printcart account.",
  description:
    "The Printcart API uses predictable resource-oriented URLs, standard HTTP verbs, and response codes, and accepts and returns JSON-encoded request and response bodies.",
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from "common/assets/image/appModern/printcart-page-1.png";
import slide2 from "common/assets/image/appModern/printcart-page-2.png";
import slide3 from "common/assets/image/appModern/printcart-page-3.png";

export const productData = {
  slogan: "PRINTING READY",
  title: "Start receiving custom orders with print-ready files",
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: "#1",
      title: "slide 1",
    },
    {
      id: 2,
      thumb_url: slide2,
      link: "#1",
      title: "slide 2",
    },
    {
      id: 3,
      thumb_url: slide3,
      link: "#1",
      title: "slide 3",
    },

    {
      id: 4,
      thumb_url: slide1,
      link: "#1",
      title: "slide 4",
    },

    {
      id: 5,
      thumb_url: slide3,
      link: "#1",
      title: "slide 5",
    },
    {
      id: 6,
      thumb_url: slide2,
      link: "#1",
      title: "slide 6",
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: "PRICING PLAN",
  title: "Choose your pricing policy",
  monthly: [
    {
      id: 1,
      title: "FREE",
      description: "For Small teams or office",
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: "Online design Tool",
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: "Blog Support Tools",
        },
        {
          id: 4,
          text: "eCommerce Store ",
        },
      ],
    },
    {
      id: 2,
      title: "PREMIUM",
      description: "For better opportunities",
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: "#",
      features: [
        {
          id: 1,
          text: "Online design Tool",
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: "Blog Support Tools",
        },
        {
          id: 4,
          text: "eCommerce Store ",
        },
      ],
    },
    {
      id: 3,
      title: "ENTERPRISE",
      description: "For Best opportunities",
      suggested: false,
      price: "Contact",
      trail: 14,
      trailLink: "#",
      features: [
        {
          id: 1,
          text: "Online design Tool",
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: "Blog Support Tools",
        },
        {
          id: 4,
          text: "eCommerce Store ",
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from "common/assets/image/appModern/printcart1.png";
import member2 from "common/assets/image/appModern/printcart2.png";
import member3 from "common/assets/image/appModern/printcart3.png";
import member4 from "common/assets/image/appModern/printcart4.png";
import member5 from "common/assets/image/appModern/printcart5.png";
import member6 from "common/assets/image/appModern/printcart6.png";
import member7 from "common/assets/image/appModern/printcart7.png";

export const teamportfolio = {
  title: "Our core team is Print Commerce Expert",
  description:
    "Printcart is a business domain division of the Netbase teams that have been providing web to print products and services since 2012.",

  teammember: [
    {
      id: 1,
      img: member1,
      text: "David Nguyen",
    },
    {
      id: 2,
      img: member2,
      text: "Shopia Ho",
    },
    {
      id: 3,
      img: member3,
      text: "Bach Pham",
    },
    {
      id: 4,
      img: member4,
      text: "Daniel Vu",
    },
    {
      id: 5,
      img: member5,
      text: "Cong Nguyen",
    },
    {
      id: 6,
      img: member6,
      text: "Vu Tuan",
    },
    {
      id: 7,
      img: member7,
      text: "Binh Nguyen",
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: "PARTNER TESTIMONIAL",
  title: "10k+ partners during 10 years of services",
  reviews: [
    {
      id: 1,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects.",
      avatar:
        "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      name: "Jon Doe",
      designation: "CEO of RedQ Inc.",
      review: 4,
    },
    {
      id: 2,
      title: "User friendly & Customizable",
      description:
        "With what your solutions contributed to the development of our business, you totally deserve this compliment.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Vanessa Acook",
      designation: "Asistant Manager",
      review: 5,
    },
    {
      id: 3,
      title: "User friendly & Customizable",
      description:
        "Really enjoyed when working with provider. They could understand my requirement and give suggestions.",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      name: "Inez T. Hughes",
      designation: "Leadership Group",
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/appModern/Logo-printcart-white.png";

export const footer = {
  widgetsPartner: [
    { id: 1, title: 'For Printer Partners', url: 'https://docs.printcart.com/docs/users-manual/get-started' },
    { id: 2, title: 'Web2Print Solution', url: '/' },
    { id: 3, title: 'Consultant & Development Services', url: '/' },
    { id: 4, title: 'Magento Web2Print Solution', url: 'https://solution.printcart.com/web/magento-printshop-website?_gl=1*1rst7jj*_ga*MTA0ODcyNTIxMC4xNzA4OTE3MTUy*_ga_QPKLJRNMFZ*MTcxODU5NzIzMS4yMC4xLjE3MTg1OTczNTcuMC4wLjA.' },
    { id: 5, title: 'Wordpress Web2Print Solution', url: 'https://solution.printcart.com/web/wordpress-printshop-website?_gl=1*cmn84b*_ga*MTA0ODcyNTIxMC4xNzA4OTE3MTUy*_ga_QPKLJRNMFZ*MTcxODU5NzIzMS4yMC4xLjE3MTg1OTczNTcuMC4wLjA.' },
    { id: 6, title: 'Web2Print with Wix', url: 'https://solution.printcart.com/community/setting-up-your-wix-e-commerce-website-with-printcart-api-online-design-tool-a-step-by-step-guide' },
    { id: 7, title: 'Web2Print with Shopify', url: 'https://solution.printcart.com/app/web-to-print-shopify?_gl=1*pwtbda*_ga*MTA0ODcyNTIxMC4xNzA4OTE3MTUy*_ga_QPKLJRNMFZ*MTcxODU5NzIzMS4yMC4xLjE3MTg1OTczNTcuMC4wLjA.' },
    { id: 8, title: 'Laravel Web2Print Development', url: '#' },
    { id: 9, title: 'Web2Print Cloud API Solution', url: '/' },
    { id: 10, title: 'Web2Print Marketplace Development', url: '/' },
    { id: 11, title: 'Product Designer for Wordpress', url: '/' },
    { id: 12, title: 'Web2Print Mobile App', url: '/' },
    { id: 13, title: 'POD & Fulfillment solution', url: '/' },
    { id: 14, title: 'Meet our Consultant Partners', url: '/' },
    { id: 15, title: 'Request a Demo', url: '/' },
    { id: 16, title: 'Case Studies', url: '/' },
    { id: 17, title: 'Testimonials', url: '/' },
    { id: 18, title: 'Web2Print Tutorials', url: '/tutprias' },
    { id: 19, title: 'Support Ticket', url: 'https://dashboard.printcart.com/projects/tickets' }
  ],
  widgetsPOD: [
    { id: 1, title: 'Become a POD seller', url: '/' },
    { id: 2, title: 'POD business tutorials', url: '/' },
    { id: 3, title: 'Product Catalog', url: '/' },
    { id: 4, title: 'Support Services for POD Seller', url: '/' },
    { id: 5, title: 'POD Dashboard', url: '/' },
    { id: 6, title: 'Sell POD on Etsy', url: '#' },
    { id: 7, title: 'Sell POD on Wix', url: '#' },
    { id: 8, title: 'Sell POD on Shopify', url: '#' },
    { id: 9, title: 'Sell POD on Wordpress', url: '#' },
    { id: 10, title: 'Sell POD on Magento', url: '#' },
    { id: 11, title: 'Sell POD with custom website', url: '#' },
    { id: 12, title: 'Sell POD on WhatsApp', url: '#' },
    { id: 13, title: 'Sell POD on Facebook', url: '#' },
    { id: 14, title: 'Sell POD on Telegram', url: '#' },
    { id: 15, title: 'Order & Payment', url: '#' },
    { id: 16, title: 'Shipping & Return', url: '#' },
    { id: 17, title: 'POD policies', url: '#' }
  ],
  widgetsPrintcart: [
    { id: 1, title: 'How we work', url: '#' },
    { id: 2, title: 'Contact Us', url: '#' },
    { id: 3, title: 'Request a Demo', url: '#' },
    { id: 4, title: 'Help Desk', url: '#' },
    { id: 5, title: 'Testimonials', url: '#' },
    { id: 6, title: 'Site Map', url: '#' },
    { id: 7, title: 'Term of Services', url: '#' }
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: "Home",
      link: "#",
    },
    {
      id: 2,
      text: "Documentation",
      link: "https://docs.printcart.com/",
    },
  ],
};
