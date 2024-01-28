import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import provinceApi from '~/apis/province.api'
import { Select } from '~/components/Select'
const navigate = useNavigate()

const Address = () => {
  // const [data, setData] = useState<Province[]>([])
  // useEffect(() => {
  //   const fetchProvinces = async () => {
  //     const response: Province[] = await provinceApi.getProvinces()
  //     console.log('file: Address.tsx:11 ~ fetchProvinces ~ response:', response)
  //     if (response.status === 200) setData(response.data.results)
  //   }
  //   fetchProvinces()
  // }, [])

  const productsQuery = useQuery({
    queryKey: ['products', queryParamsConfig],
    queryFn: () => provinceApi.getProvinces()
  })
  // Xử lý lỗi khi truy cập với page > pageSize
  useEffect(() => {
    if (productsQuery.data?.data.data.products.length === 0) {
      navigate({
        pathname: path.HOME,
        search: createSearchParams({
          ...queryParamsConfig,
          page: '1'
        }).toString()
      })
    }
  }, [navigate, productsQuery.data?.data.data.products, queryParamsConfig])

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select provinces={data} />
      </div>
    </div>
  )
}

export default Address
