import { Request, Response, NextFunction, RequestHandler } from 'express'

// Mặc định nó dùng paramsDictionary nếu ko dùng <P>. Chú ý khi làm việc với params !
export const wrapRequestHandler = <P>(func: RequestHandler<P>) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
