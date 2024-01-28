import { useAuth } from '~/contexts/auth.context'
import { User } from '~/types/user.type'
import { defaultURL } from '~/utils/utils'

const User = () => {
  const { userInfo } = useAuth()
  return (
    <div className='flex items-center justify-center gap-2 mr-10 cursor-pointer'>
      <div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[2px] border-primary'>
        <img src={userInfo?.avatar} alt='avatar' className='object-cover object-top w-full h-full' />
      </div>
      <div>
        <span className='text-[17px] font-semibold text-primary'>{(userInfo as User)?.name}</span>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-primary'>
            {`Số Điện Thoại: `}
            <span className='font-semibold'>{(userInfo as User)?.phone_number}</span>
          </span>
          <span className='mr-2 font-medium text-primary'>
            {`Tài khoản: `}
            <span className='font-semibold'>0 VND</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default User
