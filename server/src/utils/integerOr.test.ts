import integerOr from "./integerOr";

describe("IntegerOr", () => {
  const defaultValue = 1234;

  test("integerOr should return default value if input is undefined", () => {
    const input = undefined;
    expect(integerOr(input, defaultValue)).toBe(defaultValue);
  });

  test("integerOr should return default value if input is not a number", () => {
    const input = "foo";
    expect(integerOr(input, defaultValue)).toBe(defaultValue);
  });

  test("integerOr should return input if valid number", () => {
    const input = "4567";
    expect(integerOr(input, defaultValue)).toBe(4567);
  });
});
