type Fetcher = {
  requestOptions?: requestOptions;
  body: object | null;
  headers?: Headers;
};

type Method =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

type Credentials = "include" | "omit" | "same-origin";

type Mode = "same-origin" | "cors" | "navigate" | "no-cors";

type requestOptions = {
  method: Method;
  credentials?: Credentials;
  mode?: Mode;
};

type Headers = {
  "Content-Type": string;
};

export const fetcher = async (
  url: string,
  {
    requestOptions = {
      method: "POST",
    },
    body = {},
  }: Fetcher
) => {
  const apiResponse = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...requestOptions,
    body: JSON.stringify(body),
  });
  if (apiResponse.ok) {
    return getJson(apiResponse);
  }
  //TODO: Implement proper error message later. Probably with class extend
  throw apiResponse.status;
};

const getJson = async (res: Response): Promise<unknown | undefined> => {
  const contentType = res.headers.get("Content-Type");
  const emptyCodes = [204, 205];
  if (!emptyCodes.includes(res.status) && contentType?.includes("json")) {
    return res.json();
  } else {
    return undefined;
  }
};
