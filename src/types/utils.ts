import { EmployeeAuthenticationData, ManagerAuthenticationData } from '../utils/authenticator';

export interface IHashManager {
  hash(text: string): Promise<string>;
  compare(text: string, hash: string): Promise<boolean>;
}

export interface IAuthenticator {
  generateTokenByCpf(
    input: EmployeeAuthenticationData,
    expiresIn: string
  ): string;
  generateTokenByPhone(
    input: EmployeeAuthenticationData,
    expiresIn: string
  ): string;
  generateTokenByEmail(
    input: ManagerAuthenticationData,
    expiresIn: string
  ): string;
  getDataEmployee(token: string): EmployeeAuthenticationData;
  getDataManager(token: string): ManagerAuthenticationData;
}
