import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const NewDate = (number) => {
  // Check if number is a valid timestamp or date
  if (!number || isNaN(new Date(number).getTime())) {
    return "Invalid date"; // Return a default message for invalid dates
  }

  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(number);
  const newDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return newDate;
};


const ServicesList = (props) => {
  const { serviceList, total } = props;

  // Ensure serviceList is defined
  if (!serviceList) {
    return null; // Or return a loading state / error message
  }

  return (
    <Card className="cardItem">
      <Box>
        {serviceList.attributes?.alias && (
          <Link prefetch={false} href={`/service/${serviceList.attributes.alias}`}>
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
          {serviceList.attributes?.alias && (
            <Link
              title={`View to ${serviceList.attributes.title}`}
              prefetch={false}
              href={`/service/${serviceList.attributes.alias}`}
            >
              <h3 className="title">{serviceList.attributes.title}</h3>
            </Link>
          )}
          <Box className="text">
            {serviceList.attributes?.description ? (
              <ReactMarkdown>{serviceList.attributes.description}</ReactMarkdown>
            ) : (
              <p>No description available.</p> // Fallback if description is not available
            )}
          </Box>
          <Box className="avataruser">
            <img
              src={
                serviceList?.attributes?.users_permissions_user?.data?.attributes?.avatar?.data?.attributes.url ||
                "/avatar-default.png"
              }
              alt="Avatar User"
            />
            <Box>
              <Box className="info">
                <strong>Project Assistant: </strong>
                {
                  serviceList.attributes?.users_permissions_user?.data?.attributes?.name ||
                  "Printcart"
                }
              </Box>
              <Box className="infodate">
                <strong>Updated: </strong>
                {serviceList.attributes?.updatedAt ? NewDate(serviceList.attributes.updatedAt) : "N/A"}
              </Box>
            </Box>
          </Box>
          <Box className="boxBtn">
            {serviceList.attributes?.alias && (
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
