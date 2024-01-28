export interface ResponseError<Data> {
  message: string
  data?: Data
}
export interface ResponseSuccess<Data> {
  message: string
  result: Data
}
