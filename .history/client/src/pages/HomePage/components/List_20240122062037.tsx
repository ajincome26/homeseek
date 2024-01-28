import { Button } from '~/components/Button'
import { PostItem } from '~/components/PostItem'

const List = () => {
  // useEffect(() => {
  //   const params = []
  //   for (let entry of searchParams.entries()) {
  //     params.push(entry)
  //   }
  //   let searchParamsObject = {}
  //   params.forEach((i) => {
  //     if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
  //       searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
  //     } else searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
  //   })
  //   if (categoryCode) searchParamsObject.categoryCode = categoryCode
  //   dispatch(getPostsLimit(searchParamsObject))
  // }, [searchParams])
  return (
    <div className='border border-[#ccc] p-3 text-primary rounded-md shadow-md'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-3 text-lg font-bold'>Danh sách tin đăng</h1>
        <span>Cập nhật : 05:41 22/01/2024</span>
      </div>
      <span>Tổng 119.868 kết quả</span>
      <div className='flex items-center gap-3 mt-3'>
        <span>Sắp xếp:</span>
        <Button className='text-primary bg-[#ccc] px-[10px] py-[3px]' hover>
          Mặc định
        </Button>
        <Button className='text-primary bg-[#ccc] px-[10px] py-[3px]' hover>
          Mới nhất
        </Button>
        <Button className='text-primary bg-[#ccc] px-[10px] py-[3px]' hover>
          Giá
        </Button>
        <Button className='text-primary bg-[#ccc] px-[10px] py-[3px]' hover>
          Diện tích
        </Button>
        Tăng/Giảm -- VIP sẽ lên đầu
      </div>
      <div className='posts'>
        {/* {posts?.length > 0 &&
          posts.map(() => {
            return <PostItem />
          })} */}
        <PostItem />
      </div>
    </div>
  )
}

export default List
