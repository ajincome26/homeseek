interface Props {
  htmlFor: string
  children: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label className='mt-2 mb-3 font-semibold cursor-pointer text-secondary' htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
