import { TestBed } from '@angular/core/testing'
import { InfoService } from './info.service'
import { JSONObject } from '../interfaces/json.interface'
const data: JSONObject = require('../../assets/json/info.json')

describe('InfoService', () => {

  let service: InfoService

  beforeEach(() => {
    const httpClientStub = { get: () => ({}) }
    TestBed.configureTestingModule({
      providers: [
        InfoService
      ]
    })
    service = TestBed.get(InfoService)
  })

  it('can load instance', () => {
    expect(service).toBeTruthy()
  })

  it('return getJSONInfo', () => {
    expect(service.getJSONInfo()).toEqual(data)
  })
})
