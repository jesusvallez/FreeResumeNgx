import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PublicInfoComponent } from './public-info.component'
import { ConcatHtmlPipe } from '@app/pipes/concatHtml/concat-html.pipe'
import { SafeHtmlPipe } from '@app/pipes/safeHtml/safe-html.pipe'
import { SafeUrlPipe } from '@app/pipes/safeUrl/safe-url.pipe'

describe('ProfileComponent', () => {
  let component: PublicInfoComponent
  let fixture: ComponentFixture<PublicInfoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ PublicInfoComponent, ConcatHtmlPipe, SafeHtmlPipe, SafeUrlPipe ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
