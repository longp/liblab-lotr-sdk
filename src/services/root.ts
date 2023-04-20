import ApiClient from "../client";
import { Filter, Query } from "../types/query";
export default abstract class RootService {
    protected serviceType: string | undefined
    protected apiClient: ApiClient

    constructor(apiClient: ApiClient, serviceType?: string | undefined) {
        this.apiClient = apiClient
        this.serviceType = serviceType
    }

    async getById(id: string) {
        return await this.apiClient.get(`${this.serviceType}/${id}`);
    }
    async getAll(query?: Query) {

        let endpoint = `${this.serviceType}`

        if (query)
            endpoint += `?${this.buildQuery(query)}`

        return await this.apiClient.get(`${endpoint}`);
    }

    buildQuery(query: Query): string {
        let qs: string[] = []

        if (query.limit)
            qs.push(`limit=${query.limit}`)
        if (query.offset)
            qs.push(`offset=${query.offset}`)
        if (query.page)
            qs.push(`page=${query.page}`)
        if (query.sort) {
            qs.push(`sort=${query.sort.by}:${query.sort.order}`)
        }

        if (query.filter) {
            qs.push(this.buildFilter(query.filter))
        }
        return qs.join('&')
    }

    buildFilter(filter: Filter): string {
        let qs: string[] = []
        if (filter.match) {
            qs.push(`${filter.match.field}=${filter.match.value}`)
        }
        if (filter.negmatch) {
            qs.push(`${filter.negmatch.field}!=${filter.negmatch.value}`)
        }
        if (filter.match) {
            qs.push(`${filter.match.field}=${filter.match.value}`)
        }
        if (filter.include) {
            qs.push(`${filter.include.field}=${filter.include.value.join(',')}`)
        }
        if (filter.exclude) {
            qs.push(`${filter.exclude.field}!=${filter.exclude.value.join(',')}`)
        }
        if (filter.exists) {
            qs.push(`${filter.exists}`)
        }
        if (filter.nonexists) {
            qs.push(`!${filter.nonexists}`)
        }
        if (filter.regex) {
            if (filter.regex.match) {
                qs.push(`${filter.regex.field}=${filter.regex.regex}`)
            }
            else {
                qs.push(`${filter.regex.field}!=${filter.regex.regex}`)

            }
        }
        if (filter.lesser) {
            if (filter.lesser.includeEqual) {
                qs.push(`${filter.lesser.field}<=${filter.lesser.value}`)
            }
            else {
                qs.push(`${filter.lesser.field}<${filter.lesser.value}`)
            }
        }
        if (filter.greater) {
            if (filter.greater.includeEqual) {
                qs.push(`${filter.greater.field}<=${filter.greater.value}`)
            }
            else {
                qs.push(`${filter.greater.field}<${filter.greater.value}`)
            }
        }

        return qs.join('&')
    }
}