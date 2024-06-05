import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { ValidateSimComponent } from './validate-sim/validate-sim.component';
import { ValidateCustomerComponent } from './validate-customer/validate-customer.component';
import { ValidateCustomerDetailsComponent } from './validate-customer-details/validate-customer-details.component';
import { UpdateCustomerAddressComponent } from './update-customer-address/update-customer-address.component';
import { ValidateIdProofComponent } from './validate-id-proof/validate-id-proof.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

const routes: Routes = [
  {
    path:"all-customer",
    component:AllCustomerComponent
  },
  {
    path:"validate-sim",
    component:ValidateSimComponent
  },
  {
    path:"validate-customer",
    component:ValidateCustomerComponent
  },
  {
    path:"validate-customer-details",
    component:ValidateCustomerDetailsComponent
  },
  {
    path:"update-customer-address",
    component:UpdateCustomerAddressComponent
  },
  {
    path:"validate-id-proof",
    component:ValidateIdProofComponent
  },
  {
    path:"special-offers",
    component:SpecialOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
