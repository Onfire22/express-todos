import { CustomError } from './index';

export class NotCreatedError extends CustomError {
	statusCode = 500;
	constructor(message: string) {
		super(message);
		this.message = message;
		Object.setPrototypeOf(this, NotCreatedError.prototype);
	}

	serializeError(): { message: string } {
		return { message: this.message };
	}
}
