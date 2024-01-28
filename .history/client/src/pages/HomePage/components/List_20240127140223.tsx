import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import postApi from '~/apis/post.api'
import { Button } from '~/components/Button'
import { PostItem } from '~/components/PostItem'
import { path } from '~/constants/path'
import useQueryConfig from '~/hooks/useQueryConfig'
import { PostListParams } from '~/types/post.type'

const List = () => {
  const navigate = useNavigate()
  const queryParamsConfig = useQueryConfig()
  const postsQuery = useQuery({
    queryKey: ['posts', queryParamsConfig],
    queryFn: () => postApi.getPosts(queryParamsConfig as PostListParams)
    // staleTime: 3 * 60 * 1000
    // keepPreviousData: true
  })
  // Scroll Top when paginate
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [postsQuery.data])

  // Xử lý lỗi khi truy cập với page > pageSize
  useEffect(() => {
    if (postsQuery.data?.data.result.posts.length === 0) {
      navigate({
        pathname: path.HOME,
        search: createSearchParams({
          ...queryParamsConfig,
          page: '1'
        }).toString()
      })
    }
  }, [navigate, postsQuery.data?.data.result.posts, queryParamsConfig])

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
