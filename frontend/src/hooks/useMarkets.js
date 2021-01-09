import { useContext, useState } from "react"
import { useQuery } from 'react-query';
import { backendAPI } from "services"
import { CurrencyContext } from 'contexts';

const useMarkets = (parameters) => {
  const { currency } = useContext(CurrencyContext);
  const [_currency, setCurrency] = useState(currency)

  if (_currency !== currency) setCurrency(currency)

  const params = { ...parameters, vs_currency: currency }
  const result = useQuery('landing-markets', async () => await backendAPI.get("/coin/markets", params), { refetchInterval: 180000 });

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
  if (_currency !== currency) refetch()
  return {
    coins: isLoading ? [] : data.data,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status,
  }
}

export default useMarkets;
