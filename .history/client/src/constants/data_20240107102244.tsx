import { path } from './path'
import icons from '~/utils/icons'

const { BsPencilSquare, MdOutlineLibraryBooks, TbUserCircle } = icons

const { ROOM_FOR_RENT, HOUSE_FOR_RENT, APARTMENT_FOR_RENT, GROUND_FOR_RENT, FIND_A_ROOMATE } = path

export const categories = [
  { name: 'Cho thuê phòng trọ', path: ROOM_FOR_RENT },
  { name: 'Nhà cho thuê', path: HOUSE_FOR_RENT },
  { name: 'Cho thuê căn hộ', path: APARTMENT_FOR_RENT },
  { name: 'Cho thuê mặt bằng', path: GROUND_FOR_RENT },
  { name: 'Tìm người ở ghép', path: FIND_A_ROOMATE }
]

export const dataManage = [
  {
    id: 1,
    text: 'Đăng tin cho thuê',
    path: '/create',
    icon: <BsPencilSquare />
  },
  {
    id: 2,
    text: 'Quản lý tin đăng',
    path: '/manage',
    icon: <MdOutlineLibraryBooks />
  },
  {
    id: 3,
    text: 'Thông tin tài khoản',
    path: '/profile',
    icon: <TbUserCircle />
  }
]
