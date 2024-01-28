const generateCode = (value) => {
  let output = ''
  // "Thanh pho ha noi" --> "Thanhphohanoi"
  value = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('')
  let merge = value + process.env.phongtro123
  let length = merge.length
  // adc + phongtro123 = adcphongtro123
  for (let i = 0; i < 3; i++) {
    let index = i === 2 ? Math.floor(merge.length / 2 + length / 2) : Math.floor(length / 2)
    output += merge.charAt(index)
    length = index
  }
  return `${value.charAt(2)}${output}`.toUpperCase()
}
