import { TestBed, inject } from '@angular/core/testing'
import { DomSanitizer } from '@angular/platform-browser'
import { SafeHtmlPipe } from './safe-html.pipe'

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe

  beforeEach(() => {
    const domSanitizerStub = { bypassSecurityTrustHtml: () => ({}) }
    TestBed.configureTestingModule({
      providers: [
        SafeHtmlPipe,
        { provide: DomSanitizer, useValue: domSanitizerStub }
      ]
    })
    pipe = TestBed.get(SafeHtmlPipe)
  })

  it('can load instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('should run #transform', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const value = '<table class="testing"></table>'
    const trusted = domSanitizer.bypassSecurityTrustHtml(value)
    expect(pipe.transform(value)).toEqual(trusted)
  }))
})
