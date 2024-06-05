import { Component, NgModule, Pipe, PipeTransform } from '@angular/core';
import { AllCustomerService } from './all-customer.service';


@Pipe({
  name: 'reverse',
})
export class ReversePipe  implements PipeTransform{
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css'
})
export class AllCustomerComponent {
  allCustomerList:any 
  constructor(private allCustomerService : AllCustomerService){

  }
  ngOnInit(): void {
    this.allCustomerService.getAllCustomers().subscribe((data:any)=>{
      console.log(data);
      this.allCustomerList = data;
    })
  }
}
