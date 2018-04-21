import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuFullComponent } from './menu-full.component';
import { MenuItemComponent } from './menu-item.component';
import { SharedModule } from '../shared';

const menuRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'menu',
        component: MenuComponent,
        children: [
            {
                path: '',
                component: MenuFullComponent
            },
            {
                path: ':slug',
                component: MenuItemComponent,
            }
        ]
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
        MenuFullComponent,
        MenuItemComponent
    ], 
    providers: []
})

export class MenuModule{}