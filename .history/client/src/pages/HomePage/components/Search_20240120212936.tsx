import { useState } from 'react'
import { SearchItem } from '~/components/SearchItem'
import { categories } from '~/constants/data'
import { CategoryType } from '~/types/other.type'
import icons from '~/utils/icons'

const { HiOutlineBuildingOffice, HiOutlineBackspace } = icons

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState<CategoryType[]>([])
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [queries, setQueries] = useState({})
  const handleShowModal = (content: CategoryType[], name: string, header: string) => {
    setContent(content)
    setName(name)
    setIsShowModal(true)
    setTitle(header)
  }
  return (
    <div className='w-[75%] h-[55px] p-[10px] bg-fourth rounded-lg flex items-center gap-3 mt-3'>
      <span className='basis-1/5' onClick={() => handleShowModal(categories, 'category', 'Chọn loại bất động sản')}>
        <SearchItem text={'Phòng trọ, nhà trọ'} IcBefore={HiOutlineBuildingOffice} IcAfter={HiOutlineBackspace} />
      </span>
      {/* <span className='basis-1/5' onClick={() => handleShowModal(provinces, 'province', 'Chọn tỉnh thành')}>
        <SearchItem
          text={queries.province}
          defaultText={'Toàn quốc'}
          IcBefore={MdOutlinePlace}
          IcAfter={FiChevronRight}
        />
      </span>
      <span className='basis-1/5' onClick={() => handleShowModal(prices, 'price', 'Chọn giá')}>
        <SearchItem text={queries.price} defaultText={'Chọn giá'} IcBefore={TbReportMoney} IcAfter={FiChevronRight} />
      </span>
      <span className='basis-1/5' onClick={() => handleShowModal(areas, 'area', 'Chọn diện tích')}>
        <SearchItem text={queries.area} defaultText={'Chọn diện tích'} IcBefore={BiCrop} IcAfter={FiChevronRight} />
      </span>
      <span className='basis-1/5'>
        <Button
          text='Tìm kiếm'
          padding='p-2'
          textColor='text-white'
          bgColor='bg-third'
          textSize='text-sm'
          fontWeight='font-medium'
          fullWidth
          IcBefore={ImSearch}
          hover
          onClick={handleSearch}
        />
      </span> */}
    </div>
  )
}

export default Search
