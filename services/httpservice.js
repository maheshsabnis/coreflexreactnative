/* Import axios */
import axios from "axios";

export class HttpService {
    constructor(){
        this.url =  'https://catprdapi.azurewebsites.net/api/Category';
    }

    getCategories(){
        let response = axios.get(this.url);
        return response;
    }
    getCategory(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postCategory(cat){
        let response =axios.post(this.url,cat,{
            headers: {
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    putCategory(id,cat){
        let response =axios.put(`${this.url}/${id}`,cat,{
            headers: {
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    deleteCategory(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}