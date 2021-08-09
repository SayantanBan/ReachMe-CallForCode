import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {

  selected = 'option2';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigate() {
    this.router.navigateByUrl('/home')
  }

}
