/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#features',
      offset: '81',
    },
    {
      id: 3,
      label: 'Testimonial',
      path: '#testimonial',
      offset: '81',
    },
    {
      id: 4,
      label: 'Pricing',
      path: '#pricing',
      offset: '81',
    },
    {
      id: 5,
      label: 'Team Members',
      path: '#team',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/printcart-company1.png';
import client2 from 'common/assets/image/appModern/printcart-company2.png';
import client3 from 'common/assets/image/appModern/printcart-company3.png';
import client4 from 'common/assets/image/appModern/printcart-company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appModern/icon1.svg';
import featureIcon2 from 'common/assets/image/appModern/icon2.svg';
import featureIcon3 from 'common/assets/image/appModern/icon3.svg';
import featureIcon4 from 'common/assets/image/appModern/icon4.svg';

export const features = {
  slogan: 'About PRINTCART Solutions',
  title: 'Significantly change the business model of Print business owners',
  items: [
    {
      id: 1,
      color: '#38B6FF',
      icon: featureIcon1,
      title: 'Mission',
      description:
        'Printcart helps Print shops and Print companies sell Custom Printing Products globally.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'How it services',
      description:
        'Buyer in the world can customize their print products and gets products in a few weeks.',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'Target client',
      description:
        'Printcart is the solution for any Traditional print business and printing startups need to change.',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Business Model',
      description:
        'Printcart.com provides B2B SaaS services for all Print shop owners and developers globally. ',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appModern/printcart-appslide-1.png';
import appSlide2 from 'common/assets/image/appModern/printcart-appslide-2.png';
import appSlide3 from 'common/assets/image/appModern/printcart-appslide-3.png';
import appIcon from 'common/assets/image/appModern/icon1.svg';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'A Future for Printing Industry',
  description:
    "We are proud of applying innovative ideas and technologies in eCommerce to transform the printing industry with lower costs and better operations.",
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'Professional Website',
      description: 'Build web to print quickly with the professional-looking interface.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'Easy & powerful dashboard',
      description:
        'Manage everything related to you easily, from product, project, design.',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'Customer Support',
      description: 'A Dedicated support team will be always ready for you.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/printcart-code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our PRINTCART with Customization',
  description:
    'Printcart consists of multiple services and API - SDK that can be used for various web-to-print tasks. Whether you are integrating your storefront or looking for ways to extend Printcart, the following guides will help you achieve your goals.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/printcart-page-1.png';
import slide2 from 'common/assets/image/appModern/printcart-page-2.png';
import slide3 from 'common/assets/image/appModern/printcart-page-3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/printcart-1.png';
import member2 from 'common/assets/image/appModern/printcart-2.png';
import member3 from 'common/assets/image/appModern/printcart-3.png';
import member4 from 'common/assets/image/appModern/printcart-4.png';
import member5 from 'common/assets/image/appModern/printcart-5.png';
import member6 from 'common/assets/image/appModern/printcart-6.png';
import member7 from 'common/assets/image/appModern/printcart-7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members, work behind the sense',
  description:
    'Team members commit to using technology to benefit clients',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'David Nguyen',
    },
    {
      id: 2,
      img: member2,
      text: 'Shopia Ho',
    },
    {
      id: 3,
      img: member3,
      text: 'Bach Pham',
    },
    {
      id: 4,
      img: member4,
      text: 'Daniel Vu',
    },
    {
      id: 5,
      img: member5,
      text: 'Cong Nguyen',
    },
    {
      id: 6,
      img: member6,
      text: 'Vu Tuan',
    },
    {
      id: 7,
      img: member7,
      text: 'Binh Nguyen',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'With what your solutions contributed to the development of our business, you totally deserve this compliment. Besides high-quality, I also highly appreciate the professionalism in the way your developer teamwork and support.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Vanessa Acook',
      designation: 'Asistant Manager',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'I really enjoyed when working with the solution provider. They could understand my requirement and give me suggestions for the solution that suitable for my business. So great!',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'Inez T. Hughes',
      designation: 'Leadership Group',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/Logo-printcart-white.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Visit our user guide documents',
      description:
        'You will find out everything you need to start Printing Business with PRINTCART Technology Solution',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Join our social networking community to discuss the best solution for your printing business.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Join discuss, build and develop technology to bring the best solution for the printing business.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};
