import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamilyListComponent } from '../family-list/family-list.component';
import { TableListComponent } from '../table-list/table-list.component';
import { LoginComponent } from '../login/login.component';
import { LandingComponent } from '../landing/landing.component';
import { ElementEditComponent } from '../element-edit/element-edit.component';
import { ElementDetailComponent } from '../element-detail/element-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'tables',
    component: TableListComponent
  },
  {
    path: 'tables/:id',
    component: ElementDetailComponent
  },
  {
    path: 'tables/:id/edit',
    component: ElementEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'family',
    component: FamilyListComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
