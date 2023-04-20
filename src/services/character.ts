import { Query } from "../types/query";
import RootService from "./root";
export default class CharacterService extends RootService {
    protected serviceType = 'character'

    async getChapters(id: string, query?: Query) {
        let endpoint = `${this.serviceType}/${id}/quote`

        if (query)
            endpoint += `?${this.buildQuery(query)}`

        return await this.apiClient.get(`${endpoint}`);

    }
}