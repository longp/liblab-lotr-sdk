import { Query } from "../types/query";
import RootService from "./root";
export default class BookService extends RootService {
    protected serviceType = 'book'

    async getChapters(id: string, query?: Query) {
        let endpoint = `${this.serviceType}/${id}/chapter`

        if (query)
            endpoint += `?${this.buildQuery(query)}`

        return await this.apiClient.get(`${endpoint}`);
    }
}