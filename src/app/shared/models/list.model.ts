export interface Product {
    id?: number;
    name: string;
    count: number;
    status: string;
}

export enum Status {
    bought = "true",
    notBought = "false"
}