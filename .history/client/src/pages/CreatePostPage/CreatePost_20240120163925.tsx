import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import postApi from '~/apis/post.api'
import { Button } from '~/components/Button'
import { Post } from '~/types/post.type'
import { postSchema, PostSchema } from '~/utils/schema'
import Address from './components/Address'
import Images from './components/Images'
import Overview from './components/Overview'

export type FormPost = PostSchema

const CreatePost = () => {
  const navigate = useNavigate()
  const [medias, setMedias] = useState<string[]>([])

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm<FormPost>({
    resolver: yupResolver(postSchema)
  })

  const createPostMutation = useMutation({
    mutationFn: (body: Post) => {
      return postApi.createPost(body)
    }
  })

  const handleCreatePost = (data: FormPost) => {
    createPostMutation.mutate(
      { ...data, medias },
      {
        onSuccess: () => {
          navigate('/')
          toast.success('Tạo mới bài viết thành công', { autoClose: 1000 })
        },
        onError: () => {}
      }
    )
  }
  return (
    <div className='p-5 text-black'>
      <h2 className='w-full pb-5 text-3xl font-medium border-b-2'>Đăng tin mới</h2>
      <div className='flex gap-5 mt-10'>
        <form onSubmit={handleSubmit(handleCreatePost)} className='flex flex-col gap-10 basis-[60%]'>
          <Address register={register} />
          <Overview register={register} control={control} />
          <Images setMedias={setMedias} />
          <Button type='submit' className='px-6 py-3 my-4 text-white uppercase bg-primary' hover>
            Hoàn thành
          </Button>
        </form>
        <div className='border border-red-300 map basis-[40%]'>MAP</div>
      </div>
    </div>
  )
}

export default CreatePost
