import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.scss']
})
export class DynamicReactiveFormComponent {
  hobbiesForm = this.fb.group({
    firstName: [''],
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });

  get hobbies() {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.hobbiesForm.value);
  }

}
