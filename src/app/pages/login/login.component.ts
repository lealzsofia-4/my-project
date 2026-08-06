import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
  CommonModule,
  FormsModule,
  RouterModule
],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  entrar() {

  console.log(this.usuario);
  console.log(this.senha);



    // LOGIN FAKE PARA TESTE

    if(this.usuario === 'admin' &&
       this.senha === '1234') {

     this.router.navigate(['/dashboard']);

    } else {

      alert('Usuário ou senha incorretos');

    }

  }

}