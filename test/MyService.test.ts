import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnRegistryDummy } from './__mocks__/SingleSignOnRegistryDummy';

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(new SingleSignOnRegistryDummy());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).not.toEqual('hello Foo!');
  });
});
