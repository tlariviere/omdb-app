import handleOmdbQuery from "./handleOmdbQuery";
import RequestError from "./RequestError";

describe("Handle OMDb query", () => {
  test("handleOmdbQuery should throw if missing `Response` field", async () => {
    const input = Promise.resolve({});
    await expect(handleOmdbQuery(input)).rejects.toThrow(
      new Error("Internal error")
    );
  });

  test("handleOmdbQuery should throw if missing `Error` and `Response` is 'False'", async () => {
    const input = Promise.resolve({ Response: "False" });
    await expect(handleOmdbQuery(input)).rejects.toThrow(
      new Error("Internal error")
    );
  });

  test("handleOmdbQuery should throw RequestError if `Response` is 'False'", async () => {
    const message = "foo";
    const input = Promise.resolve({ Response: "False", Error: message });
    await expect(handleOmdbQuery(input)).rejects.toThrow(
      new RequestError(message)
    );
  });

  test("handleOmdbQuery should return data without `Response` if not 'False'", async () => {
    const data = { foo: "bar", baz: 1234 };
    const input = Promise.resolve({ Response: "True", ...data });
    await expect(handleOmdbQuery(input)).resolves.toEqual(data);
  });
});
