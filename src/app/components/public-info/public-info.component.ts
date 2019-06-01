import { Component, Input } from '@angular/core'
import { PublicInfoInterface } from '@app/interfaces/publicInfo.interface.'

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.scss']
})
export class PublicInfoComponent {
  @Input() public publicInfo: PublicInfoInterface

  constructor() { }
}
