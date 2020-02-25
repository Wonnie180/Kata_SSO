/**
 * Uses something like LDAP to determine if the given credentials are valid
 */
export default interface AuthenticationGateway {
  credentialsAreValid(userName: string, password: string): boolean
}
