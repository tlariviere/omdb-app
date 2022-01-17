import type { OmdbRes } from "./types";
import RequestError from "./RequestError";

const handleOmdbQuery = async (query: Promise<OmdbRes>) => {
  const { Response: response, Error: error, ...data } = await query;

  if (!response || (response === "False" && !error)) {
    throw new Error("Internal error");
  }

  if (response === "False") {
    throw new RequestError(error as string);
  }
  return data;
};

export default handleOmdbQuery;
