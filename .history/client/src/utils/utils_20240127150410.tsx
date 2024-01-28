import axios, { AxiosError, HttpStatusCode, isAxiosError } from 'axios'
import React from 'react'
import icons from './icons'
import { v4 } from 'uuid'
import slugify from 'slugify'
import axiosDefault from 'axios'

const { AiOutlineStar, AiFillStar } = icons
export const defaultURL = 'https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'
export const maxSizeAvatar = 1048576

export function isAxiosUnprocessableEntityError<TFormError>(error: unknown): error is AxiosError<TFormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

// Cú pháp '-?' sẽ loại bỏ undefined của key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

export const getNumbersPrice = (str: string) =>
  str
    .split(' ')
    .map((item) => +item)
    .filter((item) => !item === false)

export const getNumbersArea = (str: string) =>
  str
    .split(' ')
    .map((item) => {
      const matchResult = item.match(/\d+/)
      return matchResult ? +matchResult[0] : null
    })
    .filter((item) => item !== null && item !== 0) as number[]

export const generateNameId = (name: string, id: string) => {
  return `/${slugify(name, { lower: true, strict: true, locale: 'en' })}-i-${id}`
}
export const getIdFromNameId = (nameId: string) => {
  return nameId.split('-i-').slice(-1)[0]
}

// Format Number Used Intl
const formatCurrency = (currency: number) => {
  return Intl.NumberFormat('de-DE', {}).format(currency)
}
// replace handleDotPrice
const formatNumberToSocialStyle = (value: number) => {
  return Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 2 })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}
// replace handleSold

const handleStar = (stars: number, size?: number) => {
  const starsArray: React.ReactNode[] = []
  const starsAmount = +stars
  for (let i = 1; i <= 5; i++) {
    if (starsAmount >= i) {
      starsArray.push(<AiFillStar key={v4()} color='#0891b2' size={size || 16} />)
    } else {
      starsArray.push(<AiOutlineStar key={v4()} color='#0891b2' size={size || 16} />)
    }
  }
  return starsArray
}
const handleRating = (rating: number, size?: number) => {
  const starsArray: React.ReactNode[] = []
  const starsAmount = Math.floor(+rating)
  for (let i = 1; i <= 5; i++) {
    if (starsAmount >= i) {
      starsArray.push(<AiFillStar color='#0891b2' key={i} size={size || 16} />)
    } else {
      if (i - rating < 1) {
        starsArray.push(
          <div className='relative' key={i}>
            <div
              className={`relative z-10 overflow-hidden`}
              style={{
                width: `${(rating - starsAmount) * 100}%`
              }}
            >
              <AiFillStar color='#0891b2' size={size || 16} />
            </div>
            <div className='absolute top-0 right-0'>
              <AiOutlineStar color='#d3d6d6' size={size || 16} />
            </div>
          </div>
        )
      } else {
        starsArray.push(<AiOutlineStar color='#d3d6d6' key={i} size={size || 16} />)
      }
    }
  }
  return starsArray
}
const handleDotPrice = (price: number) => {
  if (price > 9999 && price < 1000000) {
    return `${Math.floor(price / 1000)}.${price % 1000 === 0 ? '000' : price % 1000}`
  } else if (price >= 1000000 && price < 1000000000) {
    const priceToString = String(price)
    return `${Math.floor(price / 1000000)}.${
      Number(priceToString.slice(0, priceToString.length - 3)) % 1000 === 0
        ? '000'
        : Number(priceToString.slice(0, priceToString.length - 3)) % 1000
    }.${priceToString.slice(-3)}`
  }
  return price
}
const handleSold = (sold: number) => {
  if (sold > 999 && sold < 1000000) {
    return `${Math.floor(sold / 1000)}${String(sold).slice(-3).slice(0, 1) === '0' ? '' : ','}${
      String(sold).slice(-3).slice(0, 1) === '0' ? '' : String(sold).slice(-3).slice(0, 1)
    }k`
  }
  return sold
}
const handleDiscount = (beforePrice: number, price: number) => {
  if (beforePrice < price) {
    return Math.round(((price - beforePrice) / beforePrice) * 100)
  }
  const percent = ((beforePrice - price) / beforePrice) * 100
  return Math.round(percent)
}

const getURLAvatar = (imageName?: string) => {
  return `https://api-ecom.duthanhduoc.com/images/${imageName}`
}

export const apiGetPublicProvinces = axios.create({
  baseURL: 'https://vapi.vnappmob.com/api/province/',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const apiGetPublicDistricts = (provinceId: string) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: 'get',
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId || 20}` // default id tránh lỗi fetch
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export {
  handleStar,
  handleRating,
  handleDotPrice,
  handleSold,
  handleDiscount,
  formatCurrency,
  formatNumberToSocialStyle,
  getURLAvatar
}
