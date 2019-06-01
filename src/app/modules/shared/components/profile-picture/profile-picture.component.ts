import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit, OnChanges {

  @Input() photo?: string
  @Input() noImageAvaible?: boolean
  @Input() previewLoadFile?: any

  urlNoImageAvaible = 'assets/no-image-avaible.png'

  constructor() { }

  ngOnInit() { }

  ngOnChanges({ previewLoadFile }: SimpleChanges): void {

  }


}
