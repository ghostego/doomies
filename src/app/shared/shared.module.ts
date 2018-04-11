import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertiesPipe } from './menu-filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ PropertiesPipe ],
    exports: [ PropertiesPipe ]
})

export class SharedModule{}