import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: true,
      retryDelay: 1000,
      staleTime: 1000 * 60
    },
  },
})

export default queryClient;