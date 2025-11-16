// problem 1

type values = number | string | boolean;
const formatValue = (value: values): values => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
};
 
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// problem 2