export const bigIntFormat = (bigNumber) => {
  const intBigNumber = parseInt(bigNumber);
  if (intBigNumber === 0) return 0;
  let formattedNumber = (intBigNumber / 10) ^ 18;
  return parseInt(formattedNumber, 10);
};

export const searchString = (value, search) => {
  return value
    .toString()
    .toLowerCase()
    .includes(search.toString().toLowerCase().trim());
};
