import { Component, Input } from '@angular/core'
import { ProfileInterface } from '@app/interfaces/profile.interface'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() public profile: ProfileInterface

  constructor() { }
}
