import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertiesPipe } from './menu-filter.pipe';
import { SidebarComponent } from './layout/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SharedModule{}