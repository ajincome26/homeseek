export interface SearchItemType {
  id: number
  name: string
  code: string
  path: string
}
export interface GenderType {
  id: number
  name: string
  value: string
}
export interface MediaResponse {
  url: string
  type: number
}

export interface ArrMinMax {
  priceArr?: number[]
  areaArr?: number[]
}
export interface Queries {
  category?: string
  categoryCode?: string
  province?: string
  provinceCode?: string
  price?: string
  priceCode?: string
  area?: string
  areaCode?: string
}
