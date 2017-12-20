import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';
import { FormService } from './services/form.service';

import { LoginComponent } from './login/login.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ContentEditModelDirective } from './content-edit-model.directive';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderFormComponent,
    CustomTableComponent,
    ContentEditModelDirective,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, SearchService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
