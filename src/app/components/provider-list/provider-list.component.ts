import { ServiceProvider } from './../../models/ServiceProvider';
import { ReachmeService } from './../../services/reachme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  _value: string;
  id: string;
  providers: ServiceProvider[];
  filterProviders: ServiceProvider[];
  serviceType: string = 'PHARMACY';
  selectedProviders: string[] = [];

  constructor(
    private router: Router,
    private service: ReachmeService,
    private route: ActivatedRoute
  ) {}

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value.toLowerCase();
    this.filterProviders = this.value
      ? this.performFilter(this.value)
      : this.providers;

    if (this.filterProviders.length == 0) {
      console.log('second search');
      this.filterProviders = this.value
        ? this.performFilterByName(this.value)
        : this.providers;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('iddddddddddd ' + this.id);

      switch (this.id) {
        case '1':
          this.serviceType = 'PHARMACY';
          break;
        case '2':
          this.serviceType = 'LAB';
          break;
        case '3':
          this.serviceType = 'OXYGEN';
          break;
        case '4':
          this.serviceType = 'HOMEFOOD';
          break;
      }
    });

    this.service.getServiceProviders().subscribe(
      (result) => {
        this.providers = result.serviceProviders.filter(
          (sp) => sp.ServiceType === this.serviceType
        );
        this.filterProviders = this.providers;
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

  addOrRemoveId(providerId: string) {
    if (this.selectedProviders.includes(providerId)) {
      console.log(providerId);
      this.selectedProviders = this.selectedProviders.filter(
        (item) => item != providerId
      );
      console.log('removed');
    } else {
      console.log(providerId);
      this.selectedProviders.push(providerId);
      console.log('added');
    }
  }

  performFilter(filterBy: string) {
    return this.filterProviders.filter(
      (sp: ServiceProvider) => sp.PinCode.indexOf(filterBy) !== -1
    );
  }

  performFilterByName(filterBy: string) {
    return this.providers.filter(
      (sp: ServiceProvider) =>
        sp.ProviderName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  //TODO:: send selected providers notification
  selectProvider() {}

  //TODO:: send selected providers notification
  sendNotification() {}
}
