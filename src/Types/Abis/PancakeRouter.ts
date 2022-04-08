import BN from 'bn.js'
import BigNumber from 'bignumber.js'
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext
} from 'ethereum-abi-types-generator'

export interface CallOptions {
  from?: string
  gasPrice?: string
  gas?: number
}

export interface SendOptions {
  from: string
  value?: number | string | BN | BigNumber
  gasPrice?: string
  gas?: number
}

export interface EstimateGasOptions {
  from?: string
  value?: number | string | BN | BigNumber
  gas?: number
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>
  send(options: SendOptions, callback: (error: Error, result: any) => void): PromiEvent<TransactionReceipt>
  estimateGas(options: EstimateGasOptions): Promise<number>
  estimateGas(options: EstimateGasOptions, callback: (error: Error, result: any) => void): Promise<number>
  encodeABI(): string
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>
  call(options: CallOptions): Promise<TCallReturn>
  call(options: CallOptions, callback: (error: Error, result: TCallReturn) => void): Promise<TCallReturn>
  encodeABI(): string
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  PancakeRouter,
  PancakeRouterMethodNames,
  PancakeRouterEventsContext,
  PancakeRouterEvents
>
export type PancakeRouterEvents = undefined
export interface PancakeRouterEventsContext {}
export type PancakeRouterMethodNames = 'factory' | 'getAmountIn' | 'getAmountOut' | 'getAmountsIn' | 'getAmountsOut'
export interface PancakeRouter {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param reserveIn Type: uint256, Indexed: false
   * @param reserveOut Type: uint256, Indexed: false
   */
  getAmountIn(amountOut: string, reserveIn: string, reserveOut: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param reserveIn Type: uint256, Indexed: false
   * @param reserveOut Type: uint256, Indexed: false
   */
  getAmountOut(amountIn: string, reserveIn: string, reserveOut: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   */
  getAmountsIn(amountOut: string, path: string[]): MethodConstantReturnContext<string[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   */
  getAmountsOut(amountIn: string, path: string[]): MethodConstantReturnContext<string[]>
}
