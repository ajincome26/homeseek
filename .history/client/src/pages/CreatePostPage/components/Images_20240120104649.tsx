import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { MdDriveFolderUpload } from 'react-icons/md'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import postApi from '~/apis/post.api'
import { Loading } from '~/components/Loading'
import { MediaResponse } from '~/types/other.type'

const Images = () => {
  const [imagesPreview, setImagesPreview] = useState<MediaResponse[]>([])
  const [imagesPayload, setImagesPayload] = useState<string[]>([])

  const imageMutation = useMutation({
    mutationFn: (body: FormData) => {
      return postApi.uploadImages(body)
    }
  })
  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList
    const formData = new FormData()
    // Thêm từng file vào FormData
    for (let i = 0; i < files.length; i++) {
      formData.append(`image`, files[i])
    }
    imageMutation.mutate(formData, {
      onSuccess: (data) => {
        const images = data.data.result as MediaResponse[]
        setImagesPreview((prev) => [...prev, ...images]) // VD: thêm 2 ảnh lần đầu, thêm tiếp 1 ảnh => 3 ảnh
        const imageUrls = images.map((image: MediaResponse) => image.url)
        setImagesPayload((prev) => [...prev, ...imageUrls])
      }
    })
  }
  const handleDeleteImage = (image: MediaResponse) => {
    setImagesPreview((prev) => prev.filter((item) => item !== image))
    // setPayload((prev) => ({
    //   ...prev,
    //   images: prev.images?.filter((item) => item !== image)
    // }))
  }
  return (
    <div>
      <div>
        <h2 className='text-2xl font-semibold'>Hình ảnh</h2>
        <p className='my-5'>Upload ảnh tại đây</p>
        <input type='file' id='file' hidden multiple onChange={handleFiles} />
        <label
          className='w-full h-[200px] flex items-center justify-center border-[2px] border-dashed border-red-400 cursor-pointer'
          htmlFor='file'
          title='upload'
        >
          {imageMutation.isPending ? <Loading /> : <MdDriveFolderUpload fontSize={70} color='#fdc318' />}
        </label>
        {/* <small className='text-red-500'>
          {invalidFields?.some((item) => item.name === 'images') &&
            invalidFields?.find((item) => item.name === 'images')?.message}
        </small> */}
      </div>
      <div className='w-full mt-5'>
        <h3 className='inline-block px-4 py-2 mb-5 text-white bg-green-500'>Preview</h3>
        <div className='flex flex-wrap w-full'>
          {imagesPreview?.map((item, index) => (
            <div className='relative w-1/3 border border-white h-[250px]' key={index}>
              <img src={item.url} alt='preview' className='object-cover w-full h-full' />
              <span
                title='delete'
                className='absolute p-2 bg-red-500 rounded-full cursor-pointer top-2 right-2 hover:bg-red-400 cr-transition'
                onClick={() => handleDeleteImage(item)}
              >
                <RiDeleteBin2Fill fontSize={20} color='white' />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Images
