import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'

const MainHeader = () => {
  const isLoggedIn = true
  return (
    <div className='w-3/4'>
      <div className='flex items-center justify-between w-full py-3 mx-auto'>
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-[240px] h-[50px] object-contain' />
        </Link>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <span className='mr-2 text-lg font-medium text-primary'>HomeSeek Xin Chào !</span>
            <Button to={path.LOGIN} className='p-2 text-white bg-primary' hover>
              Đăng nhập
            </Button>
            <Button to={path.REGISTER} className='p-2 text-white bg-primary' hover>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
