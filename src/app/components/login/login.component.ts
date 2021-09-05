import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  preserveWhitespaces: true
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    
    this.username = this.route.snapshot.params["username"];
    console.log ("User Name is :" + this.username );
  }
  onLogin(){
    console.log("Name of user is " + this.username);
    this.router.navigateByUrl(`serviceProvider/${this.username}`);
  }
  onForgotPassword(){
    this.router.navigateByUrl(`forgotPassword/${this.username}`);
  }
  onRegister(){
    this.router.navigateByUrl('registerUser');
  }

}
