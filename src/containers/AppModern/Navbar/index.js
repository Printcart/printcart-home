import LogoImage from "common/assets/image/appModern/Logo-printcart-white.png";
import LogoImageAlt from "common/assets/image/appModern/printcart-logo.png";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import Logo from "common/components/UIElements/Logo";
import useOnClickOutside from "common/hooks/useOnClickOutside";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { search } from "react-icons-kit/feather/search";
import { x } from "react-icons-kit/feather/x";
import Fade from "react-reveal/Fade";
import Scrollspy from "react-scrollspy";
import NavbarWrapper, { MenuArea, MobileMenu, Search } from "./navbar.style";
import { navbar } from "common/data/AppModern";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const { navMenu } = navbar;
  const [state, setState] = useState({
    search: "",
    searchToggle: false,
    mobileMenu: false
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === "search") {
      setState({
        ...state,
        search: "",
        searchToggle: !state.searchToggle,
        mobileMenu: false
      });
    }

    if (type === "menu") {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== "") {
      console.log("search data: ", state.search);

      setState({
        ...state,
        search: ""
      });
    } else {
      console.log("Please fill this field.");
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false
    });
  };
  const menuItems = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Services",
      url: "/services"
    },
    {
      title: "Blog",
      url: "/blog"
    },
    {
      title: "Printshop",
      url: "#",
      submenu: [
        {
          title: "Shopify PrintShop",
          url: "https://solution.printcart.com/web/shopify-printshop-website",
          target: "_blank"
        },
        {
          title: "Magento Printmart",
          url: "https://solution.printcart.com/web/magento-printshop-website",
          target: "_blank"
        },
        {
          title: "Wordpress Printshop",
          url: "https://solution.printcart.com/web/wordpress-printshop-website",
          target: "_blank"
        },
        {
          title: "T-shirt Website",
          url: "https://solution.printcart.com/web/tshirt-website-template",
          target: "_blank"
        },
        {
          title: "T-shirt Shopify",
          url: "https://solution.printcart.com/web/shopify-tshirt-website",
          target: "_blank"
        }
      ]
    },
    {
      title: "Integration",
      url: "#",
      submenu: [
        {
          title: "Premium Printcart API",
          url: "https://solution.printcart.com/app/premium-printcart-api",
          target: "_blank"
        },
        {
          title: "Web To Print Shopify",
          url: "https://solution.printcart.com/app/web-to-print-shopify",
          target: "_blank"
        },
        {
          title: "Mangento Online Design",
          url: "https://solution.printcart.com/app/magento-premium-online-product-designer-extension",
          target: "_blank"
        },
        {
          title: "WP Product Designer",
          url: "https://solution.printcart.com/app/wordpress-web-2-print-product-designer-plugin",
          target: "_blank"
        }
      ]
    },
    {
      title: "Community",
      url: "https://solution.printcart.com/community/",
      target: "_blank"
    },
    {
      title: "Documentation",
      url: "https://docs.printcart.com/",
      target: "_blank"
    }
  ];

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
          href="/"
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? "active" : ""}>
          {/* <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} /> */}
          {/* end of main menu */}
          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="menu">
                {menuItems.map((menu, index) => (
                  <MenuItems items={menu} key={index} />
                ))}
              </ul>
            </div>
          </nav>
          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler("search")}
            />
          </Search>
          {/* end of search */}

          <a
            href="https://dashboard.printcart.com/"
            target="_blank"
            offset={84}
          >
            <Button className="trail" title="Dashboard" />
          </a>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler("menu")}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? "active" : ""}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title="It Free" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
