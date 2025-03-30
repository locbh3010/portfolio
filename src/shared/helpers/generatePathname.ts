import { get, replace } from 'lodash'
import queryString from 'query-string'
import { isNotNil } from 'ramda'
import { routes } from '../constants/routes'

type GeneratePathnameParams = {
    route: keyof typeof routes
    query?: Record<string, string | number | boolean | Array<string | number>>
    params?: Record<string | number, string | number>
}

export default function generatePathname({ route, query, params }: GeneratePathnameParams): string {
    let result: string = get(routes, route)

    if (isNotNil(query)) {
        result = queryString.stringifyUrl({
            url: result,
            query,
        })
    }

    if (isNotNil(params)) result = replace(result, /:(\w+)/g, (match, p1: string) => String(params[p1] || match))

    return result
}
