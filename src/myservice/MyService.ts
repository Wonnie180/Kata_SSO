import Response from '../sso/Response'
import Request from '../sso/Request'
import SingleSignOnRegistry from '../sso/SingleSignOnRegistry'
import SSOToken from '../sso/SSOToken'

export default class MyService {
  // @ts-ignore
  private readonly registry?: SingleSignOnRegistry

  constructor(registry?: SingleSignOnRegistry) {
    this.registry = registry
  }

  handleRequest(request: Request): Response {
    // TODO: check request has a valid SSOToken
    return new Response(`hello ${request.getName()}!`)
  }

  handleRegister(username: string, password: string): SSOToken {
    // TODO: register and return token
    return new SSOToken()
  }

  handleUnRegister(token: SSOToken) {
    // TODO: unregister token
    return
  }
}
