import fetchJson from "./fetchJson";
import HttpError from "./HttpError";

describe("FetchJson", () => {
  const url = "http://foobar.com";
  const mockJson = jest.fn();
  const mockText = jest.fn();
  const mockFetch = jest.fn((..._args: Parameters<typeof fetchJson>) =>
    Promise.resolve({
      json: mockJson,
      text: mockText,
      ok: true,
      status: 200,
    })
  );
  // @ts-ignore: Type mismatch parts are unused
  global.fetch = mockFetch;

  beforeEach(() => {
    mockJson.mockClear();
    mockText.mockClear();
    mockFetch.mockClear();
  });

  test("fetchJson should use GET method is not specified", async () => {
    await fetchJson(url);
    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch.mock.calls[0][1]).toEqual(
      expect.objectContaining({ method: "GET" })
    );
  });

  test("fetchJson should throw if status not 2xx", async () => {
    const status = 500;
    const message = "Internal server error";
    mockText.mockResolvedValueOnce(message);
    mockFetch.mockResolvedValueOnce({
      json: mockJson,
      text: mockText,
      ok: false,
      status,
    });
    await expect(fetchJson(url)).rejects.toThrow(
      new HttpError(status, message)
    );
  });
});
