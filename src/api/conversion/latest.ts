import {conversionRoutes} from "@routes/conversion";
import {fetchApi} from '../fetch'

const LatestApi = () => {
  return fetchApi({
    method: "GET",
    url: conversionRoutes["api.conversion.latest"]
  });
}

export default LatestApi;
