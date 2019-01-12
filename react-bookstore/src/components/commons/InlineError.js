import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => {
  if (text)
    return <span style={{ color: "#ae5856", fontSize: "0.8rem" }}>{text}</span>;
  return null;
};

InlineError.propTypes = {
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string
};

export default InlineError;
