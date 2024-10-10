import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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
        {serviceList?.attributes?.alias && (
          <Link
            prefetch={false}
            href={`/service/${serviceList.attributes.alias}`}
          >
            <img
              style={{
                width: "100%",
                height: "200px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              src={
                serviceList.attributes?.image?.data?.length > 0
                  ? `${serviceList?.attributes?.image?.data[0]?.attributes?.url}`
                  : `${serviceList?.attributes?.image?.data?.map(
                    (items) => items?.attributes?.url
                  )}`
              }
            />
          </Link>
        )}
        <Box className="content">
          {serviceList?.attributes?.alias && (
            <Link
              title={`View to ${serviceList.attributes.title}`}
              prefetch={false}
              href={`/service/${serviceList.attributes.alias}`}
            >
              <h3 className="title">{serviceList.attributes.title}</h3>
            </Link>
          )}
          <Box className="text">
            <ReactMarkdown>{serviceList.attributes.description}</ReactMarkdown>
          </Box>
          <Box className="avataruser">
            <img
              src={`${serviceList?.attributes?.users_permissions_user?.data
                ?.attributes?.avatar?.data?.attributes.url ??
                "/avatar-default.png"
                }`}
              alt="Avatar User"
            />
            <Box>
              <Box className="info">
                <strong>Project Assistant: </strong>
                {`${serviceList.attributes.users_permissions_user?.data
                  ?.attributes.name ?? "Printcart"
                  }`}
              </Box>
              <Box className="infodate">
                <strong>Updated: </strong>
                {NewDate(serviceList.attributes.updatedAt)}
              </Box>
            </Box>
          </Box>
          <Box className="boxBtn">
            {serviceList?.attributes?.alias && (
              <Link
                prefetch={false}
                href={`/service/${serviceList.attributes.alias}`}
                title={`View to ${serviceList.attributes.title}`}
              >
                <Button style={{ borderRadius: "5px" }} title="Request Support" />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
export default ServicesList;
