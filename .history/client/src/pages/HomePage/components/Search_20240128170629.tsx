import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import provinceApi from '~/apis/province.api'
import { Button } from '~/components/Button'
import { SearchItem } from '~/components/SearchItem'
import { areas, categories, prices } from '~/constants/data'
import { path } from '~/constants/path'
import useQueryConfig from '~/hooks/useQueryConfig'
import { ArrMinMax, Queries } from '~/types/other.type'
import { Province } from '~/types/province.type'
import icons from '~/utils/icons'
import Modal from './Modal'

const { HiOutlineBuildingOffice, HiOutlineBackspace, MdOutlinePlace, FiChevronRight, TbReportMoney, BiCrop } = icons

const Search = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isShowModal, setIsShowModal] = useState(false)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [queries, setQueries] = useState<Queries>({})
  const [arrMinMax, setArrMinMax] = useState<ArrMinMax>({})
  const [provinces, setProvinces] = useState<Province[]>([])

  const queryParamsConfig = useQueryConfig()

  // useEffect(() => {
  //   if (!location?.pathname.includes(path.POSTS)) {
  //     setArrMinMax({})
  //     setQueries({})
  //   }
  // }, [location, setArrMinMax, setQueries])

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
  // Submit
  const handleSubmit = (query: object, arrMinMax: ArrMinMax) => {
    setQueries((prev) => ({ ...prev, ...query }))
    setIsShowModal(false)
    arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMinMax }))
  }
  // Search
  const handleSearch = () => {
    const queriesArr = Object.entries(queries)
    const queryCodesArr = queriesArr
      .filter((item) => item[0].includes('Number') || item[0].includes('Code')) // có chứa "Number" và "Code" thì giữ lại
      .filter((item) => item[1]) // có giá trị thì giữ lại (loại null)
    const queryCodesObj = Object.fromEntries(
      Object.entries(queries).filter(
        ([key, value]) => !key.includes('Code') && !key.includes('Number') && value !== null
      )
    )
    queryCodesArr.forEach((item) => {
      queryCodesObj[item[0]] = item[1]
    })
    console.log(queryCodesObj)
    return navigate({
      pathname: path.POSTS,
      search: createSearchParams({
        ...queryParamsConfig,
        category: queryCodesObj.category,
        province: queryCodesObj.province,
        price_min: queryCodesObj.priceNumber[0],
        price_max: queryCodesObj.priceNumber[1]
      }).toString()
    })
  }

  return (
    <>
      <div className='container h-[55px] p-[10px] bg-fourth rounded-lg flex items-center gap-3 mt-3'>
        {/* CATEGORY */}
        <span className='basis-1/5' onClick={() => handleShowModal('category', 'Chọn loại bất động sản')}>
          <SearchItem
            text={queries.category || 'Phòng trọ, nhà trọ'}
            IcBefore={HiOutlineBuildingOffice}
            IcAfter={HiOutlineBackspace}
          />
        </span>
        {/* PROVINCE */}
        <span className='basis-1/5' onClick={() => handleShowModal('province', 'Chọn tỉnh thành')}>
          <SearchItem
            text={queries.province}
            defaultText={'Toàn quốc'}
            IcBefore={MdOutlinePlace}
            IcAfter={FiChevronRight}
          />
        </span>
        {/* PRICES */}
        <span className='basis-1/5' onClick={() => handleShowModal('price', 'Chọn giá')}>
          <SearchItem text={queries.price} defaultText={'Chọn giá'} IcBefore={TbReportMoney} IcAfter={FiChevronRight} />
        </span>
        {/* AREAS */}
        <span className='basis-1/5' onClick={() => handleShowModal('area', 'Chọn diện tích')}>
          <SearchItem text={queries.area} defaultText={'Chọn diện tích'} IcBefore={BiCrop} IcAfter={FiChevronRight} />
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
          data={name === 'category' ? categories : name === 'province' ? provinces : name === 'price' ? prices : areas}
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
