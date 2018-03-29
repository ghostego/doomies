import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{
    constructor(
        private router: Router
    ){}
    hover = false;
    changeImage($event: any){
        if (!this.hover){
            $event.target.src = '/assets/img/missing-out-on-hover.png'; 
            this.hover = true;
        } else {
            $event.target.src = '/assets/img/missing-out-on.png'; 
            this.hover = false;
        }
        
    }
}