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
    imgSrc     =   '';
    eventTarget;
    changeImage($event: any, img){
        this.imgSrc         =   img;
        this.eventTarget    =   $event.target;

        if (!this.hover){
            this.eventTarget.src = '/assets/img/' + this.imgSrc + '-hover.png'; 
            this.hover = true;
            
        } else {
            this.eventTarget.src = '/assets/img/' + img + '.png'; 
            this.hover = false;
            
        }
        
    }
}