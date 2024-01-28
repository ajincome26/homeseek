export interface ResponseError<Data> {
  message: {
    location: string
    msg: string
    path: string
    type: string
    value: string
  }
  errors?: Data
}
export interface ResponseSuccess<Data> {
  message: string
  data: Data
}
