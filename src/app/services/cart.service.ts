import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/shopping-cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CartService{
    cart = new BehaviorSubject<Cart>({items: []});



    constructor (private _snackBar: MatSnackBar) {}


    addToCart(item: CartItem): void{
        const items = [...this.cart.value.items];

        const itemInCart = items.find((_item) => _item.id === item.id);
        
        if(itemInCart) {
            itemInCart.quantity += 1;
        } else{
            items.push(item);
        }
    
        this.cart.next({ items : items });

        this._snackBar.open('1 knjiga dodata u korpu.', 'Zatvori', {duration : 5000})
        
    }


    clearCart(): void {
        this.cart.next({items: [] });
        this._snackBar.open('Korpa je ispražnjena.', 'Zatvori', {duration: 5000});
    }

    removeFromCart(item: CartItem, update = true): Array <CartItem> {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);

        if(update){this.cart.next({ items: filteredItems });
        this._snackBar.open('1 knjiga uklonjena.', 'Zatvori',{duration: 5000});}
        
        return filteredItems;

    } 

    removeQuantity(item: CartItem): void {
        let itemForRemoval: CartItem | undefined;
        let filteredItems = this.cart.value.items.map((_item)=>{
            if(_item.id === item.id) {
                _item.quantity--;

                if(_item.quantity === 0){
                    itemForRemoval = _item;
                }
            }
            return _item;
        });

        if (itemForRemoval){
            filteredItems = this.removeFromCart(itemForRemoval, false);
        }
        this.cart.next({ items:filteredItems });
        this._snackBar.open('1 knjiga uklonjena.', 'Zatvori', {duration: 5000});
        
    }
}