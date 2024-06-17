import React from "react";
import Box from "common/components/Box";
import Logo from "common/components/UIElements/Logo";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FooterArea, {
  MenuArea,
  CopyrightText,
  WidgetAreaContainer,
  WidgetAreaLeft,
  WidgetAreaRight,
} from "./footer.style";

import { footer } from "common/data/AppModern";

const Footer = () => {
  const { logo, menu, widgetsPartner, widgetsPOD, widgetsPrintcart } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetAreaContainer>
          <WidgetAreaLeft>
            <div className="title">For Printer Partners</div>
            {widgetsPartner.map((item) => (
              <Box className="col" key={`footer-widget--key${item.id}`}>
                <a href={item.url} target="_blank" rel="nofollow">
                  <Heading as="h3" content={item.title} />
                </a>
              </Box>
            ))}
          </WidgetAreaLeft>
          <WidgetAreaLeft>
            <div className="title">For POD Sellers</div>
            {widgetsPOD.map((item) => (
              <Box className="col" key={`footer-widget--key${item.id}`}>
                <a href={item.url} target="_blank" rel="nofollow">
                  <Heading as="h3" content={item.title} />
                </a>
              </Box>
            ))}
          </WidgetAreaLeft>
          <WidgetAreaRight>
            <div className="title">About Printcart </div>
            {widgetsPrintcart.map((item) => (
              <Box className="col" key={`footer-widget--key${item.id}`}>
                <a href={item.url} target="_blank" rel="nofollow">
                  <Heading as="h3" content={item.title} />
                </a>
              </Box>
            ))}
          </WidgetAreaRight>
        </WidgetAreaContainer>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo}
            title="App Classic"
          />
          <CopyrightText>Copyright {year} By PRINTCART</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
