import type { Response } from "express";
import handleError from "./handleError";
import RequestError from "./RequestError";

describe("Handle request error", () => {
  const errMsg = "foobar";
  const mockSend = jest.fn();
  const mockStatus = jest.fn();
  const mockResponse = {
    status: mockStatus.mockReturnThis(),
    send: mockSend.mockReturnThis(),
  } as unknown as Response;

  class MockAxiosError extends Error {
    public isAxiosError = true;
    public response;

    public constructor() {
      super();
      this.name = "RequestError";
      this.response = {
        status: 123,
        data: errMsg,
      };
    }
  }

  beforeEach(() => {
    mockStatus.mockClear();
    mockSend.mockClear();
  });

  test("handleError should return status and body from axios response", () => {
    const error = new MockAxiosError();
    handleError(mockResponse, error);
    expect(mockStatus).toHaveBeenCalledWith(123);
    expect(mockSend).toHaveBeenCalledWith(errMsg);
  });

  test("handleError should return status 4xx on RequestError", () => {
    const status = 418;
    const error = new RequestError(errMsg, status);
    handleError(mockResponse, error);
    expect(mockStatus).toHaveBeenCalledWith(status);
    expect(mockSend).toHaveBeenCalledWith(errMsg);
  });

  test("handleError should return status 500 on other errors", () => {
    const error = new Error(errMsg);
    handleError(mockResponse, error);
    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith(errMsg);
  });
});
