import { useState, useContext } from "react";
import { useQuery } from 'react-query';
import { backendAPI } from "services"
import { CurrencyContext } from 'contexts';

const useChartData = (id, page = 1) => {
  const { currency } = useContext(CurrencyContext);
  const [_currency, setCurrency] = useState(currency);

  if (_currency !== currency) setCurrency(currency);

  const params = { page, vs_currency: currency };
  const result = useQuery(`${id}-chart-data`, async () => await backendAPI.get(`/coin/coin-data/${id}`, { ...params, days: "7" }), { refetchInterval: 180000 });
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status,
    refetch
  } = result;

  if (_currency !== currency) refetch();

  return {
    data: isLoading ? [] : data.data,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status,
  }

}

export default useChartData;
