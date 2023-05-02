const binaryNumberRegex = /^[01]+$/;

export const bin2dec = (numb: string): number => {
  let decimalNumber = 0;

  for (let i = numb.length - 1; i >= 0; i--) {
    decimalNumber =
      decimalNumber + Math.pow(2, i) * Number(numb[numb.length - i - 1]);
  }

  return decimalNumber;
};

export const isValidBinaryNumber = (numb: string): boolean => {
  return binaryNumberRegex.test(numb);
};
