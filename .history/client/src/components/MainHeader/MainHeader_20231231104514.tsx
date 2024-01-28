import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import { useAuth } from '~/contexts/auth.context'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'
import icons from '~/utils/icons'
import { Popover } from '../Popover'
import { BsPencilSquare } from 'react-icons/bs'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { TbUserCircle } from 'react-icons/tb'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import { getRefreshToken } from '~/utils/auth'
import { toast } from 'react-toastify'

const { MdOutlineDashboard, AiOutlinePlusCircle, HiOutlineLogout } = icons
const menuManage = [
  {
    id: 1,
    text: 'Đăng tin cho thuê',
    path: '/he-thong/tao-moi-bai-dang',
    icon: <BsPencilSquare />
  },
  {
    id: 2,
    text: 'Quản lý tin đăng',
    path: '/he-thong/quan-ly-bai-dang',
    icon: <MdOutlineLibraryBooks />
  },
  {
    id: 4,
    text: 'Thông tin tài khoản',
    path: '/he-thong/thong-tin-tai-khoan',
    icon: <TbUserCircle />
  }
]
const MainHeader = () => {
  const { isLoggedIn, setIsLoggedIn, setUserInfo } = useAuth()
  const refreshToken = getRefreshToken()

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsLoggedIn(false)
      setUserInfo(null)
      toast.success('Đăng xuất thành công', { autoClose: 1000 })
    }
  })
  const handleLogout = () => {
    logoutMutation.mutate({ refresh_token: refreshToken })
  }

  return (
    <div className='container flex items-center justify-between w-full py-3 mx-auto'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='w-[240px] h-[50px] object-contain' />
      </Link>
      <div className='flex items-center gap-2'>
        {!isLoggedIn ? (
          <div className='flex items-center gap-1'>
            <span className='mr-2 text-lg font-medium text-primary'>HomeSeek Xin Chào !</span>
            <Button to={path.LOGIN} className='p-2 text-white bg-primary' hover>
              Đăng nhập
            </Button>
            <Button to={path.REGISTER} className='p-2 text-white bg-primary' hover>
              Đăng ký
            </Button>
          </div>
        ) : (
          <>
            <User />

            <Popover
              className='flex items-center justify-center rounded-sm shadow-lg w-52'
              placement='bottom-end'
              popover={
                <>
                  <div className='absolute w-full bg-white rounded-xl overflow-hidden top-[100%] z-10 shadow-lg border'>
                    {menuManage?.length > 0 &&
                      menuManage.map((item) => (
                        <Link
                          to={item.path}
                          key={item.id}
                          className='flex items-center gap-2 p-2 transition-all duration-200 ease-linear cursor-pointer text-sixth hover:bg-sixth hover:text-white'
                        >
                          <span className='text-secondary'>{item.icon}</span>
                          <span className='font-medium'>{item.text}</span>
                        </Link>
                      ))}
                    <div
                      className='flex items-center gap-2 p-2 transition-all duration-200 ease-linear cursor-pointer text-sixth hover:bg-sixth hover:text-white'
                      onClick={handleLogout}
                    >
                      <span className='text-secondary'>
                        <HiOutlineLogout />
                      </span>
                      <span className='font-medium'>Đăng xuất</span>
                    </div>
                  </div>
                </>
              }
            >
              <div className='flex items-center gap-1'>
                <div className='relative flex items-center justify-center'>
                  <span className='pt-[11.5px] pb-[11px] px-[14px] bg-primary rounded-tl-lg rounded-bl-lg cursor-pointer'>
                    <MdOutlineDashboard color='white' />
                  </span>
                  <Button
                    className='p-[8px] border-[2px] border-primary rounded-tl-none rounded-bl-none font-medium'
                    hover
                  >
                    Quản lý tài khoản
                  </Button>
                </div>
              </div>
            </Popover>
          </>
        )}
        <Button to={path.LOGIN} className='p-2 text-white bg-secondary' hover>
          <span className='mr-2'>Đăng tin mới</span>
          <AiOutlinePlusCircle />
        </Button>
      </div>
    </div>
  )
}

export default MainHeader
