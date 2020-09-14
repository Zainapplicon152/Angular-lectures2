import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from "./user/user.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminModule } from "./admin/admin.module";
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserlistComponent,
    AdminlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
