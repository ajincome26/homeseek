export interface SearchItemType {
  id: number
  name: string
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
  province?: string
  price?: string
  area?: string
}
