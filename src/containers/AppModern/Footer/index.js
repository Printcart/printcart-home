import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Logo from "common/components/UIElements/Logo";
import Link from "next/link";
import FooterArea, {
  CopyrightText,
  MenuArea,
  WidgetArea,
} from "./footer.style";

import { footer } from "common/data/AppModern";

const Footer = () => {
  const { logo, menu, widgets } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetArea>
          {widgets.map((item) => (
            <Box className="col" key={`footer-widget--key${item.id}`}>
              <Link href={item.url} target="_blank" rel="nofollow">
                <Image src={item.icon?.src} alt={item.title} />
                <Heading as="h3" content={item.title} />
                <Text content={item.description} />
              </Link>
            </Box>
          ))}
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo}
            title="App Classic"
          />
          {/* <Menu>
            {menu.map((item) => (
              <MenuItem key={`footer-link${item.id}`}>
                <Link href={item.link}>
                  <a target="_blank" rel="nofollow">{item.text}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu> */}
          <CopyrightText>Copyright {year} By PRINTCART</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
