// Modules
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

// Components
import { ProfilePictureComponent } from '@shared/profile-picture/profile-picture.component'

const components = [
  ProfilePictureComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    components
  ],
  exports: [
    components, CommonModule, FormsModule
  ],
  entryComponents: [],
})
export class SharedModule { }
