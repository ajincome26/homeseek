export interface Province {
  province_id: string
  province_name: string
  province_type: string
}

export interface ResProvinces {
  results: Province[]
}

export interface District {
  district_id: '185'
  district_name: 'Huyện Bắc Sơn'
  district_type: 'Huyện'
  province_id: '20'
}
