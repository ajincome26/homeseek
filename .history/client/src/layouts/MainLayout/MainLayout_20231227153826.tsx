import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import { MainHeader } from '~/components/MainHeader'

const MainLayout = () => {
  return (
    <div className='container'>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
