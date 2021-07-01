import { BaseError } from './base-error';

export class InvalidParameterError extends BaseError {
  constructor(message: string) {
    super(`Invalid param: ${message}`, 400);
  }
}
