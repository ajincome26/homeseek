import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'

const MainHeader = () => {
  const isLoggedIn = false
  return (
    <div className='w-3/4'>
      <div className='flex items-center justify-between w-full py-3 mx-auto'>
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
                <span className='pt-[14px] pb-[13px] px-[14px] bg-secondary rounded-tl-lg rounded-bl-lg cursor-pointer'></span>
                <Button hover>Quản lý tài khoản</Button>
              </div>
            </div>
          )}
          <Button className='p-2 text-white bg-secondary' hover>
            Đăng tin mới
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
