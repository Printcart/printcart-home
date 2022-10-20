import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import { useRouter } from "next/router";
import Pagination from "common/components/Pagination";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";
import styled, { ThemeProvider } from "styled-components";
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
  const { serviceList, total } = props;

  const router = useRouter();
  const query = router.query;

  const page = total.pagination.total / 40;
  let start = -1;
  let end = 40;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }
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
            {serviceList.map(
              (item, index) =>
                index > start &&
                index < end && (
                  <Card key={index}>
                    <Box className="cardItem">
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
                        <Box className="text">
                          {ReactHtmlParser(item.attributes.description)}
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
                                style={{ ouline: "0", borderRadius: "5px" }}
                                className="buttonRequest"
                                sx={{ color: "#2d58af" }}
                                disableTouchRipple
                                title="Request Support"
                              />
                            </a>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                )
            )}
            <Pagination page={page} />
          </GridServices>
        </SectionWrapperServices>
      </>
    </ThemeProvider>
  );
};
export default InfoServices;
