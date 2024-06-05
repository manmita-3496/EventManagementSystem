import { Component } from '@angular/core';
import { ValidateCustomerDetailsService } from './validate-customer-details.service';

@Component({
  selector: 'app-validate-customer-details',
  templateUrl: './validate-customer-details.component.html',
  styleUrl: './validate-customer-details.component.css'
})
export class ValidateCustomerDetailsComponent {
  constructor(private validateCustomer: ValidateCustomerDetailsService) { }
  getUserFormData(data:any)
  {
     this.validateCustomer.validateCustomerDetails(data).subscribe({
      next:data=>{
        alert(data);
       console.log(data);
     },
     error: (errorMessage) => {
      alert("Invalid Details!");
      console.error('Error message:', errorMessage);
  }
});
}
}
