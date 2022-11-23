export class AuthorizationError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.name = "AuthorizationError";
    this.status = status;
    this.message = message;
  }
}

export class ValidationError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.name = "ValidationError";
    this.status = status;
    this.message = message;
  }
}

export class ForbiddenError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.name = "ForbiddenError";
    this.status = status;
    this.message = message;
  }
}

export class InternalServerError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.name = "InternalServerError";
    this.status = status;
    this.message = message;
  }
}
