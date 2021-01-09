import { useContext, useState } from "react"
import { useQueries } from 'react-query';
import { backendAPI } from "services"
import { CurrencyContext } from 'contexts';

const useMarket = (id, parameters) => {
  const { currency } = useContext(CurrencyContext);
  const [_currency, setCurrency] = useState(currency);

  const hourTo = Math.floor((Date.now() - 4000000) / 1000)
  const hourFrom = Math.floor(Date.now() / 1000);

  if (_currency !== currency) setCurrency(currency)

  const params = { ...parameters, vs_currency: currency, ids: id }

  const result = useQueries([
    { queryKey: `${id}-data-24h`, queryFn: async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "1", interval: "minutely" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-7-days`, queryFn: async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "7", interval: "hourly" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-30-days`, queryFn: async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "30", interval: "daily" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-90-days`, queryFn: async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "90", interval: "daily" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-365-days`, queryFn: async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "365", interval: "daily" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data`, queryFn: async () => await backendAPI.get("/coin/markets", { ...params }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-all-time`, queryFn: async () => await backendAPI.get(`/coin/coin-data/custom/${id}`, { ...params, interval: "daily" }), options: { refetchInterval: 180000 } },
    { queryKey: `${id}-data-1h`, queryFn: async () => await backendAPI.get(`/coin/coin-data/custom/${id}`, { ...params, to: hourTo, from: hourFrom, }), options: { refetchInterval: 180000 } },
  ]);

  if (_currency !== currency) result.map(r => r.refetch())

  const returned = {
    data: {
      day: result[0].data?.data,
      week: result[1].data?.data,
      month: result[2].data?.data,
      quarter: result[3].data?.data,
      year: result[4].data?.data,
      detail: result[5].data?.data,
      allTime: result[6].data?.data,
      hour: result[7].data?.data
    },
    isError: !(!result[0].isError && !result[1].isError && !result[2].isError && !result[3].isError && !result[4].isError && !result[5].isError && !result[6].isError && !result[7].isError),
    isLoading: !(!result[0].isLoading && !result[1].isLoading && !result[2].isLoading && !result[3].isLoading && !result[4].isLoading && !result[5].isLoading && !result[6].isLoading && !result[7].isLoading),
    isSuccess: !(!result[0].isSuccess && !result[1].isSuccess && !result[2].isSuccess && !result[3].isSuccess && !result[4].isSuccess && !result[5].isSuccess && !result[6].isSuccess && !result[7].isSuccess),
    isFetching: !(!result[0].isFetching && !result[1].isFetching && !result[2].isFetching && !result[3].isFetching && !result[4].isFetching && !result[5].isFetching && !result[6].isFetching && !result[7].isFetching),
    // isError: !(result.map(r => !r.isError)),
    // isLoading: !(result.map(r => !r.isLoading)),
    // isSuccess: !(result.map(r => !r.isSuccess)),
    // isFetching: !(result.map(r => !r.isFetching)),
  }
  return returned
}

export default useMarket;
