import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  username: string = '';
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.queryParamMap.get("username");
  }

  onRegister(){
    console.log("Name of user is " + this.username);
    this.router.navigateByUrl(`login/${this.username}`);
  }

}
