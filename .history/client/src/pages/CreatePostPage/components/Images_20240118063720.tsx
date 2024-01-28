import { useState } from 'react'
import { MdDriveFolderUpload } from 'react-icons/md'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { Loading } from '~/components/Loading'

const Images = () => {
  const [imagesPreview, setImagesPreview] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    setIsLoading(true)
    // let images: string[] = []
    const files = e.target.files as FileList
    const formData = new FormData()
    for (const file of files) {
      formData.append('file', file)
      // formData.append('upload_preset', '1234')
    }
    console.log('files', files)
    setIsLoading(false)
    // setImagesPreview((prev) => [...prev, ...images]) // VD: thêm 2 ảnh lần đầu, thêm tiếp 1 ảnh => 3 ảnh
    // setPayload((prev) => ({ ...prev, images: [...prev.images, ...images] }))
  }
  const handleDeleteImage = (image: string) => {
    // setImagesPreview((prev) => prev.filter((item) => item !== image))
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
          {isLoading ? <Loading /> : <MdDriveFolderUpload fontSize={70} color='#fdc318' />}
        </label>
        {/* <small className='text-red-500'>
          {invalidFields?.some((item) => item.name === 'images') &&
            invalidFields?.find((item) => item.name === 'images')?.message}
        </small> */}
      </div>
      <div className='w-full mt-5'>
        <h3 className='inline-block px-4 py-2 text-white bg-green-500'>Preview</h3>
        <div className='flex flex-wrap w-full'>
          {imagesPreview?.map((item, index) => (
            <div className='relative w-1/3 border border-white h-[250px]' key={index}>
              <img src={item} alt='preview' className='object-cover w-full h-full' />
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
