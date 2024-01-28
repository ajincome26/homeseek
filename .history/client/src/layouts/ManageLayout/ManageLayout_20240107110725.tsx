import { Outlet } from 'react-router-dom'
import SubHeader from '~/components/SubHeader/SubHeader'

const ManageLayout = () => {
  return (
    <>
      <SubHeader />
      <Outlet />
    </>
  )
}

export default ManageLayout
