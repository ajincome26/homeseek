import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button } from '../Button'

const MainHeader = () => {
  return (
    <div className='w-3/4'>
      <div className='flex items-center justify-between w-full py-3 mx-auto'>
        {' '}
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-[240px] h-[50px] object-contain' />
        </Link>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <span className='mr-2 text-lg font-medium text-secondary'>HomeSeek Xin Chào !</span>
            <Button hover>Dang nhap</Button>
            <Button hover>Dang ky</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
