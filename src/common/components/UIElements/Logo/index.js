import React from "react";
import PropTypes from "prop-types";
import Text from "common/components/Text";
import Link from "common/components/Link";
import Image from "common/components/Image";

const Logo = ({
  logoWrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    mr: "1rem",
    "a:hover,a:focus": {
      textDecoration: "none",
    },
  },
  logoStyle,
  titleStyle = {
    display: "inline-block",
    fontSize: "2rem",
    lineHeight: "inherit",
    whiteSpace: "nowrap",
  },
  withAnchor,
  anchorProps,
  logoSrc,
  title,
  ...props
}) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAnchor ? (
      <Link {...anchorProps}>
        {logoSrc ? (
          <Image src={logoSrc.src} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </Link>
    ) : (
      <>
        {logoSrc ? (
          <Image src={logoSrc.src} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </>
    )}
  </Link>
);

Logo.propTypes = {
  logoSrc: PropTypes.object,
  title: PropTypes.string.isRequired,
  logoWrapperStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  withAnchor: PropTypes.bool,
  anchorProps: PropTypes.object,
};

export default Logo;
