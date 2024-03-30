import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Signinuser } from '../../model/Signinuser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user: Signinuser = {username:"",password:"",role:""}
  constructor(private router:Router,private activatedRoute: ActivatedRoute){}
  Register(){
    console.log("success")
    console.log(this.user)
  }
}
