import { Link } from 'react-router-dom'
import { Navigation } from '../Navigation'

const SubHeader = () => {
  return (
    <div className='fixed w-full h-[40px] bg-secondary text-white flex items-center gap-12 px-5'>
      <Link to={'/'} className='text-lg font-medium cursor-pointer'>
        Home Seek
      </Link>
      <div className='w-[80%]'>
        <Navigation />
      </div>
    </div>
  )
}

export default SubHeader
