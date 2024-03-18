import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../services/data.service";

@Injectable({
    providedIn:'root'
})
export class birdDetailsResolver implements Resolve<any>{

    //Incomplete...
    constructor(private _service:DataService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._service.getAllBirds();
    }

}