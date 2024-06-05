import { Component } from '@angular/core';
import { ValidateIdProofService } from './validate-id-proof.service';

@Component({
  selector: 'app-validate-id-proof',
  templateUrl: './validate-id-proof.component.html',
  styleUrl: './validate-id-proof.component.css'
})
export class ValidateIdProofComponent {
  constructor(private validateId: ValidateIdProofService) { }
  getUserFormData(data:any)
  {
     this.validateId.validateIdProof(data).subscribe({
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
