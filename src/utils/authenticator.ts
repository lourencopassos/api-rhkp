import * as jwt from 'jsonwebtoken';

export class Authenticator {
  public generateToken(
    input: EmployeeAuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
        cpf: input.cpf,
        company_id: input.company_id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

  public getDataEmployee(token: string): EmployeeAuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      cpf: payload.cpf,
      company_id: payload.company_id
    };
    return result;
  }
}

export interface EmployeeAuthenticationData {
  cpf?: string;
  phone?: string;
  company_id: number;
}
