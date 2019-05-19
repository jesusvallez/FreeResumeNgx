import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { InfoService } from '../../services/info.service'
import { ResumeComponent } from './resume.component'

describe('AppComponent', () => {
  let component: ResumeComponent
  let fixture: ComponentFixture<ResumeComponent>

  beforeEach(() => {
    const infoServiceStub = { getJSONInfo: () => ({}) }

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ResumeComponent],
      providers: [{ provide: InfoService, useValue: infoServiceStub }]
    })
    fixture = TestBed.createComponent(ResumeComponent)
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
