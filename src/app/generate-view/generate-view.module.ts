import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { GenerateViewRoutingModule } from './generate-view.routing'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { MaterialModule } from '@app/modules/material/material.module'
import { SharedModule } from '@app/modules/shared/shared.module'

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GenerateViewRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class GenerateViewModule { }
