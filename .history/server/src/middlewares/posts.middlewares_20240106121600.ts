import { checkSchema } from 'express-validator'
import { POSTS_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

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
      email: {
        isEmail: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_INVALID
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED
        },
        trim: true,
        custom: {
          options: async (value) => {
            const isExistEmail = await usersService.checkExistEmail(value)
            if (isExistEmail) {
              throw new Error(USERS_MESSAGES.EMAIL_ALREADY_EXISTS)
            }
            return true
          }
        }
      }
    },
    ['body']
  )
)
