import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ResumeComponent } from './components/resume/resume.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ResumeComponent
  },
  {
    path: 'generate',
    loadChildren: './generate-view/generate-view.module#GenerateViewModule'
  }
]

export const appRoutingProviders: any[] = []
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
