import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import { ProductListParams } from '~/types/product.type'
import { useQueryParams } from './useQueryParams'

export type QueryParamsConfig = {
  [key in keyof ProductListParams]: string
}

const useQueryConfig = () => {
  const queryParams: QueryParamsConfig = useQueryParams()
  const { page, limit, order, sort_by, category, exclude, rating_filter, price_max, price_min, name } = queryParams
  const queryParamsConfig: QueryParamsConfig = omitBy(
    {
      page: page || '1',
      limit: limit || '10',
      order: order,
      sort_by: sort_by,
      category: category,
      exclude: exclude,
      rating_filter: rating_filter,
      price_max: price_max,
      price_min: price_min,
      name: name
    },
    isUndefined
  )
  return queryParamsConfig
}

export default useQueryConfig
