import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(4)]],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      notification:['Yes',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]]

    });
  }

  onSubmit(){
    alert(this.signupForm.get('firstName').value)
    this.signupForm.reset();
  }
}
