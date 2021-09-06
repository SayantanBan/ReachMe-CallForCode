import { ReachmeService } from './../../services/reachme.service';
import { SendNotification } from './../../models/SendNotification';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
  private notificationObj: SendNotification = {
    message: 'Need Home delivery for Medicine Fabiflu 200 MG 10 tables.',
    sendSMS: '1',
    requestor: {
      Name: 'Anurag Tyagi',
      mobileNumber: '+9187645123',
      PinCode: '411057',
    },

    receivers: [
      { providerId: '1', Number: '+919960647645' },
      { providerId: '2', Number: '+919903420150' },
    ],
  };

  constructor(private service: ReachmeService) {}

  ngOnInit(): void {}

  sendNotiOnVerification() {
    this.service.sendNotification(this.notificationObj).subscribe(
      (result) => {
        console.log('Response:: ' + result);
      },
      (error) => {
        console.log('Error:: ' + error.getMessage());
      }
    );
  }
}
