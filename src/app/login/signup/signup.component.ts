import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equalValidate } from 'src/app/share/directive/validate/equal-validate.directive';
import { IAdress } from './model/iadress';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //Validators.pattern('/?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}$/')
  signupForm: FormGroup;
  adrees: IAdress[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      notification: ['No', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]],
      rating: [],
      email2: ['', [Validators.required, Validators.email]],
      emailN: [],
      textN: [],
      sendCatalog: [],
      addresses: this.formBuilder.array([])

    },
      {
        validators: equalValidate
      }
    );
  }

  display: boolean = false;



  temp: string = "";
  onSubmit() {
    //alert(this.signupForm.get('firstName').value)
    this.temp = this.signupForm.value;
    this.display = true;
    this.signupForm.reset();
    this.signupForm.get('notification').setValue("No");
    this.resetAddress();

  }

  sendCatalog() {
    
    if (!this.signupForm.get('sendCatalog').value) {
      console.log("Se agrega", this.signupForm.get('sendCatalog').value);
      this.addAddressForm();
    } else {
      console.log("Se borra", this.signupForm.get('sendCatalog').value);
      this.resetAddress();
    }

  }
  
  resetAddress(){
    
    this.signupForm.controls.addresses = this.formBuilder.array([]);
  }

  deleteAddress(index) {
    let control = <FormArray>this.signupForm.controls.addresses;
    control.removeAt(index)
  }

  addAddressForm() {
    let control = <FormArray>this.signupForm.controls.addresses;
    control.push(
      this.formBuilder.group({
        addressType: [],
        street1: [],
        street2: [],
        cp: [],
        city: ['', Validators.required],
        country: ['', Validators.required],
      })
    )
  }

}
