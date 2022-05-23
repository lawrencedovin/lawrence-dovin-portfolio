import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormInputs } from 'src/app/models/form-inputs.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    emailValidation: boolean = true;
    details: FormInputs;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(details: FormInputs, isValid: any) {
    if(isValid) {
      alert(details.fullName);
    }
  }

}
