import { Component } from '@angular/core';
import { Loginuser } from '../../model/Loginuser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: Loginuser = {username: "", password: ""};
  constructor(private router:Router,private activatedRoute: ActivatedRoute){}

  submitForm(){
    // this.router.navigateByUrl('login');
    console.log("success")
    console.log(this.user)
  }
}
