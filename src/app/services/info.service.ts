import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import info from '../../assets/json/info.json'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo () {
    return this.http.get('https://raw.githubusercontent.com/jesusvallez/FreeResumeNgx/master/docs/assets/json/info.json')
  }

  getJSONInfo () {
    return info
  }
}
