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
  const { current_cat } = props;
  const router = useRouter();
  const url = { asPath: router };

  return (
    <Box className="mainbred">
      <Box className="breadcome">
        <Link href="/">
          <a className="text">
            <Icon icon={ic_home_outline} />
            Printcart
          </a>
        </Link>
        -
        <Link href="/services">
          <a className="text">Services Listing</a>
        </Link>
        {current_cat?.name_cat ? (
          <>
            -
            <Link prefetch={false} href={`/services/${current_cat.alias_cat}`}>
              <a className="text">{current_cat.name_cat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {current_cat?.name_subcat ? (
          <>
            -
            <Link
              prefetch={false}
              href={`/services/${current_cat.alias_cat}/${current_cat.alias_subcat}`}
            >
              <a className="text">{current_cat.name_subcat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {current_cat?.name_sub ? (
          <>
            -
            <Link
              prefetch={false}
              href={`/services/${current_cat.alias_cat}/${current_cat.alias_subcat}/${current_cat.alias_sub}`}
            >
              <a className="text">{current_cat.name_sub}</a>
            </Link>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box className="boxButton">
        <Box className="shareone">
          <FacebookShareButton
            children={<FacebookIcon />}
            url={`${process.env.PRINTCART_URL}` + url}
          />
          <LinkedinShareButton
            children={<LinkedinIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <TwitterShareButton
            children={<TwitterIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <VKShareButton
            children={<VKIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <TelegramShareButton
            children={<TelegramIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Breadcrumb;
