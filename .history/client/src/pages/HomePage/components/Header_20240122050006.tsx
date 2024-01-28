const Header = () => {
  return (
    <div className='flex flex-col w-full h-full gap-3'>
      <div>
        <h1 className='text-secondary text-[28px] font-bold'>{text.HOME_TITLE}</h1>
        <p className='text-gray-500'>{text.HOME_DESCRIPTION}</p>

        <div className='flex justify-center gap-5 py-5'>
          <Province />
        </div>

        <div className='flex w-full gap-5'>
          <div className='w-[70%]'>
            <List />
            <Pagination />
          </div>
          <div className='w-[30%] flex flex-col gap-5'>
            <SidebarItem title='Danh mục cho thuê' content={categories} />
            <SidebarItem title='Xem theo giá' type='priceCode' content={prices} col />
            <SidebarItem title='Xem theo diện tích' type='areaCode' content={areas} col squareMeter />
            <RelatedPost />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
