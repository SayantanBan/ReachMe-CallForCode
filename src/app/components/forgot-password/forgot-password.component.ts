import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  username: string = '';
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params["username"];
    console.log (this.username);
  }


}
