import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableListComponent } from './table-list/table-list.component';
import { FamilyListComponent } from './family-list/family-list.component';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { RoutingModule } from './routing/routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { ElementEditComponent } from './element-edit/element-edit.component';
import { ElementNewComponent } from './element-new/element-new.component';
import { ElementFormComponent } from './element-form/element-form.component';
import { TableFormComponent } from './table-form/table-form.component';
import { TableNewComponent } from './table-new/table-new.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleDirective } from './role.directive';
import { InvitationComponent } from './invitation/invitation.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    FamilyListComponent,
    LoginComponent,
    LandingComponent,
    LoginComponent,
    ElementDetailComponent,
    ElementEditComponent,
    ElementNewComponent,
    ElementFormComponent,
    TableFormComponent,
    TableNewComponent,
    RegistrationComponent,
    RoleDirective,
    InvitationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RoutingModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
