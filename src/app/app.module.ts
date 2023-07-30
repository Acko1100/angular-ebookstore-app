import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-list/book-details/book-details.component';
import { ShoppingCartComponent } from './book-list/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { BookFiltersComponent } from './book-list/book-filters/book-filters.component'
import { BooksComponent } from './book-list/books/books.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    BookListComponent,
    BookDetailsComponent,
    ShoppingCartComponent,
    ProfileComponent,
    BookFiltersComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
