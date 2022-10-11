import SingleSignOnRegistry from "../../src/sso/SingleSignOnRegistry";
import SSOToken from "../../src/sso/SSOToken";

export class SingleSignOnRegistryFake implements SingleSignOnRegistry {
  isValid(token: string): boolean {
    return token === "Valido";
  }

  registros_validos: [string, string][] = [
    ["a", "b"],
    ["b", "c"],
  ];

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    return undefined;
  }

  unregister(token: string): void {
    throw new Error("Dummy: not implemented");
  }
}
