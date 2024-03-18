import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseURL:any = 'http://localhost:8080/bird/rest/v1/us';

    constructor(private http: HttpClient) { }

    getAllBirds(){
       return this.http.get(this.baseURL+'/getAllBirds');
    }

    createBird(payload:any){
        return this.http.post(this.baseURL+'/createBird',payload);
    }

    updateBird(payload:any){
        return this.http.post(this.baseURL+'/updateBird',payload,{observe:'response'});
    }

    removeBird(payload:any){
        return this.http.post(this.baseURL+'/deleteBird',payload);
    }

    //test
    getAll(){
        return this.http.get(this.baseURL+'/getAllBirds',
        {
            headers: new HttpHeaders({'Custom-Header':'Hello'}),
            params: new HttpParams().set('print','preet'),
            observe: 'response',
            responseType:'json'
        })
    }
}