export default class SSOToken {

  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
