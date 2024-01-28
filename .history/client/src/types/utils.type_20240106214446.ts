export interface ResponseError<Data> {
  message: string
  errors?: Data
}
export interface ResponseSuccess<Data> {
  message: string
  data: Data
}
