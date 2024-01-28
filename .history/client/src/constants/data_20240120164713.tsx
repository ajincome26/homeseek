import { path } from './path'
import icons from '~/utils/icons'
import { CategoryType, GenderType } from '~/types/other.type'

const { BsPencilSquare, MdOutlineLibraryBooks, TbUserCircle, FaUserEdit, TbBrandMessenger } = icons

const {
  ROOM_FOR_RENT,
  HOUSE_FOR_RENT,
  APARTMENT_FOR_RENT,
  GROUND_FOR_RENT,
  FIND_A_ROOMATE,
  CREATE,
  MANAGE,
  PROFILE,
  CONTACT
} = path

export const categories = [
  { id: 1, name: 'Cho thuê phòng trọ', path: ROOM_FOR_RENT },
  { id: 2, name: 'Nhà cho thuê', path: HOUSE_FOR_RENT },
  { id: 3, name: 'Cho thuê căn hộ', path: APARTMENT_FOR_RENT },
  { id: 4, name: 'Cho thuê mặt bằng', path: GROUND_FOR_RENT },
  { id: 5, name: 'Tìm người ở ghép', path: FIND_A_ROOMATE }
] as CategoryType[]

export const dataManage = [
  {
    id: 1,
    text: 'Đăng tin cho thuê',
    path: CREATE,
    icon: <BsPencilSquare />
  },
  {
    id: 2,
    text: 'Quản lý tin đăng',
    path: MANAGE,
    icon: <MdOutlineLibraryBooks />
  },
  {
    id: 3,
    text: 'Thông tin tài khoản',
    path: PROFILE,
    icon: <TbUserCircle />
  }
]

export const dataSidebar = [
  {
    id: 1,
    text: 'Đăng tin cho thuê',
    path: CREATE,
    icon: <BsPencilSquare />
  },
  {
    id: 2,
    text: 'Quản lý tin đăng',
    path: MANAGE,
    icon: <MdOutlineLibraryBooks />
  },
  {
    id: 3,
    text: 'Sửa thông tin cá nhân',
    path: PROFILE,
    icon: <FaUserEdit />
  },
  {
    id: 4,
    text: 'Liên hệ',
    path: CONTACT,
    icon: <TbBrandMessenger />
  }
]

export const gender = [
  { id: 0, name: 'Tất cả', value: 'All' },
  { id: 1, name: 'Nam', value: 'Male' },
  { id: 2, name: 'Nữ', value: 'female' }
] as GenderType[]

export const text = {
  title: 'Liên hệ với chúng tôi nếu bạn cần hỗ trợ:',
  contact: [
    {
      title: 'Hỗ trợ thanh toán',
      phone: '0866516936',
      zalo: '0866516936'
    },
    {
      title: 'Hỗ trợ đăng tin',
      phone: '0963166114',
      zalo: '0963166114'
    },
    {
      title: 'Hotline 24/7',
      phone: '0562515233',
      zalo: '0562515233'
    }
  ]
}