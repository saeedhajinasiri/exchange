import {conversionRoutes} from "@routes/conversion";
import {fetchApi} from '../fetch'

interface TimeSeriesApiProps {
  base: string
  symbols: string
  start_date: string
  end_date: string
}

const TimeSeriesApi = ({base, symbols, start_date, end_date}: TimeSeriesApiProps) => {
  return fetchApi({
    method: "GET",
    url: conversionRoutes["api.conversion.time-series"],
    params: {
      base: base,
      symbols: symbols,
      start_date: start_date,
      end_date: end_date,
    }
  });
}

export default TimeSeriesApi;
