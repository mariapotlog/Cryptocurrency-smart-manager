import {
  UserModel,
  AuthService,
  AuthController,
  AuthValidation,
  AuthMiddleware,
  AuthRouter,
} from "@auth"

import {
  CoinService,
  CoinController,
  CoinMiddleware,
  CoinRouter,
  CoinUtils,
} from "@coin"

const Auth = {
  model: UserModel,
  service: AuthService,
  controller: AuthController,
  validation: AuthValidation,
  middleware: AuthMiddleware,
  router: AuthRouter,
}

const Coin = {
  service: CoinService,
  controller: CoinController,
  middleware: CoinMiddleware,
  router: CoinRouter,
  utils: CoinUtils,
}

export { Auth, Coin };