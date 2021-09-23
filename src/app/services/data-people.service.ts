import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPeopleService {

  constructor(private http: HttpClient) {
    
  }

  /**
 * I consult the api and it gets me all the houses
 * @returns Get all the houses
 */
public getAllHouse():  Observable <any>{
  const  urlHouse='http://hp-api.herokuapp.com/api/characters'; 
  return  this.http.get(urlHouse);
}

/**
 * Rearch in api the house that is selected
 * @param selectHouse Receive the selected house
 * @returns The list of members of the selected house
 */
public getAllstudent<student>(selectHouse: string):  Observable <any>{  
  const urlStudent= `http://hp-api.herokuapp.com/api/characters/house/`;
  return  this.http.get<student>(urlStudent +selectHouse);  
}

}
