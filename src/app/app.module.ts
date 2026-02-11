import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViveroHomeComponent } from './vivero-home/vivero-home.component';
import { ViveroPlantsComponent } from './vivero-plants/vivero-plants.component';
import { PlantsCartComponent } from './plants-cart/plants-cart.component';
import { ViveroAboutComponent } from './vivero-about/vivero-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {provideHttpClient} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    ViveroHomeComponent,
    ViveroPlantsComponent,
    PlantsCartComponent,
    ViveroAboutComponent,
    InputIntegerComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
