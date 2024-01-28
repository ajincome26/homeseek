import { Link } from 'react-router-dom'
import { SubNavigation } from '../SubNavigation'

const SubHeader = () => {
  return (
    <div className='fixed w-full h-[40px] bg-primary text-white flex items-center gap-12 px-5'>
      <Link to={'/'} className='text-lg font-medium cursor-pointer hover:opacity-50'>
        Home Seek
      </Link>
      <div className='w-[80%]'>
        <SubNavigation />
      </div>
    </div>
  )
}

export default SubHeader
