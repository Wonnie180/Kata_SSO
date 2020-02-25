import SSOToken from './SSOToken'

export default interface SingleSignOnRegistry {
  registerNewSession(userName: string, password: string): SSOToken

  isValid(token: string): boolean

  unregister(token: string): void
}
