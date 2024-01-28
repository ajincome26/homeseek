import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import { useAuth } from '~/contexts/auth.context'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'
import icons from '~/utils/icons'

const { MdOutlineDashboard } = icons

const MainHeader = () => {
  const { isLoggedIn } = useAuth()
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
          <div className='flex items-center gap-1'>
            <User />
            <div className='relative flex items-center justify-center'>
              <span className='pt-[12px] pb-[11.2px] px-[14px] bg-primary rounded-tl-lg rounded-bl-lg cursor-pointer'>
                <MdOutlineDashboard color='white' />
              </span>
              <Button className='p-[8px] border-[2px] border-primary rounded-tl-none rounded-bl-none' hover>
                Quản lý tài khoản
              </Button>
            </div>
          </div>
        )}
        <Button to={path.LOGIN} className='p-2 text-white bg-secondary' hover>
          Đăng tin mới
        </Button>
      </div>
    </div>
  )
}

export default MainHeader
