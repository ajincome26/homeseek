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

export const textContact = {
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

export const textIntro = {
  title: 'Tại sao lại chọn Homeseek ?',
  desc1:
    'Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Homeseek tự hào là trang web đứng top google về các từ khóa: ',
  desc2:
    '... Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn',
  statistic: [
    {
      name: 'Thành viên',
      value: '10.000+'
    },
    {
      name: 'Tin đăng',
      value: '100.000+'
    },
    {
      name: 'Lượt truy cập/tháng',
      value: '300.000+'
    },
    {
      name: 'Lượt xem/tháng',
      value: '500.000+'
    }
  ],
  message: 'Chi phí thấp, hiệu quả tối đa',
  comment:
    'Trước khi biết website Homeseek, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết website Homeseek, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài.',
  author: 'Anh Lôn Thằng (Chủ hệ thống phòng trọ tại Tp. Hà Nội)',
  question: 'Bạn đang có phòng trọ / căn hộ cho thuê?'
}
