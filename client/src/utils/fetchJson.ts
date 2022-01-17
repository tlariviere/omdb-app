import type { HttpMethod } from "./types";
import HttpError from "./HttpError";
import fetchDefaultOptions from "../constants/fetchDefaultOptions";

interface FetchOptions extends RequestInit {
  method?: HttpMethod;
}

const fetchJson = async <ResData = unknown>(
  url: string,
  options?: FetchOptions
): Promise<ResData> => {
  const { method = "GET", ...otherOptions } = options ?? {};
  const res = await fetch(url, {
    ...fetchDefaultOptions,
    method,
    ...otherOptions,
  });

  if (!res.ok) {
    throw new HttpError(res.status, await res.text());
  }

  const json = (await res.json()) as ResData;
  return json;
};

export default fetchJson;
