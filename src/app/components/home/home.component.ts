import { ReachmeService } from './../../services/reachme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ReachmeService) { }

  ngOnInit(): void {
    this.service.getServiceProviders().subscribe(result=>{
      console.log("Providers:: " + result)
    }, error=>{
      console.log(error.message);
    })

    this.service.getServices().subscribe(result=>{
      console.log("Services:: " + result)
    }, error=>{
      console.log(error.message);
    })
  }

}
