import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: 'http', component: HttpTestComponent},
  { path: 'products', component: HttpTestComponent },
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'products/:id/:productName', component: ProductDetailsComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
