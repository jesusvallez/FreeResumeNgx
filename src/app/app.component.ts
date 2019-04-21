import { Component, OnInit } from '@angular/core'
import { InfoService } from './services/info.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FreeResumeNgx'
  myJSON = require('../assets/json/info.json')

  constructor(private _info: InfoService) {

  }

  ngOnInit(): void {
    this.myJSON = this._info.getJSONInfo()
  }
}
