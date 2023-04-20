import { Query } from "../types/query";
import RootService from "./root";
export default class MovieService extends RootService {
    protected serviceType = 'movie'

    async getQuotes(id:string, query?:Query) {

        let endpoint = `${this.serviceType}/${id}/quote`
        
        if(query) 
            endpoint+=`?${this.buildQuery(query)}`
        
        return await this.apiClient.get(`${endpoint}`);
    }
}