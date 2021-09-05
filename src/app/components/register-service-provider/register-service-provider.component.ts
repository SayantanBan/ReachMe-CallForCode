import { ReachmeService } from './../../services/reachme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceType } from 'src/app/models/ServiceType';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-service-provider.component.html',
  styleUrls: ['./register-service-provider.component.scss'],

  preserveWhitespaces: true
})
export class RegisterServiceProviderComponent implements OnInit {
    selected = '0';
    serviceType: ServiceType;
    public selectedTabIndex = 0;
    username: string = '';
    constructor(private router: Router, private route : ActivatedRoute,private service: ReachmeService, private dialog : MatDialog) { }

    ngOnInit(): void {
      this.username = this.route.snapshot.params["username"];
    
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

        onSaveAndMoveNext() {
            // if(confirm("Are you sure to cancel.")) {
            //     console.log("Implement delete functionality here");
            //     this.router.navigateByUrl('home');
            //   }
            switch (this.selectedTabIndex){
                case 0: //Contact
                    //confirm("Saving Contact Details");
                    break;
                case 1: //Service
                    //confirm("Saving Service Details");
                    break;
                case 2://Branch
                    //confirm("Saving Branch Details");
                    break;
                case 3://Other
                    //confirm("Saving Other Details");
                    break;

            }
                
            

            const tabCount = 4;
            this.selectedTabIndex = (this.selectedTabIndex + 1) % tabCount;
            
      }
      onSubmit(){
        console.log("Name of user is " + this.username);
        this.router.navigateByUrl(`serviceProvider/${this.username}`)

      }

      onSearchLocation(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;

            this.dialog.open(MapComponent, dialogConfig);

      }
}
