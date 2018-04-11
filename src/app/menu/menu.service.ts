import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class MenuService{
    private _url: string = "/assets/json/menu.json";
    constructor(private _http: Http){}
    getMenu(){
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}