export interface Province {
  province_id: string
  province_name: string
  province_type: string
}

export interface ResProvinces {
  results: Province[]
}

export interface District {
  district_id: string
  district_name: string
  district_type: string
  province_id: string
}

export interface ResDistricts {
  results: District[]
}
