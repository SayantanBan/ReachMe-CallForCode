export class SendNotification {
  message: string;
  sendSMS: string;
  requestor: Requestor;
  receivers: Receiver[];
}

export class Requestor {
  Name: string;
  mobileNumber: string;
  PinCode: string;
}

export class Receiver {
  providerId: string;
  Number: string;
}
