export { cookies, attrCookie, getCookie, setCookie, removeCookie } from './cookies'
export { DefineProperty } from './defineProperty'
export { dialog } from './dialog'
export { logger } from './logger'
export { modal } from './modal'
export { notice } from './notice'
export { session, storage } from './storage'
export { setAddress, getRpcUrl } from './web3'

export function isIE(): boolean {
  return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

export function isEqual(a: any, b: any): boolean {
  return a === b || Object.is(a, b)
}

export function isNotEqual(a: any, b: any): boolean {
  return a !== b || !Object.is(a, b)
}

export function generateId(radix: number = 16): string {
  return Math.random().toString(radix).slice(2)
}

export function keyCode(): string {
  return `${1e8}-${1e4}-${1e4}-${1e4}-${1e12}`.replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
}

/**
 * Hidden overflow scroll.
 *
 * @param {boolean} input
 */
export function scrollOff(input: boolean = true): void {
  document.body.style.overflow = input ? 'hidden' : 'auto'
}

/**
 * clone.
 *
 * @param {object|array} input
 */
export function clone(input: any) {
  return JSON.parse(JSON.stringify(input))
}

/**
 * Convert to Upper Case.
 *
 * @param {string} input
 */
export function upperCase(input: string): string {
  return input.toUpperCase()
}

/**
 * Convert to Lower Case.
 *
 * @param {string} input
 */
export function lowerCase(input: string): string {
  return input.toLowerCase()
}

/**
 * Convert to Capitalize.
 *
 * @param {string} input
 */
export function capitalize(input: string): string {
  const array = input.split(/[ ]+/)
  return array
    .map((word) => {
      return `${upperCase(word.charAt(0))}${word.slice(1)}`
    })
    .join(' ')
}

/**
 * Provides a way to easily construct a set of key/value pairs representing form fields and their values,
 * which can then be easily sent using the XMLHttpRequest.send() method.
 *
 * @param {object} data FormData
 */
export function createFormData(data: { [key: string]: any }): [FormData, any] {
  const formData = new FormData()

  for (const name in data) {
    formData.append(name, data[name])
  }

  return [
    formData,
    {
      'Content-Type': 'multipart/form-data'
    }
  ]
}

/**
 * Convert long number into abbreviated string.
 *
 * @param {number} input
 */
export function abbreviateNumber(input: number): number | string {
  if (input < 1e3) return input.toLocaleString()

  const suffixes = ['', 'k', 'm', 'b', 't', 'p', 'e']
  let value = input
  let suffixNum = 0
  while (value >= 1000) {
    value /= 1000
    suffixNum++
  }

  return value.toFixed(2) + suffixes[suffixNum]
}
