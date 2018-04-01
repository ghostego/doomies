import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
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
    rootRouting,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
