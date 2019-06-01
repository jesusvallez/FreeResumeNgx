import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routing, appRoutingProviders } from './app.routing'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'

// MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MaterialModule } from '@app/modules/material/material.module'

// COMPONENTS
import { ResumeComponent } from './components/resume/resume.component'
import { ProfileComponent } from './components/profile/profile.component'
import { PrivateInfoComponent } from './components/private-info/private-info.component'
import { PublicInfoComponent } from './components/public-info/public-info.component'

// PIPES
import { SafeHtmlPipe } from './pipes/safeHtml/safe-html.pipe'
import { ConcatHtmlPipe } from './pipes/concatHtml/concat-html.pipe'
import { SafeUrlPipe } from './pipes/safeUrl/safe-url.pipe'

// LIBRARIES
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { SharedModule } from './modules/shared/shared.module'

library.add(fas, far, fab)

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PrivateInfoComponent,
    PublicInfoComponent,
    SafeHtmlPipe,
    ConcatHtmlPipe,
    SafeUrlPipe,
    ResumeComponent
  ],
  imports: [
    Routing,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
