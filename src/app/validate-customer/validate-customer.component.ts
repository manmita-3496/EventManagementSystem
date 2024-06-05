import { Component } from '@angular/core';
import { ValidateCustomerService } from './validate-customer.service';

@Component({
  selector: 'app-validate-customer',
  templateUrl: './validate-customer.component.html',
  styleUrl: './validate-customer.component.css'
})
export class ValidateCustomerComponent {
  constructor(private validateCustomer: ValidateCustomerService) { }
  getUserFormData(data:any)
  {
     this.validateCustomer.validateCustomer(data).subscribe({
      next:data=>{
       console.log(data.toString);
     },
     error: (errorMessage) => {
      if(errorMessage.error.message){
        alert(errorMessage.error.message)
      }
      else if(errorMessage.error.text == "Customer already exists !!"){
        alert("Subcriber Identiy Module (Customer) already exists");
       
      }
      else{
        alert("Customer Validated Successfully");
      }
      console.error('Error message:', errorMessage);
    }
  });
  }
}
