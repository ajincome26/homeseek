import { path } from './path'
import icons from '~/utils/icons'
import { GenderType, SearchItemType } from '~/types/other.type'

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
  CONTACT,
  UNDER_ONE_MILLION,
  FROM_ONE_TO_TWO_MILLION,
  FROM_TWO_TO_THREE_MILLION,
  FROM_THREE_TO_FIVE_MILLION,
  FROM_FIVE_TO_SEVEN_MILLION,
  FROM_SEVEN_TO_TEN_MILLION,
  FROM_TEN_TO_FIFTEEN_MILLION,
  OVER_FIFTEEN_MILLION,
  UNDER_TWENTY_M2,
  FROM_TWENTY_TO_THIRTY_M2,
  FROM_THIRTY_TO_FIFTY_M2,
  FROM_FIFTY_TO_SEVENTY_M2,
  FROM_SEVENTY_TO_NINETY_M2,
  OVER_NINETY_M2
} = path

export const categories = [
  { id: 1, name: 'Cho thuê phòng trọ', path: ROOM_FOR_RENT },
  { id: 2, name: 'Nhà cho thuê', path: HOUSE_FOR_RENT },
  { id: 3, name: 'Cho thuê căn hộ', path: APARTMENT_FOR_RENT },
  { id: 4, name: 'Cho thuê mặt bằng', path: GROUND_FOR_RENT },
  { id: 5, name: 'Tìm người ở ghép', path: FIND_A_ROOMATE }
] as SearchItemType[]

export const prices = [
  { id: 1, name: 'Dưới 1 triệu', path: UNDER_ONE_MILLION },
  { id: 2, name: 'Từ 1 - 2 triệu', path: FROM_ONE_TO_TWO_MILLION },
  { id: 3, name: 'Từ 2 - 3 triệu', path: FROM_TWO_TO_THREE_MILLION },
  { id: 4, name: 'Từ 3 - 5 triệu', path: FROM_THREE_TO_FIVE_MILLION },
  { id: 5, name: 'Từ 5 - 7 triệu', path: FROM_FIVE_TO_SEVEN_MILLION },
  { id: 6, name: 'Từ 7 - 10 triệu', path: FROM_SEVEN_TO_TEN_MILLION },
  { id: 7, name: 'Từ 10 - 15 triệu', path: FROM_TEN_TO_FIFTEEN_MILLION },
  { id: 8, name: 'Trên 15 triệu', path: OVER_FIFTEEN_MILLION }
] as SearchItemType[]

export const areas = [
  { id: 1, name: 'Dưới 20m2', path: UNDER_TWENTY_M2 },
  { id: 2, name: 'Từ 20 - 30m2', path: FROM_TWENTY_TO_THIRTY_M2 },
  { id: 3, name: 'Từ 30 - 50m2', path: FROM_THIRTY_TO_FIFTY_M2 },
  { id: 4, name: 'Từ 50 - 70m2', path: FROM_FIFTY_TO_SEVENTY_M2 },
  { id: 5, name: 'Từ 70 - 90m2', path: FROM_SEVENTY_TO_NINETY_M2 },
  { id: 6, name: 'Trên 90m2', path: OVER_NINETY_M2 }
] as SearchItemType[]

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
  author: 'Nguyễn Văn Tú (Chủ hệ thống phòng trọ tại Tp. Hà Nội)',
  question: 'Bạn đang có phòng trọ / căn hộ cho thuê?'
}
