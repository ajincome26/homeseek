import { useMutation } from '@tanstack/react-query'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import authApi from '~/apis/auth.api'
import { dataSidebar } from '~/constants/data'
import { useAuth } from '~/contexts/auth.context'
import { getRefreshToken } from '~/utils/auth'
import icons from '~/utils/icons'
import { defaultURL } from '~/utils/utils'

const Sidebar = () => {
  const navigation = useNavigate()
  const { HiOutlineLogout } = icons
  const { setIsLoggedIn, userInfo, setUserInfo } = useAuth()
  const refresh_token = getRefreshToken()

  const active =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm font-semibold bg-[#babdc4]'
  const notActive =
    'flex items-center gap-3 cursor-pointer text-[#394f89] hover:bg-[#babdc4] transition-all duration-200 ease-linear min-w-full p-2 rounded-sm'

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsLoggedIn(false)
      setUserInfo(null)
      navigation('/')
      toast.success('Đăng xuất thành công', { autoClose: 1000 })
    }
  })
  const handleLogout = () => {
    logoutMutation.mutate({ refresh_token })
  }

  return (
    userInfo && (
      <div className='fixed top-[40px] bottom-0 left-0 w-[20%]'>
        <div className='flex gap-3 px-5 pt-5'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden border-[2px] border-fourth shrink-0'>
            <img src={userInfo.avatar || defaultURL} alt='avatar' className='object-cover object-top w-full h-full' />
          </div>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold cr-truncate-1' title={userInfo.username}>
              {userInfo.username}
            </span>
            <span className='text-sm'>{userInfo.phone_number}</span>
          </div>
        </div>
        <div className='px-5 pt-3'>
          <span>Email : </span>
          <span className='font-medium cr-truncate-1' title={userInfo.email}>
            {userInfo.email}
          </span>
        </div>
        <div className='flex flex-col p-3'>
          {dataSidebar?.length > 0 &&
            dataSidebar.map((item) => (
              <NavLink to={item.path} key={item.id} className={({ isActive }) => (isActive ? active : notActive)}>
                <span className='text-[#394f89]'>{item.icon}</span>
                <span>{item.text}</span>
              </NavLink>
            ))}
          <div className={notActive} onClick={handleLogout}>
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
