import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from './menu.service';


@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu.component.scss']

})
export class MenuItemComponent implements OnInit{
    slug: String;
    public slugName;
    menu = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _menuService: MenuService
    ){}
    ngOnInit(){
        let slug = this.route.snapshot.params['slug'];
        this.slugName   =   slug;
        var menuCata    =   [];
        this._menuService.getMenu()
            .subscribe(resMenuData => this.menu = resMenuData);

    }

    return(cata: String){
        var category    =   cata,
            menuCata    =   [];
        this.menu.forEach(function(element: Element){
            if (element['slug'] === category){
                menuCata.push(element);
            }
        });
        return menuCata;

    }

    back(){
        this.router.navigate(['/menu']);
    }

}