export const generateCode = (value: string) => {
  let output = ''
  value = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('')
  const merge = value
  let length = merge.length
  for (let i = 0; i < 3; i++) {
    const index = i === 2 ? Math.floor(merge.length / 2 + length / 2) : Math.floor(length / 2)
    output += merge.charAt(index)
    length = index
  }
  return `${value.charAt(2)}${output}`.toUpperCase()
}
