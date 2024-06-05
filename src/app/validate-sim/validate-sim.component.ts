import { Component } from '@angular/core';
import { ValidateSimService } from './validate-sim.service';

@Component({
  selector: 'app-validate-sim',
  templateUrl: './validate-sim.component.html',
  styleUrl: './validate-sim.component.css'
})
export class ValidateSimComponent {
  constructor(private validateSim: ValidateSimService) { }
  getUserFormData(data:any)
  {
     this.validateSim.validateSim(data).subscribe({
      next:data=>{
       console.log(data.toString);
     },
     error: (errorMessage) => {
      if(errorMessage.error.message){
        alert(errorMessage.error.message)
      }
      else if(errorMessage.error.text == "Sim Already Active"){
        alert("Subcriber Identiy Module (SIM) already active");
       
      }
      else{
        alert("Sim Validate Successfully");
      }
      console.error('Error message:', errorMessage);
    }
  });
  }
}