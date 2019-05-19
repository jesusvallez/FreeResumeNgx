import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateViewRoutingModule { }
