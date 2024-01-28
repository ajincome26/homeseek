interface Props {
  htmlFor: string
  children: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label className='mt-2 mb-3 font-semibold text-white cursor-pointer' htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
