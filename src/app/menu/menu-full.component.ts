import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu-page',
    templateUrl: './menu-full.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuFullComponent implements OnInit{
    private route: ActivatedRoute;
    public menuPage: Boolean = true;
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

    onSelect(item){
        this.router.navigate(['/menu', item.slug]);
    }
}