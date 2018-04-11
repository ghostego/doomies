import { ModuleWithProviders, NgModule, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, SharedModule } from './shared' 
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(), 
    HomeModule,
    HttpModule,
    MenuModule,
    rootRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
