import SSOToken from './SSOToken'

export default class Request {
  private readonly name: string
  private readonly token: SSOToken

  constructor(name: string, token: SSOToken) {
    this.name = name
    this.token = token
  }

  getSSOToken() {
    return this.token
  }

  getName() {
    return this.name
  }
}
