import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    port:number = 9090;
    baseURL:any = `http://localhost:${this.port}/bird/rest/v1/us`;
    baseURL2:any = `http://localhost:${this.port}/user-bird/rest/v1/us`;

    constructor(private http: HttpClient) { }

    getAllBirds(){
       return this.http.get(this.baseURL+'/getAllBirds');
    }

    createBird(payload:any){
            const formData: FormData = new FormData();
            formData.append('title', payload.title);
            formData.append('subTitle', payload.subTitle);
            formData.append('about', payload.about);
            formData.append('file', payload.image, payload.image.name);
            formData.append('imageName', payload.imageName);
            return this.http.post(this.baseURL+'/createBird', formData);
    }

    updateBird(payload:any){
        const formData: FormData = new FormData();
            formData.append('id', payload.id);
            formData.append('title', payload.title);
            formData.append('subTitle', payload.subTitle);
            formData.append('about', payload.about);
            if(payload.imageName != ""){
                formData.append('file', payload.image, payload.image.name);
                formData.append('imageName', payload.imageName);
            }
           

        return this.http.post(this.baseURL+'/updateBird',formData,{observe:'response'});
    }

    removeBird(payload:any){
        return this.http.post(this.baseURL+'/deleteBird',payload);
    }

    getAll(){
        return this.http.get(this.baseURL+'/getAllBirds',
        {
            headers: new HttpHeaders({'Custom-Header':'Hello'}),
            params: new HttpParams().set('print','preet'),
            observe: 'response',
            responseType:'json'
        })
    }

    createUserBird(payload:any){
        const formData: FormData = new FormData();
        formData.append('birdName',payload.birdName);
        formData.append('birdSubTitle',payload.birdSubTitle);
        formData.append('aboutBird',payload.aboutBird);
        formData.append('userName',payload.userName);
        if(payload.birdImageName != ""){
            formData.append('file',payload.birdImage,payload.birdImage.name);
            formData.append('birdImageName',payload.birdImageName);
        }
        return this.http.post(this.baseURL2+'/createUserBird',formData);
    }

    updateUserBird(payload:any){
        const formData: FormData = new FormData();
        formData.append('id',payload.id);
        formData.append('birdName',payload.birdName);
        formData.append('birdSubTitle',payload.birdSubTitle);
        formData.append('aboutBird',payload.aboutBird);
        formData.append('userName',payload.userName);
       return this.http.post(this.baseURL2+'/updateUserBird',formData);
    }

    getAllNotifications(){
        return this.http.get(this.baseURL2 + '/getAllUserBirds');
    }

    rejectUserBird(payload:any){
        return this.http.post(this.baseURL2+ '/deleteNewBird',payload);
    }
}