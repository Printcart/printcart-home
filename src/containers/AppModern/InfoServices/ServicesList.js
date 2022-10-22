import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Pagination from "common/components/Pagination";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { GridServices } from "./GridServices";

const NewDate = (number) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(number);
  const newDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return newDate;
};
const ServicesList = (props) => {
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
    <GridServices>
      {serviceList.map(
        (item, index) =>
          index > start &&
          index < end && (
            <Card key={index} className="cardItem">
              <Box>
                <Link
                  prefetch={false}
                  href={`https://cloodo.com/service/${item.attributes.alias}`}
                >
                  <a>
                    <img
                      style={{
                        width: "100%",
                        height: "200px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                      src={`${item.attributes.image.data[0].attributes.url}`}
                    />
                  </a>
                </Link>
                <Box className="content">
                  <Link
                    title={`View to ${item.attributes.title}`}
                    prefetch={false}
                    href={`https://cloodo.com/service/${item.attributes.alias}`}
                  >
                    <a title={`View to ${item.attributes.title}`}>
                      <h3 className="title">{item.attributes.title}</h3>
                    </a>
                  </Link>
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
                      href={`https://cloodo.com/service/${item.attributes.alias}`}
                    >
                      <a title={`View to ${item.attributes.title}`}>
                        <Button
                          style={{ borderRadius: "5px" }}
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
  );
};
export default ServicesList;
