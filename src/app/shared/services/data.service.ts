import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getAllBirds(){
       return this.http.get('http://localhost:8080/bird/rest/v1/us/getAllBirds');
    }

    createBird(payload:any){
        return this.http.post('http://localhost:8080/bird/rest/v1/us/createBird',payload);
    }

    updateBird(payload:any){
        return this.http.post('http://localhost:8080/bird/rest/v1/us/updateBird',payload);
    }
}