import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    //Korisnik je ulogovan -> dozvoli pristup
    if (this.userService.currentUser) {
      return true; 
    } else {
      //Korisnik nije ulogovan -> login page
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
