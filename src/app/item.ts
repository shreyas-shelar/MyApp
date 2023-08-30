export interface Items {
    status: string;
    items: Item[];
}

export interface Item {
    itemName: string;
    itemPrice: number;
    itemBarCode: string;
    url: string;
}