import _ from "lodash/collection";

export default errors => {
  const result = {};

  _.forEach(errors, (value, key) => {
    result[key] = value;
  });

  return result;
};
