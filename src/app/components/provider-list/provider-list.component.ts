import { ServiceProvider } from './../../models/ServiceProvider';
import { ReachmeService } from './../../services/reachme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  constructor(private router: Router, private service: ReachmeService) {}

  providers: ServiceProvider[];

  ngOnInit(): void {
    this.service.getServiceProviders().subscribe(
      (result) => {
        this.providers = result.serviceProviders;
        console.log('=====>' + this.providers);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onSendNotification() {
    this.router.navigateByUrl('verify');
  }
}
