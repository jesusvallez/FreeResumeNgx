import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PublicInfoComponent } from './public-info.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

describe('PublicInfoComponent', () => {
  let component: PublicInfoComponent
  let fixture: ComponentFixture<PublicInfoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInfoComponent ],
      imports: [ FontAwesomeModule ]
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
