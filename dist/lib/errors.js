export class AuthorizationError extends Error {
    status;
    constructor(status, message) {
        super();
        this.name = "AuthorizationError";
        this.status = status;
        this.message = message;
    }
}
export class ValidationError extends Error {
    status;
    constructor(status, message) {
        super();
        this.name = "ValidationError";
        this.status = status;
        this.message = message;
    }
}
export class ForbiddenError extends Error {
    status;
    constructor(status, message) {
        super();
        this.name = "ForbiddenError";
        this.status = status;
        this.message = message;
    }
}
export class InternalServerError extends Error {
    status;
    constructor(status, message) {
        super();
        this.name = "InternalServerError";
        this.status = status;
        this.message = message;
    }
}
