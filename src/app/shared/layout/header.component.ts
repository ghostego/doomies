import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
    constructor(){}
    collapse    =   false;
    

    navExpand(){
        if (!this.collapse){
            this.collapse   =   true;
    
        } else {
            this.collapse   =   false;
            
        }
    }
}