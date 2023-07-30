import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/shopping-cart.model';
import { CartService } from 'src/app/services/cart.service';
 

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: Cart = {items: [{
    picture: 'https://www.laguna.rs/_img/korice/4683/srpske_zemlje_pre_nemanjica_od_7_do_10_veka-marko_aleksic_v.jpg',
    name: 'Srpske zemlje pre Nemanjica',
    price: 1200,
    quantity: 4,
    id:1,
  },
  {
    picture: 'https://www.laguna.rs/_img/korice/4683/srpske_zemlje_pre_nemanjica_od_7_do_10_veka-marko_aleksic_v.jpg',
    name: 'Srpske zemlje pre Nemanjica',
    price: 1200,
    quantity: 2,
    id:2,
  },]};

  dataSource:Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'picture',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]



  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.cart.subscribe((_cart : Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items
    });
  }


  getTotal(items:Array<CartItem>): number{
     return items.map((item) => item.price * item.quantity)
      .reduce((prev,current) => prev + current, 0)
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item:CartItem): void {
    this.cartService.removeQuantity(item)
  }
}
