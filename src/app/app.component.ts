import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'influenzar-frontend';
  constructor(private router:Router,private activatedRoute: ActivatedRoute){}
  
  signin(){
    this.router.navigateByUrl('signin');
  }

  login(){
    this.router.navigateByUrl('login');
  }
}
