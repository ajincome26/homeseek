import { useState } from 'react'
import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import { useAuth } from '~/contexts/auth.context'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'
import icons from '~/utils/icons'

const { MdOutlineDashboard, AiOutlinePlusCircle } = icons

const MainHeader = () => {
  const { isLoggedIn } = useAuth()
  const [show, setShow] = useState(false)
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
              <span
                className='pt-[11.5px] pb-[11px] px-[14px] bg-primary rounded-tl-lg rounded-bl-lg cursor-pointer'
                onClick={() => setShow((prev) => !prev)}
              >
                <MdOutlineDashboard color='white' />
              </span>
              <Button className='p-[8px] border-[2px] border-primary rounded-tl-none rounded-bl-none font-medium' hover>
                Quản lý tài khoản
              </Button>
              {show && (
                <div
                  className='absolute w-full bg-white rounded-xl overflow-hidden top-[100%] z-10 shadow-lg'
                  ref={dropdownRef}
                  onClick={handleClickOutSide}
                >
                  {menuManage?.length > 0 &&
                    menuManage.map((item) => (
                      <Link
                        to={item.path}
                        key={item.id}
                        className='flex items-center gap-2 p-2 cursor-pointer text-[#f14666] hover:bg-[#f14666] hover:text-white transition-all duration-200 ease-linear'
                      >
                        <span className='text-secondary'>{item.icon}</span>
                        <span className='font-medium'>{item.text}</span>
                      </Link>
                    ))}
                  <div
                    className='flex items-center gap-2 p-2 cursor-pointer text-[#f14666] hover:bg-[#f14666] hover:text-white transition-all duration-200 ease-linear'
                    onClick={() => {
                      dispatch(actions.logout())
                      setShow(false)
                    }}
                  >
                    <span className='text-secondary'>
                      <HiOutlineLogout />
                    </span>
                    <span className='font-medium'>Đăng xuất</span>
                  </div>
                </div>
              )}
            </div>
          </div>
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
