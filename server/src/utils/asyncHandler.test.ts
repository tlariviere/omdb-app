/* eslint-disable jest/expect-expect */
import type { ErrorRequestHandler } from "express";
import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";

import asyncHandler from "./asyncHandler";

describe("Async request handler", () => {
  const mockErrorHandler = jest.fn(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (..._args: Parameters<ErrorRequestHandler>) => {}
  );
  const app = express();
  app.get(
    "/",
    asyncHandler(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error()));
        })
    )
  );
  app.use(mockErrorHandler);

  test("asyncHandler should call express error handler when promise reject", async () => {
    await supertest(app).get("/").expect(500);
  });
});
