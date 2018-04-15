import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared';

const menuRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'menu',
        component: MenuComponent,
    }
])

@NgModule({
    imports: [
        BrowserModule,
        menuRouting,
        SharedModule
    ],
    declarations: [
        MenuComponent,
    ], 
    providers: []
})

export class MenuModule{}