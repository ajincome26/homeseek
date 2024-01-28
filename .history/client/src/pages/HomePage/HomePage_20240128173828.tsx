import { categories, textHomeHeader } from '~/constants/data'
import List from './components/List'
import Provinces from './components/Provinces'
import Search from './components/Search'
import SidebarItem from './components/SidebarItem'

const HomePage = () => {
  return (
    <div className='container flex flex-col w-full h-full gap-3'>
      <Search />
      <h1 className='text-primary text-[28px] font-bold'>{textHomeHeader.HOME_TITLE}</h1>
      <p className='text-gray-500'>{textHomeHeader.HOME_DESCRIPTION}</p>

      <div className='flex justify-center gap-5 py-5'>
        <Provinces />
      </div>

      <div className='flex w-full gap-5'>
        <div className='w-[70%]'>
          <List />
          {/* <Pagination /> */}
        </div>
        <div className='w-[30%] flex flex-col gap-5'>
          <SidebarItem title='Danh mục cho thuê' type='' content={categories} />
          <SidebarItem title='Xem theo giá' type='priceCode' content={prices} col />
          <SidebarItem title='Xem theo diện tích' type='areaCode' content={areas} col squareMeter />
          {/* <RelatedPost /> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
