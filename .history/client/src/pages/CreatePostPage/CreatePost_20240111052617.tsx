import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/Button'
import { postSchema, PostSchema } from '~/utils/schema'
import Address from './components/Address'
import Overview from './components/Overview'

export type FormPost = PostSchema

const CreatePost = () => {
  const { handleSubmit } = useForm<FormPost>({
    resolver: yupResolver(postSchema)
  })
  const handleCreatePost = (data: FormPost) => {
    console.log('file: CreatePost.tsx:14 ~ handleCreatePost ~ data:', data)
  }
  return (
    <div className='p-5 text-black'>
      <h2 className='w-full pb-5 text-3xl font-medium border-b-2'>Đăng tin mới</h2>
      <div className='flex gap-5 mt-10'>
        <form onSubmit={handleSubmit(handleCreatePost)} className='flex flex-col gap-10 basis-[60%]'>
          <Address />
          <Overview />
          <Button type='submit' className='px-6 py-3 my-4 text-[#3d3d3d] uppercase bg-secondary' hover>
            Đăng nhập
          </Button>
        </form>
        <div className='border border-red-300 map basis-[40%]'>MAP</div>
      </div>
    </div>
  )
}

export default CreatePost
