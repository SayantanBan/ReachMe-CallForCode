import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss'],
  preserveWhitespaces: true
})
export class ServiceProviderComponent implements OnInit {
  username: string = '';
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params["username"];
    console.log (this.username);
  }
  onViewProfile(){
    console.log("Name of user is " + this.username);
    this.router.navigateByUrl(`register/${this.username}`);
  }
  onEditProfile(){
    console.log("Name of user is " + this.username);
    this.router.navigateByUrl(`register/${this.username}`);
  }
  onViewActivities(){
    console.log("Name of user is " + this.username);
    this.router.navigateByUrl(`activities/${this.username}`);
  }
}
