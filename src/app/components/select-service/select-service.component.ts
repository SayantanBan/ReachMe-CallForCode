import { Service } from './../../models/Service';
import { ReachmeService } from './../../services/reachme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceType } from 'src/app/models/ServiceType';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss'],
})
export class SelectServiceComponent implements OnInit {
  selected = '0';
  serviceType: ServiceType;
  constructor(private router: Router, private service: ReachmeService) {}

  ngOnInit(): void {
    this.service.getServices().subscribe(
      (result) => {
        this.serviceType = result;
        console.log('=====>' + this.serviceType);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onNavigate() {
    this.router.navigateByUrl(`home/${this.selected}`);
  }
}
