import React from "react";
import PropTypes from "prop-types";
import { isObjectLike } from "lodash/lang";

const InlineError = ({ error }) => {
  if (!error) return null;
  return (
    <span style={{ color: "#ae5856", fontSize: "0.8rem" }}>
      {isObjectLike(error) ? error.message : error}
    </span>
  );
};

InlineError.propTypes = {
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ message: PropTypes.string })
  ])
};

export default InlineError;
