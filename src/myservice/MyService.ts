import Response from '../sso/Response'
import Request from '../sso/Request'
import SingleSignOnRegistry from '../sso/SingleSignOnRegistry'

export default class MyService {
  // @ts-ignore
  private readonly registry?: SingleSignOnRegistry

  constructor(registry?: SingleSignOnRegistry) {
    this.registry = registry
  }

  handleRequest(request: Request) {
    // TODO: check request has a valid SSOToken
    return new Response(`hello ${request.getName()}!`)
  }
}
