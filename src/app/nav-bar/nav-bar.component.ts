import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navs:any[]=[
    { icon:"account_circle",title:"All Customer",link:"/all-customer"},
    {icon:"sim_card",title:"Validate Sim",link:"/validate-sim"},
    {icon:"verified_user",title:"Validate Customer",link:"/validate-customer"},
    {icon:"update",title:"Validate Customer Details",link:"/validate-customer-details"},
    {icon:"home",title:"Validate ID Proof",link:"/validate-id-proof"},
    {icon:"done_all",title:"Show Special Offers",link:"/special-offers"}
  ]
}
