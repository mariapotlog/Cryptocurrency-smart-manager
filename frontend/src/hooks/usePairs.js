import { useState, useContext } from "react";
import { useQuery } from 'react-query';
import { backendAPI } from "services"
import { CurrencyContext, AuthenticationContext } from 'contexts';

const usePairs = (page = 1) => {
  const { currency } = useContext(CurrencyContext);
  const { isLoggedIn, user } = useContext(AuthenticationContext);
  const [_currency, setCurrency] = useState(currency);

  if (_currency !== currency) setCurrency(currency);

  const params = { page, vs_currency: currency, email: isLoggedIn ? user.email : null };
  const result = useQuery('pairs', async () => await backendAPI.get(`/coin/pairs`, params), { refetchInterval: 180000 });

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
    coins: isLoading ? [] : data.data,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status,
  }

}

export default usePairs;
