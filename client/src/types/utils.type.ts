export interface ResponseError<Data> {
  message: string
  errors?: Data
}
export interface ResponseSuccess<Data> {
  message: string
  result: Data
}
// export interface ErrorMSGType {
//   location: string
//   msg: string
//   path: string
//   type: string
//   value: string
// }
