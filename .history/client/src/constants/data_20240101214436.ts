import { path } from './path'

const { ROOM_FOR_RENT, HOUSE_FOR_RENT, APARTMENT_FOR_RENT, GROUND_FOR_RENT, FIND_A_ROOMATE } = path

export const categories = [
  { name: 'Cho thuê phòng trọ', path: ROOM_FOR_RENT },
  { name: 'Nhà cho thuê', path: HOUSE_FOR_RENT },
  { name: 'Cho thuê căn hộ', path: APARTMENT_FOR_RENT },
  { name: 'Cho thuê mặt bằng', path: GROUND_FOR_RENT },
  { name: 'Tìm người ở ghép', path: FIND_A_ROOMATE }
]
