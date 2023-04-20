export interface Query {
    limit?:number,
    page?:number,
    offset?:number,
    sort?: {
        by:string,
        order: 'asc' | 'desc'
    }
    filter?:Filter
}

export interface Filter {
    match?:{
        field:string,
        value:string
    },
    negmatch?:{
        field:string,
        value:string
    },
    include?:{
        field:string,
        value:string[]
    },
    exclude?:{
        field:string,
        value:string[]
    },
    exists?:string,
    nonexists?:string,
    regex?:{
        field:string,
        regex:string,
        match:boolean
    },
    lesser?:{
        field:string,
        value:string,
        includeEqual:boolean
    },
    greater?:{
        field:string,
        value:string
        includeEqual:boolean
    },
}