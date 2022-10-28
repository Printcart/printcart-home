import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Pagination from "common/components/Pagination";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { GridServices } from "./GridServices";

export const NewDate = (number) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(number);
  const newDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return newDate;
};
const ServicesList = (props) => {
  const { serviceList, total } = props;

  return (
    <Card className="cardItem">
      <Box>
        <Link prefetch={false} href={`/service/${serviceList.attributes.alias}`}>
          <a>
            <img
              style={{
                width: "100%",
                height: "200px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              src={`${serviceList.attributes.image.data[0].attributes.url}`}
            />
          </a>
        </Link>
        <Box className="content">
          <Link
            title={`View to ${serviceList.attributes.title}`}
            prefetch={false}
            href={`/service/${serviceList.attributes.alias}`}
          >
            <a title={`View to ${serviceList.attributes.title}`}>
              <h3 className="title">{serviceList.attributes.title}</h3>
            </a>
          </Link>
          <Box className="text">
            {ReactHtmlParser(serviceList.attributes.description)}
          </Box>
          <Box className="info">
            <strong>Category: </strong>
            {serviceList.attributes.package}
          </Box>
          <Box className="info">
            <strong>Service Type: </strong>
            {serviceList.attributes.type}
          </Box>
          <Box className="info">
            <strong>Updated: </strong>
            {NewDate(serviceList.attributes.updatedAt)}
          </Box>
          <Box className="boxBtn">
            <Link
              prefetch={false}
              href={`/service/${serviceList.attributes.alias}`}
            >
              <a title={`View to ${serviceList.attributes.title}`}>
                <Button
                  style={{ borderRadius: "5px" }}
                  title="Request Support"
                />
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
export default ServicesList;
