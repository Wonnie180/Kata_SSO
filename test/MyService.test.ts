import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'
import SSOToken from '../src/sso/SSOToken'

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(undefined)

    const response = service.handleRequest(new Request('Foo', new SSOToken()))

    expect(response.getText()).not.toEqual('hello Foo!')
  })
})
