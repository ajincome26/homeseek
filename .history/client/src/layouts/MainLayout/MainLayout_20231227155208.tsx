import { Outlet } from 'react-router-dom'
import { Categories } from '~/components/Categories'
import Footer from '~/components/Footer/Footer'
import { MainHeader } from '~/components/MainHeader'

const MainLayout = () => {
  return (
    <div className='container'>
      <MainHeader />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
