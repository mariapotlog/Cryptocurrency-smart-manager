import { useContext, useState } from "react";
import { useQuery } from 'react-query';
import { backendAPI } from "services"
import { CurrencyContext } from 'contexts';

const usePairsRandom = (page = 1) => {
  const { currency } = useContext(CurrencyContext);
  const [_currency, setCurrency] = useState(currency)
  if (_currency !== currency) {
    setCurrency(currency)
  }
  const params = { page, vs_currency: currency }
  const result = useQuery('random-pairs', async () => await backendAPI.get(`/coin/pairs-random`, params), { refetchInterval: 180000 })
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    status,
    isFetching,
    refetch
  } = result;

  if (_currency !== currency) refetch();

  return {
    coins: isLoading ? [] : data.data,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status
  }
}

export default usePairsRandom;
