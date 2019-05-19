import { Component, OnInit } from '@angular/core'
import { JSONObject } from 'src/app/interfaces/json.interface'
import { InfoService } from 'src/app/services/info.service'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  myJSON: JSONObject

  constructor(private _info: InfoService) { }

  ngOnInit(): void {
    this.myJSON = this._info.getJSONInfo()
  }
}
