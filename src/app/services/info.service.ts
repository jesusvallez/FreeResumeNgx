import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { JSONObject } from '../interfaces/json.interface.js'
import info from '../../assets/json/info.json'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  jsonInfo: JSONObject = info

  constructor() { }

  getJSONInfo (): JSONObject {
    return this.jsonInfo
  }
}
