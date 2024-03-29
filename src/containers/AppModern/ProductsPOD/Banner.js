import Box from "common/components/Box";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Link from "next/link";
import { BannerWrapper } from "./productspod.style";

const Banner = () => {
  return (
    <BannerWrapper>
      <Box className="contLeft">
        <Box className="heading">
          <Heading
            fontWeight="600"
            content="Connect Printer,"
            className="heading-first"
          />
          <Heading content="everywhere !" className="heading-second" />
        </Box>
        <p className="description">
          Browse our POD Catalog today and embark on a remarkable printing
          adventure with Printcart. Let's transform your ideas into captivating,
          personalized products that your customers will love and cherish
        </p>
        <Box className="footer">
          <Link href="https://dashboard.printcart.com/">
            <a target="_blank">
              <Button title="Get Started" className="btn-getstart" />
            </a>
          </Link>
          <Button title="How It Works" className="btn-howitworks" />
        </Box>
      </Box>
      <Box className="contRight">
        <svg
          viewBox="0 0 578 440"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-background"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          />
        </svg>
        <Box className="boxImage">
          <img
            className="imageBanner"
            alt="Image Banner"
            src="/Banner_catalog.jpg"
          />
        </Box>
      </Box>
    </BannerWrapper>
  );
};
export default Banner;
