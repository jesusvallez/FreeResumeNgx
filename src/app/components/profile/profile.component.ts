import { Component, Input, OnInit } from '@angular/core'
import { ProfileInterface } from 'src/app/interfaces/profile.interface'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() public profile: ProfileInterface

  remoteImg = true
  webp: string
  jpg: string

  constructor() {}

  ngOnInit(): void {
    this.checkImageIsRemoteOrLocal()
  }

  checkImageIsRemoteOrLocal() {
    if (this.profile && !this.isARemoteURL(this.profile.photo)) {
      this.remoteImg = false

      if (this.profile && this.profile.photo) {
        const pathSplitted = this.profile.photo.split('.')
        if (pathSplitted.length > 0) {
          pathSplitted.pop()
        }
        const pathWithoutExtension = pathSplitted.join('.')
        this.webp = pathWithoutExtension + '.webp'
        this.jpg = pathWithoutExtension + '.jpg'
      }
    }
  }

  isARemoteURL(string) {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    return regex.test(string)
  }
}
