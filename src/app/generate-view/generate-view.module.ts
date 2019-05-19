import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { GenerateViewRoutingModule } from './generate-view.routing'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GenerateViewRoutingModule,
    MaterialModule
  ]
})
export class GenerateViewModule { }
