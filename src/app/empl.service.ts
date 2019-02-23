import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmplService {

  constructor(private _http:HttpClient) { }

  datajson:any
  dataapi(dasd){
    return this._http.get("https://api.github.com/search/repositories?q="+dasd).pipe(
      map(res=>{
        return res['items']
      })
    )
  }

}
