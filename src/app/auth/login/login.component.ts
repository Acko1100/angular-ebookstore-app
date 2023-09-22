import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Sakrivanje unetih sifri
  hide = true;

  errorExists = false;
  errorText = "";

  constructor (private userService: UserService, private router: Router) {}

  //Cita podatke iz forme
  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);

    //Provera mejla
    if(!user) {
      this.errorExists = true;
      this.errorText = "Ne postoji registrovani korisnik sa ovom email adresom : " + email;
      return;
    }

    //Provera sifre
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Šifra je netačna."
      return;
    }
    
    this.errorExists = false;
    this.router.navigate(['']);
  }

}
