import { Outlet } from 'react-router-dom'
import { Sidebar } from '~/components/Sidebar'
import SubHeader from '~/components/SubHeader/SubHeader'

const ManageLayout = () => {
  return (
    <>
      <SubHeader />
      <div className='pt-[40px] flex'>
        <div className='min-h-[calc(100vh-40px)] basis-1/5'>
          <Sidebar />
        </div>
        <div className='bg-white basis-4/5'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ManageLayout
