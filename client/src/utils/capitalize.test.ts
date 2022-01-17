import capitalize from "./capitalize";

describe("Capitalize", () => {
  test("capitalize should set first letter to upper case", () => {
    const input = "fooBar";
    expect(capitalize(input)).toBe("FooBar");
  });

  test("capitalize should not modify input string", () => {
    const input = "fooBar";
    capitalize(input);
    expect(input).toBe(input);
  });

  test("capitalize should not change empty string", () => {
    const input = "";
    expect(capitalize(input)).toBe(input);
  });
});
