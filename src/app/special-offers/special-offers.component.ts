import { Component } from '@angular/core';
import { SpecialOffersService } from './special-offers.service';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrl: './special-offers.component.css'
})
export class SpecialOffersComponent {
  isVisible:boolean=false;
  simoffer:any;
  constructor(private specialOffersService: SpecialOffersService) { }

  getUserFormData(data:any)
  {
     this.specialOffersService.simoffers(data).subscribe({
      next:data=>{
        this.simoffer = data;
        this.isVisible = true;
       console.log(data);
     },
     error: (errorMessage) => {
      alert("Invalid Details");
      
      console.error('Error message:', errorMessage);
    }
  });
  }
}
