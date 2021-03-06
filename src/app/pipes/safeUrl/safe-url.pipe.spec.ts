import { TestBed, inject } from '@angular/core/testing'
import { DomSanitizer } from '@angular/platform-browser'
import { SafeUrlPipe } from './safe-url.pipe'

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe

  beforeEach(() => {
    const domSanitizerStub = { bypassSecurityTrustUrl: () => ({}) }
    TestBed.configureTestingModule({
      providers: [
        SafeUrlPipe,
        { provide: DomSanitizer, useValue: domSanitizerStub }
      ]
    })
    pipe = TestBed.get(SafeUrlPipe)
  })

  it('can load instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('should run #transform', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const value = 'javascript:alert(1)'
    const trusted = domSanitizer.bypassSecurityTrustUrl(value)
    expect(pipe.transform(value)).toEqual(trusted)
  }))
})
