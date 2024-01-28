import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import postApi from '~/apis/post.api'
import { Button } from '~/components/Button'
import { PostItem } from '~/components/PostItem'
import { path } from '~/constants/path'
import { order as orderConst, sortBy } from '~/constants/post'
import useQueryConfig from '~/hooks/useQueryConfig'
import { PostListParams } from '~/types/post.type'

const List = () => {
  const navigate = useNavigate()
  const queryParamsConfig = useQueryConfig()
  const postsQuery = useQuery({
    queryKey: ['posts', queryParamsConfig],
    queryFn: () => postApi.getPosts(queryParamsConfig as PostListParams)
  })

  const page = Number(queryParamsConfig.page)
  const { sort_by = sortBy.DEFAULT, order = '' } = queryParamsConfig
  // check active
  const isActiveSortBy = (sortByValue: Exclude<PostListParams['sort_by'], undefined>) => {
    return sortByValue === sort_by
  }

  // Scroll Top when paginate
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [postsQuery.data])

  // Xử lý lỗi khi truy cập với page > pageSize
  useEffect(() => {
    if (postsQuery.data?.data.result.length === 0) {
      navigate({
        pathname: path.HOME,
        search: createSearchParams({
          ...queryParamsConfig,
          page: '1'
        }).toString()
      })
    }
  }, [navigate, postsQuery.data?.data.result, queryParamsConfig])
  if (!postsQuery.data) return <></>
  const posts = postsQuery.data.data.result

  return (
    <div className='border border-[#ccc] p-3 text-primary rounded-md shadow-md'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-3 text-lg font-bold'>Danh sách tin đăng</h1>
        <span>Cập nhật : 05:41 27/01/2024</span>
      </div>
      <div className='flex items-center gap-3 mt-3'>
        <span>Sắp xếp:</span>
        {/* onClick={() => handleNavigateSortBy('createdAt')} */}
        <Button
          className={classNames('h-10 px-4 py-2 rounded-md hover:bg-opacity-80', {
            'bg-primary text-white': isActiveSortBy('createdAt'),
            'bg-white': !isActiveSortBy('createdAt')
          })}
          hover
        >
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
        {posts.map((item) => (
          <PostItem key={item.post._id} postWithUser={item} />
        ))}
      </div>
    </div>
  )
}

export default List
