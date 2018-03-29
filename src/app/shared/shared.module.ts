import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from '.';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule{}