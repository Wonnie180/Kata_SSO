import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
// import { SingleSignOnRegistryDummy } from './__mocks__/SingleSignOnRegistryDummy';
import { SingleSignOnRegistryFake } from './__mocks__/SingleSignOnRegistryFake';

describe('MyService', () => {

    it('invalid sso token is rejected', () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRequest(new Request('Foo', new SSOToken('InvalidToken')));

    expect(response.getText()).not.toEqual('hello Foo!');
  });


  it('Response is hello foo! if token is okay', () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRequest(new Request('Foo', new SSOToken('Valido')));

    expect(response.getText()).toEqual('hello Foo!');
  });

  it('Response is hello Angie! if token is okay', () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRequest(new Request('Angie', new SSOToken('Valido')));

    expect(response.getText()).toEqual('hello Angie!');
  });

  it('can create token', () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRegister('Foo','Foo');

    expect(response.getToken()).toEqual('');
  });




  // it('sso token is rejected', () => {
  //   const service = new MyService(new SingleSignOnRegistryDummy());

  //   const response = service.handleRegister('Foo','X');

  //   expect(response.getToken()).toEqual('');
  // });

  // it('sso token is unregistered', () => {
  //   const service = new MyService(new SingleSignOnRegistryDummy());

  //   const response = service.handleUnRegister(new SSOToken('token'));

  //   expect(response).toEqual(undefined);
  // });

  
});
