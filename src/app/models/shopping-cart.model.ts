export interface Cart{
    items:Array<CartItem>;
}

export interface CartItem{
    picture: string;
    name: string;
    price: number;
    quantity: number;
    id:number;


}