import type { AxiosError } from "axios";
import type { Response } from "express";

import RequestError from "./RequestError";

const isAxiosError = (error: Error): error is AxiosError =>
  (error as AxiosError).isAxiosError;

const handleError = (res: Response, err: Error) => {
  if (
    isAxiosError(err) &&
    err.response &&
    typeof err.response.data === "string"
  ) {
    res.status(err.response.status).send(err.response.data);
  } else if (err instanceof RequestError) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
};

export default handleError;
