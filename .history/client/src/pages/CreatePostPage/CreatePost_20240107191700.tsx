import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Address from './components/Address'

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormPost>({
    resolver: yupResolver(postSchema)
  })
  return (
    <div className='p-5 text-black'>
      <h2 className='w-full pb-5 text-3xl font-medium border-b-2'>Đăng tin mới</h2>
      <div className='flex gap-5 mt-10'>
        <form className='flex flex-col gap-10 basis-[60%]'>
          <Address />
        </form>
        <div className='border border-red-300 map basis-[40%]'>MAP</div>
      </div>
    </div>
  )
}

export default CreatePost
