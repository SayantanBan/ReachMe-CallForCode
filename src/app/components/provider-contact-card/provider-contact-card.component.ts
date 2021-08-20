import { ServiceProvider } from './../../models/ServiceProvider';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-provider-contact-card',
  templateUrl: './provider-contact-card.component.html',
  styleUrls: ['./provider-contact-card.component.scss'],
})
export class ProviderContactCardComponent implements OnInit {
  @Input() provider: ServiceProvider;

  constructor() {}

  ngOnInit(): void {}
}
