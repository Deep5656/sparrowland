import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    port:number = 8080;
    baseURL:any = `http://localhost:${this.port}/bird/rest/v1/us`;

    constructor(private http: HttpClient) { }

    getAllBirds(){
       return this.http.get(this.baseURL+'/getAllBirds');
    }
    // localhost:8080/bird/rest/v1/us/createBird?title=sparrow&subTitle=sparrowwww&about=redtape
    createBird(payload:any){
        // createBird(title: string, subTitle: string, about: string, file: File) {
            const formData: FormData = new FormData();
            formData.append('title', payload.title);
            formData.append('subTitle', payload.subTitle);
            formData.append('about', payload.about);
            formData.append('file', payload.image, payload.image.name);
          
            return this.http.post(this.baseURL+'/createBird', formData);
          
          
        // return this.http.post(this.baseURL+`/createBird?title=${payload.title}&subTitle=${payload.subTitle}&about=${payload.about}`,payload.image);
    }

    updateBird(payload:any){
        const formData: FormData = new FormData();
            formData.append('id', payload.id);
            formData.append('title', payload.title);
            formData.append('subTitle', payload.subTitle);
            formData.append('about', payload.about);
            formData.append('file', payload.image, payload.image.name);
        return this.http.post(this.baseURL+'/updateBird',formData,{observe:'response'});
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