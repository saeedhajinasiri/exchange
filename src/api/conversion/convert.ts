import {conversionRoutes} from "@routes/conversion";
import {fetchApi} from '../fetch'

interface ConvertApiProps {
  amount: number
  from: string
  to: string
}

const ConvertApi = ({amount = 1, from, to}: ConvertApiProps) => {
  return fetchApi({
    method: "GET",
    url: conversionRoutes["api.conversion.convert"],
    params: {
      amount: amount,
      from: from,
      to: to,
    }
  });
}

export default ConvertApi;
