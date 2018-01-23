import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AdminComponent } from './admin/admin.component';
import { RoleComponent } from './role/role.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'invoice', component: OrderFormComponent },
	{ path: 'dashboard', component: AdminComponent},
	{ path: 'role', component: RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
