import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ProfileComponent } from './profile.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
