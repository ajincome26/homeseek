import { NavLink } from 'react-router-dom'
import { useAuth } from '~/contexts/auth.context'
import icons from '~/utils/icons'

const Sidebar = () => {
  const { HiOutlineLogout } = icons
  const { userInfo } = useAuth()
  const activeStyle =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm font-semibold bg-[#babdc4]'
  const notActiveStyle =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm'
  return (
    <div className='fixed top-[40px] bottom-0 left-0 w-[20%]'>
      <div className='flex gap-3 px-5 pt-5'>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden border-[2px] border-secondary'>
          <img
            src='https://i.pinimg.com/564x/a2/cb/98/a2cb9857345053e85fa81b25576e05e3.jpg'
            alt='avatar'
            className='object-cover object-top w-full h-full'
          />
        </div>
        <div className='flex flex-col'>
          <span className='text-lg font-semibold'>áncsakcsa</span>
          <span className='text-sm'>5156151</span>
        </div>
      </div>
      <div className='px-5 pt-3'>
        <span>Mã thành viên : </span>
        <span className='font-medium'>xxxx54</span>
      </div>
      <div className='flex flex-col p-3'>
        {/* {menuSidebar?.length > 0 &&
          menuSidebar.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
            >
              <span className='text-[#394f89]'>{item.icon}</span>
              <span>{item.text}</span>
            </NavLink>
          ))} */}
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
}

export default Sidebar
