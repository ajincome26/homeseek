import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/, 'Email không hợp lệ')
      .max(160, 'Email không được vượt quá 160 ký tự')
      .required('Email là bắt buộc'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(50, 'Mật khẩu không được vượt quá 50 ký tự')
      .required('Mật khẩu là bắt buộc'),
    confirm_password: yup
      .string()
      .required('Xác nhận mật khẩu là bắt buộc')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp, hãy thử lại'),
    name: yup.string().max(50, 'Tên không được vượt quá 50 ký tự').required('Tên là bắt buộc'),
    phone_number: yup
      .string()
      .max(20, 'Số điện thoại không được vượt quá 20 chữ số')
      .required('Số điện thoại là bắt buộc'),
    searchValue: yup.string().required().trim()
  })
  .required()

export const userSchema = yup.object({
  name: yup.string().max(50, 'Không được vượt quá 50 ký tự'),
  phone_number: yup.string().max(20, 'Không được vượt quá 20 ký tự'),
  address: yup.string().max(160, 'Không được vượt quá 160 ký tự'),
  date_of_birth: yup.date().max(new Date(), 'Hãy chọn ngày sinh ở quá khứ'),
  avatar: yup.string().max(1000, 'Không được vượt quá 1000 ký tự'),
  password: schema.fields['password'] as yup.StringSchema<string, yup.AnyObject, undefined, ''>,
  new_password: schema.fields['password'] as yup.StringSchema<string, yup.AnyObject, undefined, ''>,
  confirm_password: yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .oneOf([yup.ref('new_password')], 'Mật khẩu không khớp, hãy thử lại')
})

export const postSchema = yup.object({
  title: yup.string().required('Title là bắt buộc').max(1000, 'Title không được vượt quá 1000 ký tự'),
  description: yup
    .string()
    .required('Description là bắt buộc')
    .max(10000, 'Description không được vượt quá 10000 ký tự'),
  address: yup.string().required('Address là bắt buộc').max(200, 'Address không được vượt quá 200 ký tự')
})

export const registerSchema = schema.omit(['searchValue'])
export const loginSchema = schema.omit(['name', 'phone_number', 'confirm_password', 'searchValue'])

export type RegisterSchema = yup.InferType<typeof registerSchema>
export type LoginSchema = yup.InferType<typeof loginSchema>
export type PostSchema = yup.InferType<typeof postSchema>
export type UserSchema = yup.InferType<typeof userSchema>
