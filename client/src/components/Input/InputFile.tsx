import { useRef } from 'react'
import { toast } from 'react-toastify'
import { maxSizeAvatar } from '~/utils/utils'

interface Props {
  onChange?: (file?: File) => void
}

const InputFile = ({ onChange }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const handleUpload = () => {
    inputFileRef.current?.click()
  }
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.size >= maxSizeAvatar || !file.type.includes('image'))) {
      toast.error('File không đúng định dạng', { autoClose: 1000 })
    } else {
      onChange && onChange(file)
    }
  }
  return (
    <button
      type='button'
      className='flex items-center justify-center h-10 transition bg-transparent border cursor-pointer w-28 text-third border-grayBox hover:bg-slate-100'
      onClick={handleUpload}
    >
      Chọn ảnh
      <input
        type='file'
        className='hidden'
        accept='.jpg,.jpeg,.png'
        ref={inputFileRef}
        onChange={onFileChange}
        onClick={(e) => (e.target as HTMLInputElement).value}
      />
    </button>
  )
}

export default InputFile
