import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamilyListComponent } from '../family-list/family-list.component';
import { TableListComponent } from '../table-list/table-list.component';
import { LoginComponent } from '../login/login.component';
import { LandingComponent } from '../landing/landing.component';
import { ElementEditComponent } from '../element-edit/element-edit.component';
import { ElementDetailComponent } from '../element-detail/element-detail.component';
import { RegistrationComponent } from '../registration/registration.component';

import { UserRole } from 'src/domain/user-role';
import { RoleGuard } from '../role.guard';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'tables',
    component: TableListComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'tables/:id',
    component: ElementDetailComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'tables/:id/edit',
    component: ElementEditComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'family',
    component: FamilyListComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
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
