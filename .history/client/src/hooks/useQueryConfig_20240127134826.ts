import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import { useQueryParams } from './useQueryParams'
import { PostListParams } from '~/types/post.type'

export type QueryParamsConfig = {
  [key in keyof PostListParams]: string
}

const useQueryConfig = () => {
  const queryParams: QueryParamsConfig = useQueryParams()
  const { page, limit, order, sort_by, category, exclude, price_max, price_min, name } = queryParams
  const queryParamsConfig: QueryParamsConfig = omitBy(
    {
      page: page,
      limit: limit,
      order: order,
      sort_by: sort_by,
      category: category,
      exclude: exclude,
      price_max: price_max,
      price_min: price_min,
      name: name
    },
    isUndefined
  )
  return queryParamsConfig
}

export default useQueryConfig
