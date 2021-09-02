import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl('', [Validators.minLength(6), Validators.pattern(/[0-9]/)])
    })
  });


  constructor() { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(form => {
      console.log(this.profileForm)
    })
  }

  onSubmit() {
    console.log(this.profileForm)
  }

}
