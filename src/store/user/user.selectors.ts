import { configs, GAS_PRICE_GWEI } from '@/constants'
import { StoreTypes } from '@/store'

export function getProfile({ user: { profile } }: StoreTypes) {
  return profile
}

export function getGasPrice({ user: { gasPrice } }: StoreTypes) {
  return configs.isMainnet ? gasPrice : GAS_PRICE_GWEI.testnet
}

export function getCurrencyBalance({ user: { currencyBalances } }: StoreTypes) {
  return currencyBalances
}
