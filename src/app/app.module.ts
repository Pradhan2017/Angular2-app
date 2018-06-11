import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import {  HttpModule } from '@angular/http';



const appRoutes: Routes = [
    { path: 'directory', component: DirectoryComponent },
    { path: '',      component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, AppRoutingModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
