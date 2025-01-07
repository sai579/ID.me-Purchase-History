export interface Purchases {
    id: number
    location: string
    purchaseDate: string
    category: string
    description: string
    price: number
    name: string
}

export interface TableConfig {
    label: string;
    render?: any;
    sortValue?: any;
}