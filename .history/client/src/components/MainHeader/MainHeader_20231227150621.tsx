import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import logo from '../../assets/logo.png'
import { Button } from '../Button'
import User from './components/User'

const MainHeader = () => {
  const isLoggedIn = false
  return (
    <div className='w-3/4'>
      {!isLoggedIn ? (
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
      ) : (
        <div className='flex items-center gap-1'>
          <User />
          <div className='relative flex items-center justify-center'>
            <span
              className='pt-[14px] pb-[13px] px-[14px] bg-secondary rounded-tl-lg rounded-bl-lg cursor-pointer'
              // onClick={() => setShow((prev) => !prev)}
            >
              {/* <MdOutlineDashboard color='white' /> */}
            </span>
            <Button
              // onClick={() => setShow((prev) => !prev)}
              hover
              // border='border-[2px] border-secondary rounded-tl-none rounded-bl-none'
              // padding='p-[8px]'
              // IcAfter={IoMdArrowDropdown}
            >
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
    </div>
  )
}

export default MainHeader
