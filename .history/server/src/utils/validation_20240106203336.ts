import { Request, Response, NextFunction } from 'express'
import { validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Errors'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req)
    const errors = validationResult(req)
    const errorsObject = errors.mapped()
    const entityError = new EntityError({ errors: {} })
    // nếu mà không có lỗi thì next, tiếp tục request
    if (errors.isEmpty()) {
      return next()
    }
    for (const key in errorsObject) {
      const { msg } = errorsObject[key]
      // trả về lỗi không phải do validate
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorsObject[key]
    }
    // trả về lỗi do validate
    next(entityError)
  }
}
