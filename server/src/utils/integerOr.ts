const integerOr = (value: string | undefined, defaultValue: number) => {
  if (value) {
    const num = parseInt(value, 10);
    if (Number.isFinite(num)) {
      return num;
    }
  }
  return defaultValue;
};

export default integerOr;
