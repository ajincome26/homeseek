import { config } from 'dotenv'
import { checkSchema, ParamSchema } from 'express-validator'
import { ObjectId } from 'mongodb'
import HTTP_STATUS from '~/constants/httpStatus'
import { POSTS_MESSAGES, USERS_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { validate } from '~/utils/validation'
config()

export const createPostValidator = validate(
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
      },
      acreage: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.ACREAGE_IS_REQUIRED
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 20
          },
          errorMessage: POSTS_MESSAGES.ACREAGE_LENGTH_MUST_BE_FROM_1_TO_20
        }
      },
      deposit: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.DEPOSIT_IS_REQUIRED
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 20
          },
          errorMessage: POSTS_MESSAGES.DEPOSIT_LENGTH_MUST_BE_FROM_1_TO_20
        }
      },
      target: {
        notEmpty: {
          errorMessage: POSTS_MESSAGES.TARGET_IS_REQUIRED
        },
        isString: {
          errorMessage: POSTS_MESSAGES.TARGET_MUST_BE_A_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 20
          },
          errorMessage: POSTS_MESSAGES.TARGET_LENGTH_MUST_BE_FROM_1_TO_20
        }
      },
      medias: {
        isArray: true,
        custom: {
          options: (value, { req }) => {
            // Yêu cầu mỗi phần tử trong array là string
            if (
              value.some((item: any) => {
                return typeof item !== 'string'
              })
            ) {
              throw new Error(POSTS_MESSAGES.MEDIAS_MUST_BE_AN_ARRAY_OF_STRING)
            }
            return true
          }
        }
      }
    },
    ['body']
  )
)
