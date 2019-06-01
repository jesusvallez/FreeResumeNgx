import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ReactiveFormComponent } from './reactive-form.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormBuilder } from '@angular/forms'

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent
  let fixture: ComponentFixture<ReactiveFormComponent>


  beforeEach(async(() => {
    const formBuilder: FormBuilder = new FormBuilder()

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ReactiveFormComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },

      ]
    })
  }))



  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
