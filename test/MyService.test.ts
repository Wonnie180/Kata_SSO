import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(undefined)

    const response = service.handleRequest(new Request('Foo', undefined))

    expect(response.getText()).not.toEqual('hello Foo!')
  })
})
