import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProfileComponent } from './profile.component'
import { ProfileInterface } from 'src/app/interfaces/profile.interface'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ProfileComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('call checkImageIsRemoteOrLocal onInit', () => {
    spyOn(component, 'ngOnInit')
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled()
  })

  it('checkImageIsRemoteOrLocal localAsset', () => {
    const profile: ProfileInterface = {
      photo: 'assets/photo.jpg',
      name: 'test',
      ocupation: 'test'
    }

    expect(component.remoteImg).toBeTrue()
    component.profile = profile
    component.checkImageIsRemoteOrLocal()

    expect(component.remoteImg).toBeFalse()
    expect(component.webp).toBe('assets/photo.webp')
    expect(component.jpg).toBe('assets/photo.jpg')
  })

  it('checkImageIsRemoteOrLocal remoteAsset', () => {
    const profile: ProfileInterface = {
      photo: 'https://randomuser.me/api/portraits/men/52.jpg',
      name: 'test',
      ocupation: 'test'
    }

    expect(component.remoteImg).toBeTrue()
    component.profile = profile
    component.checkImageIsRemoteOrLocal()

    expect(component.remoteImg).toBeTrue()
    expect(component.webp).toBeUndefined()
    expect(component.jpg).toBeUndefined()
  })

  it('isARemoteURL is working correctly', () => {
    const options: { url: string; remote: boolean }[] = [
      { url: 'www.google.es/jaja.jpg', remote: true },
      { url: 'https://randomuser.me/api/portraits/men/52.jpg', remote: true },
      { url: 'assets/photo.png', remote: false },
      { url: 'assets/photo.png', remote: false }
    ]

    options.forEach(option => {
      const remoteURL = component.isARemoteURL(option.url)
      expect(option.remote).toBe(
        remoteURL,
        `URL: ${option.url} ##Real: ${remoteURL} -> Expect ${option.remote}`
      )
    })
  })
})
