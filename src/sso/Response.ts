export default class Response {
  private readonly text: string

  constructor(text: string) {
    this.text = text
  }

  getText() {
    return this.text
  }
}
