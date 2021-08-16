import * as jwt from 'jsonwebtoken';

export class Authenticator {
  public generateTokenByCpf(
    input: EmployeeAuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
        cpf: input.cpf,
        company_id: input.company_id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

  public generateTokenByPhone(
    input: EmployeeAuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
        phone: input.phone,
        company_id: input.company_id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

  public generateTokenByEmail(
    input: ManagerAuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
        email: input.email,
        company_id: input.company_id,
        role: input.role
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
      company_id: payload.company_id,
      role: payload.role
    };
    return result;
  }

  public getDataManager(token: string): ManagerAuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      email: payload.email,
      company_id: payload.company_id,
      role: payload.role
    };
    return result;
  }
}

export interface EmployeeAuthenticationData {
  cpf?: string;
  phone?: string;
  company_id: number;
  role: number;
}

export interface ManagerAuthenticationData {
  email?: string;
  phone?: string;
  company_id: number;
  role: number;
}
