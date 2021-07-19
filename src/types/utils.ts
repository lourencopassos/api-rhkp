import { EmployeeAuthenticationData } from '../utils/authenticator';

export interface IHashManager {
  hash(text: string): Promise<string>;
  compare(text: string, hash: string): Promise<boolean>;
}

export interface IAuthenticator {
  generateToken(input: EmployeeAuthenticationData, expiresIn: string): string;
  getDataEmployee(token: string): EmployeeAuthenticationData;
}
