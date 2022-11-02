import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Fixture } from 'src/app/models/fixture.model';
import { ContactService } from 'src/app/services/contact.service';
import { PositionsService } from "../../services/positions.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder, private contactService: ContactService, private appService: PositionsService) { }
  submitted = false;
  error = false;

  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Surname: new FormControl('', [Validators.required]),
      Dni: new FormControl('', [Validators.required]),
      Email: new FormControl('', ([Validators.required, Validators.email])),
      Tel: new FormControl('', ([Validators.required])),
    });
  }


  saveFixture(form: FormGroup) {
    let fixCode = this.appService.getFixtureCode()

    const data = {
      name: form.get('Name')?.value,
      surname: form.get('Surname')?.value,
      dni: form.get('Dni')?.value,
      email: form.get('Email')?.value,
      tel: form.get('Tel')?.value,
      code: fixCode
    };
    this.contactService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.error = false;
        },
        error: (e) => {
          console.log(e);
          this.submitted = false;
          this.error=true;
        }
      });
  }

}

