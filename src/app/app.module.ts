import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersComponent } from './users/users.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HomeComponent } from './home/home.component';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { EndComponent } from './end/end.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    PanelModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
