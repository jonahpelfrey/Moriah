import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';
import { FormService } from './services/form.service';
import { AuthService } from './auth.service';
import { ModelService } from './model.service';

import { LoginComponent } from './login/login.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { CashierComponent } from './cashier/cashier.component';
import { RoleComponent } from './role/role.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderFormComponent,
    CustomTableComponent,
    SignupComponent,
    AdminComponent,
    CashierComponent,
    RoleComponent,
    InvoiceComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, SearchService, FormService, AuthService, ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
