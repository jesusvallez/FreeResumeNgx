import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AppComponent } from './app.component'
import { PrivateInfoComponent } from './components/private-info/private-info.component'
import { ProfileComponent } from './components/profile/profile.component'
import { PublicInfoComponent } from './components/public-info/public-info.component'
import { ConcatHtmlPipe } from './pipes/concatHtml/concat-html.pipe'
import { SafeHtmlPipe } from './pipes/safeHtml/safe-html.pipe'
import { SafeUrlPipe } from './pipes/safeUrl/safe-url.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PrivateInfoComponent,
    PublicInfoComponent,
    SafeHtmlPipe,
    ConcatHtmlPipe,
    SafeUrlPipe
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
    library.addIconPacks(far)
    library.addIconPacks(fab)
  }
}
