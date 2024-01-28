import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import provinceApi from '~/apis/province.api'
import { Button } from '~/components/Button'
import { SearchItem } from '~/components/SearchItem'
import { categories } from '~/constants/data'
import { CategoryType } from '~/types/other.type'
import { Province } from '~/types/province.type'
import icons from '~/utils/icons'
import Modal from './Modal'

const { HiOutlineBuildingOffice, HiOutlineBackspace, MdOutlinePlace, FiChevronRight, TbReportMoney, BiCrop } = icons

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [queries, setQueries] = useState({})
  const [arrMinMax, setArrMinMax] = useState({})
  const [provinces, setProvinces] = useState<Province[]>([])

  const provincesQuery = useQuery({
    queryKey: ['provinces'],
    queryFn: () => provinceApi.getProvinces()
  })

  useEffect(() => {
    if (provincesQuery.data?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProvinces((provincesQuery.data.data as any).results)
    }
  }, [provincesQuery, setProvinces])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShowModal = (name: string, header: string) => {
    setName(name)
    setIsShowModal(true)
    setTitle(header)
  }
  const handleSubmit = () => {}
  // Search
  const handleSearch = () => {}
  return (
    <>
      <div className='container h-[55px] p-[10px] bg-fourth rounded-lg flex items-center gap-3 mt-3'>
        <span className='basis-1/5' onClick={() => handleShowModal('category', 'Chọn loại bất động sản')}>
          <SearchItem text={'Phòng trọ, nhà trọ'} IcBefore={HiOutlineBuildingOffice} IcAfter={HiOutlineBackspace} />
        </span>
        <span className='basis-1/5' onClick={() => handleShowModal('province', 'Chọn tỉnh thành')}>
          <SearchItem
            // text={queries.province}
            defaultText={'Toàn quốc'}
            IcBefore={MdOutlinePlace}
            IcAfter={FiChevronRight}
          />
        </span>
        <span className='basis-1/5' onClick={() => handleShowModal('price', 'Chọn giá')}>
          <SearchItem
            // text={queries.price}
            defaultText={'Chọn giá'}
            IcBefore={TbReportMoney}
            IcAfter={FiChevronRight}
          />
        </span>
        <span className='basis-1/5' onClick={() => handleShowModal('area', 'Chọn diện tích')}>
          <SearchItem
            // text={queries.area}
            defaultText={'Chọn diện tích'}
            IcBefore={BiCrop}
            IcAfter={FiChevronRight}
          />
        </span>
        <span className='basis-1/5'>
          <Button className='w-full p-2 text-sm font-medium text-white bg-secondary' hover onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </span>
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          data={name === 'category' ? categories : provinces}
          name={name}
          title={title}
          handleSubmit={handleSubmit}
          queries={queries}
          arrMinMax={arrMinMax}
        />
      )}
    </>
  )
}

export default Search
