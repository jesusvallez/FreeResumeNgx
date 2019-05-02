import { TestBed } from '@angular/core/testing'
import { ConcatHtmlPipe } from './concat-html.pipe'

describe('ConcatHtmlPipe', () => {
  let pipe: ConcatHtmlPipe

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ConcatHtmlPipe] })
    pipe = TestBed.get(ConcatHtmlPipe)
  })

  it('can load instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('transforms X to Y', () => {
    const value: string[] = ['A', 'B', 'C']
    expect(pipe.transform(value)).toEqual('ABC')
  })
})
