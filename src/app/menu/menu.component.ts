import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu-page',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
    menu = [];
    i: Number;
    cata: String;
    constructor(
        private router: Router,
        private _menuService: MenuService
    ){}
    ngOnInit(){
        this._menuService.getMenu()
            .subscribe(resMenuData => this.menu = resMenuData);
    }
    return(cata: String){
        var category    =   cata,
            menuCata    =   [];
        this.menu.forEach(function(element: Element){
            if (element['type'] === category){
                menuCata.push(element);
            }
        });
        return menuCata;
    }
}