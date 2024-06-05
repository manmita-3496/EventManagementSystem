import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCustomerComponent, ReversePipe } from './all-customer/all-customer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterLink, RouterModule } from '@angular/router';
import { ValidateSimComponent } from './validate-sim/validate-sim.component';
import { ValidateCustomerComponent } from './validate-customer/validate-customer.component';
import { ValidateCustomerDetailsComponent } from './validate-customer-details/validate-customer-details.component';
import { ValidateIdProofComponent } from './validate-id-proof/validate-id-proof.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { UpdateCustomerAddressComponent } from './update-customer-address/update-customer-address.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AllCustomerComponent,
    NavBarComponent,
    ValidateSimComponent,
    ValidateCustomerComponent,
    ValidateCustomerDetailsComponent,
    ValidateIdProofComponent,
    SpecialOffersComponent,
    UpdateCustomerAddressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    RouterLink,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
