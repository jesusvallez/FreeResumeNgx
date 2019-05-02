import { Component, Input } from '@angular/core'
import { PrivateInfoInterface } from 'src/app/interfaces/privateInfo.interface'

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss']
})
export class PrivateInfoComponent {
  @Input() public privateInfo: PrivateInfoInterface

  constructor() { }
}
