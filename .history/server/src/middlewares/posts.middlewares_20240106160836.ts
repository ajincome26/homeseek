import { config } from 'dotenv'
import { checkSchema, ParamSchema } from 'express-validator'
import { ObjectId } from 'mongodb'
import HTTP_STATUS from '~/constants/httpStatus'
import { POSTS_MESSAGES, USERS_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { validate } from '~/utils/validation'
config()

const userIdSchema: ParamSchema = {
  custom: {
    options: async (value: string, { req }) => {
      if (!ObjectId.isValid(value)) {
        throw new ErrorWithStatus({
          message: USERS_MESSAGES.INVALID_USER_ID,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
      const user = await databaseService.users.findOne({
        _id: new ObjectId(value)
      })
      if (user === null) {
        throw new ErrorWithStatus({
          message: USERS_MESSAGES.USER_NOT_FOUND,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
    }
  }
}
export const registerValidator = validate(
  checkSchema(
    {
      title: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.TITLE_IS_REQUIRED
        },
        isString: {
          errorMessage: POSTS_MESSAGES.TITLE_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 1000
          },
          errorMessage: POSTS_MESSAGES.TITLE_LENGTH_MUST_BE_FROM_1_TO_1000
        }
      },
      description: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.DESCRIPTION_IS_REQUIRED
        },
        isString: {
          errorMessage: POSTS_MESSAGES.DESCRIPTION_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 10000
          },
          errorMessage: POSTS_MESSAGES.DESCRIPTION_LENGTH_MUST_BE_FROM_1_TO_10000
        }
      },
      address: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.ADDRESS_IS_REQUIRED
        },
        isString: {
          errorMessage: POSTS_MESSAGES.ADDRESS_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 200
          },
          errorMessage: POSTS_MESSAGES.ADDRESS_LENGTH_MUST_BE_FROM_1_TO_200
        }
      },
      category: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.CATEGORY_IS_REQUIRED
        },
        isString: {
          errorMessage: POSTS_MESSAGES.CATEGORY_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 100
          },
          errorMessage: POSTS_MESSAGES.CATEGORY_LENGTH_MUST_BE_FROM_1_TO_100
        }
      },
      user_id: userIdSchema,
      price: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.PRICE_IS_REQUIRED
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 20
          },
          errorMessage: POSTS_MESSAGES.PRICE_LENGTH_MUST_BE_FROM_1_TO_20
        }
      }
    },
    ['body']
  )
)
