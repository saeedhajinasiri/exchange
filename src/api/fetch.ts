import axios from 'axios';

interface ConfigProps {
  method: "GET" | "POST" | "PUT" | "DELETE"
  url: string
  params?: any
  responseType?: any
}

const axiosClient = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: `${process.env.API_BASE_URL}/`,
});

export async function fetchApi({method, params, url, responseType = 'json'}: ConfigProps): Promise<any> {
  const CatchFunction = (error: any) => {
    if (error?.response?.status === 404) {
      return {
        notFound: true
      }
    }
    throw error;
  };

  console.log({axiosClient})

  switch (method) {
    case "GET": {
      return (
        axiosClient.get(encodeURI(`${url}`), {
          responseType: responseType,
          params: params,
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }

    case "PUT": {
      return (
        axiosClient.put(encodeURI(`${url}`), params, {
          responseType: responseType,
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }

    case "DELETE": {
      return (
        axiosClient.delete(encodeURI(`${url}`), {
          responseType: responseType,
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }

    case "POST": {
      return (
        axiosClient.post(encodeURI(`${url}`), params, {
          responseType: responseType,
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }
  }
}
