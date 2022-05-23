import { Component, OnInit } from '@angular/core';
// import { FormInputs } from 'src/app/models/form-inputs.interface';
// import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    // emailValidation: boolean = true;
    // details: FormInputs;

  // constructor(private contact: ContactService) { }
  constructor() { }

  ngOnInit(): void {
  }

  // handleSubmit(details: FormInputs, isValid: any) {
  //   if(isValid) {
  //     alert(details.fullName);
  //   }
  //   this.contact.PostMessage(details)
  //     .subscribe(response => {
  //     location.href = 'https://mailthis.to/confirm'
  //     console.log(response)
  //   }
  //   )
  // }

}
