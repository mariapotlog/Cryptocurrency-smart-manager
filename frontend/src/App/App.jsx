import { BrowserRouter, } from 'react-router-dom';
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Box } from '@material-ui/core';

import { CurrencyContextProvider } from "contexts"
import { queryClient } from "config"
import { Navbar } from 'components';

import { useStyles } from './styles';

import Router from './Router';


export default function App() {
  const classes = useStyles();
  queryClient.refetchQueries({ stale: true });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CurrencyContextProvider>
          <Box className={classes.root}>
            <Navbar />
            <Router />
          </Box>
        </CurrencyContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  );
}
