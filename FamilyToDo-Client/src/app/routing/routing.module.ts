import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamilyListComponent } from '../family-list/family-list.component';
import { TableListComponent } from '../table-list/table-list.component';

// import { IssueDetailComponent } from '../issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: 'tables',
    component: TableListComponent
  },
  {
    path: 'family',
    component: FamilyListComponent
  },
  /*{
    path: 'issues/:id',
    component: IssueDetailComponent
  },*/
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