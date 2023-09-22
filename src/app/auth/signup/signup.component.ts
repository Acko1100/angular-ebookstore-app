import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  hide = true;

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm){
    if(!this.userService.getUser(form.value.email)) {
        this.errorExists = false;
        var newUser = this.userService.registerUser( form.value.email,
                                                     form.value.password,
                                                     form.value.birthDate);
        this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "Korisnik sa ovom email adresom vec postoji."
    }

  }

  validateRepeatPassword(form: NgForm) { 
    const password = form.value.password;
    const repeatPassword = form.value.repeatPassword; //iz forme se uzimaju vrednosti iz polja password i repeatPassword

    // provera da li su unesene vrednosti jednake
    if (password === repeatPassword) {
      // ako su unese vrednosti jednake provere greske dobijaju vrednost null sto znaci da nema greske i da se sifre poklapaju
      form.controls['repeatPassword'].setErrors(null); 
    } else {
      //Greska ukoliko se sifre ne poklapaju
      form.controls['repeatPassword'].setErrors({ 'passwordMismatch': true });
    }
  }
}
