import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSendNotification() {
    this.router.navigateByUrl('verify');
  }
}
