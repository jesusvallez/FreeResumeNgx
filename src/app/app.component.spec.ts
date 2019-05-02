import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { InfoService } from './services/info.service'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(() => {
    const infoServiceStub = { getJSONInfo: () => ({}) }

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: InfoService, useValue: infoServiceStub }]
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
  })

  it('can load instance', () => {
    expect(component).toBeTruthy()
  })


  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const infoServiceStub: InfoService = fixture.debugElement.injector.get(
        InfoService
      )
      spyOn(infoServiceStub, 'getJSONInfo').and.callThrough()
      component.ngOnInit()
      expect(infoServiceStub.getJSONInfo).toHaveBeenCalled()
    })
  })
})
