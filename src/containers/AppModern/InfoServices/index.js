import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "styled-components";
import { SectionHeader } from "../appModern.style";
import CheckBoxServices from "./CheckBox";
import SectionWrapperServices, { GridServices } from "./GridServices";
import ContainerServices from "./style";

const NewDate = (number) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(number);
  const newDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return newDate;
};
const InfoServices = (props) => {
  const { serviceList } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCSS />
        <SectionWrapperServices>
          <SectionHeader>
            <Fade up>
              <Heading as="h1" content="BPO Services Marketplace" />
              <Heading as="h3" content="For trusted agency and freelancer" />
            </Fade>
          </SectionHeader>
          <ContainerServices>
            <div className="">
              {filterServices.map((item, index) => (
                <CheckBoxServices
                  p={4}
                  key={index}
                  labelText={item.name}
                  background={item.color}
                />
              ))}
            </div>
          </ContainerServices>
          <GridServices>
            {serviceList.map((item, index) => (
              <Card>
                <Box key={index} className="cardItem">
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                    src={`${item.attributes.image.data[0].attributes.url}`}
                  />
                  <Box className="content">
                    <h3 className="title">{item.attributes.title}</h3>
                    <Box>
                      <p className="text">
                        {ReactHtmlParser(item.attributes.description)}
                      </p>
                    </Box>
                    <Box className="info">
                      <strong>Category: </strong>
                      {item.attributes.package}
                    </Box>
                    <Box className="info">
                      <strong>Service Type: </strong>
                      {item.attributes.type}
                    </Box>
                    <Box className="info">
                      <strong>Updated: </strong>
                      {NewDate(item.attributes.updatedAt)}
                    </Box>
                    <Box className="boxBtn">
                      <Link
                        prefetch={false}
                        href={`/service/${item.attributes.alias}`}
                      >
                        <a title={`View to ${item.attributes.title}`}>
                          <Button
                            // className={classes.button}
                            sx={{ color: "#2d58af" }}
                            disableTouchRipple
                            title="
                        Request Support
                        "
                          />
                        </a>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Card>
            ))}
          </GridServices>
        </SectionWrapperServices>
      </>
    </ThemeProvider>
  );
};
export default InfoServices;
