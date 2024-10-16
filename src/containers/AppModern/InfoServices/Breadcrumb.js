import React from "react";
import Link from "next/link";
import Box from "common/components/Box";
import Icon from "react-icons-kit";
import { ic_home_outline } from "react-icons-kit/md/ic_home_outline";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
} from "react-share";

const Breadcrumb = (props) => {
  const { currentCat } = props;
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_PRINTCART_URL}${router.asPath}`;
  

  return (
    <Box className="mainbred">
      <Box className="breadcome">
        {/* Home Link */}
        <Link href="/" className="text">
          <Icon icon={ic_home_outline} />
          Printcart
        </Link>
        {" - "}
        {/* Services Listing Link */}
        <Link href="/services" className="text">
          Services Listing
        </Link>

        {currentCat?.name_cat && (
          <>
            {" - "}
            <Link
              href={`/services/${currentCat?.alias_cat ?? ''}`}
              className="text"
            >
              {currentCat.name_cat}
            </Link>
          </>
        )}

        {currentCat?.name_subcat && (
          <>
            {" - "}
            <Link
              href={`/services/${currentCat?.alias_cat ?? ''}/${currentCat?.alias_subcat ?? ''}`}
              className="text"
            >
              {currentCat.name_subcat}
            </Link>
          </>
        )}

        {currentCat?.name_sub && (
          <>
            {" - "}
            <Link
              href={`/services/${currentCat?.alias_cat ?? ''}/${currentCat?.alias_subcat ?? ''}/${currentCat?.alias_sub ?? ''}`}
              className="text"
            >
              {currentCat.name_sub}
            </Link>
          </>
        )}

      </Box>

      {/* Social Share Buttons */}
      <Box className="boxButton">
        <Box className="shareone">
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon />
          </LinkedinShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
          <VKShareButton url={url}>
            <VKIcon />
          </VKShareButton>
          <TelegramShareButton url={url}>
            <TelegramIcon />
          </TelegramShareButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Breadcrumb;
