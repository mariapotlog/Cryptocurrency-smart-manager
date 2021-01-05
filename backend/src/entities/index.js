  import {
    CoinService,
    CoinController,
    CoinMiddleware,
    CoinRouter,
    CoinUtils,
  } from "@coin"
  
  const Coin = {
    service: CoinService,
    controller: CoinController,
    middleware: CoinMiddleware,
    router: CoinRouter,
    utils: CoinUtils,
  }
  
  export { Coin };