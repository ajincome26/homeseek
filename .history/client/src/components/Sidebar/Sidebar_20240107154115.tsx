import { NavLink } from 'react-router-dom'
import { dataSidebar } from '~/constants/data'
import { useAuth } from '~/contexts/auth.context'
import icons from '~/utils/icons'
import { defaultURL } from '~/utils/utils'

const Sidebar = () => {
  const { HiOutlineLogout } = icons
  const { userInfo } = useAuth()
  const activeStyle =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm font-semibold bg-[#babdc4]'
  const notActiveStyle =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm'
  return (
    userInfo && (
      <div className='fixed top-[40px] bottom-0 left-0 w-[20%]'>
        <div className='flex w-full gap-3 px-5 pt-5'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden border-[2px] border-fourth shrink-0'>
            <img src={userInfo.avatar || defaultURL} alt='avatar' className='object-cover object-top w-full h-full' />
          </div>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold line-clamp-1'>{userInfo.username}</span>
            <span className='text-sm'>{userInfo.phone_number}</span>
          </div>
        </div>
        <div className='px-5 pt-3'>
          <span>Email : </span>
          <span className='font-medium'>{userInfo.email}</span>
        </div>
        <div className='flex flex-col p-3'>
          {dataSidebar?.length > 0 &&
            dataSidebar.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
              >
                <span className='text-[#394f89]'>{item.icon}</span>
                <span>{item.text}</span>
              </NavLink>
            ))}
          <div
            className={notActiveStyle}
            onClick={() => {
              // dispatch(actions.logout())
            }}
          >
            <span className='text-[#394f89]'>
              <HiOutlineLogout />
            </span>
            <span className='font-normal'>Thoát</span>
          </div>
        </div>
      </div>
    )
  )
}

export default Sidebar
