import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BookListComponent } from "./book-list/book-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { ShoppingCartComponent } from "./book-list/shopping-cart/shopping-cart.component";
import { AuthGuard } from "./auth.guard";



const rute : Routes =
[
    {path:'', component: WelcomeComponent },
    {path:'signup', component: SignupComponent },
    {path:'login', component: LoginComponent },
    {path:'book-list', component: BookListComponent },
    {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'cart',component:ShoppingCartComponent}
    
]

@NgModule
({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule{}