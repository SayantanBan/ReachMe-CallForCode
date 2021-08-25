import { ServiceProvider } from './../../models/ServiceProvider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-provider-contact-card',
  templateUrl: './provider-contact-card.component.html',
  styleUrls: ['./provider-contact-card.component.scss'],
})
export class ProviderContactCardComponent implements OnInit {
  @Input() provider: ServiceProvider;
  @Output() selectContactCard = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectProvider(id: string) {
    this.selectContactCard.emit(id);
  }

  setProvider(providerId: string) {
    this.selectProvider(providerId);
  }
}
