import axios from "./axios";

const http = async (
  url: string,
  {
    params = {},
    method = "GET",
    data = {},
    headers = {},
  },
) => {
    return await axios({
        url,
        method,
        params,
        data,
        headers,
    });
};

export default http;
