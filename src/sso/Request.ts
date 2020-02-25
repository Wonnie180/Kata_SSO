export default class Request {
  private readonly name: string
  private readonly token?: string

  constructor(name: string, token?: string) {
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
