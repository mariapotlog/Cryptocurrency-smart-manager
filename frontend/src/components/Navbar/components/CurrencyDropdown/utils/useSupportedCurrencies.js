import { useContext } from 'react';
import { useQuery } from 'react-query';
import { backendAPI } from 'services';
import { AuthenticationContext } from 'contexts';

import { currencies } from "../currencies"

const useSupportedCurrencies = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { data, isLoading, isError, isFetching } = useQuery("currencies-list", async () => await backendAPI.get("/coin/supported-currencies", {
    staleTime: "Infinity"
  }));
  return {
    currencies: isLoggedIn ? (isLoading ? [] : data.data) : currencies,
    isLoading,
    isError,
    isFetching
  }
}

export default useSupportedCurrencies;
