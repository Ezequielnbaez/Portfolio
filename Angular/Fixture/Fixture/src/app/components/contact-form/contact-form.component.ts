import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Fixture } from 'src/app/models/fixture.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder, private contactService: ContactService) { }
  submitted = false;
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
    const data = {
      name: form.get('Name')?.value,
      surname: form.get('Surname')?.value,
      dni: form.get('Dni')?.value,
      email: form.get('Email')?.value,
      tel: form.get('Tel')?.value
    };
    this.contactService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}

