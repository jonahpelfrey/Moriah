import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';

import { OrderFormComponent } from './order-form/order-form.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ContentEditModelDirective } from './content-edit-model.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderFormComponent,
    CustomTableComponent,
    ContentEditModelDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
