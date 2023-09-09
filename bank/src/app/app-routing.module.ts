import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListingComponent } from './pages/clients/clients-listing/clients-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: "",
    component: ClientsListingComponent
  },
  {
    path: "clients",
    component: ClientsListingComponent,
    children: [
      {
        path: "list",
        component: ClientsListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
