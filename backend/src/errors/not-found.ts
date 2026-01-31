import { CustomError } from './index';

export class NotFoundError extends CustomError {
	statusCode = 404;
	constructor(message: string) {
		super(message);
		this.message = message;
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}

	serializeError(): { message: string } {
		return { message: this.message };
	}
}
