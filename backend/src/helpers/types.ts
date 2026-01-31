export interface TodoType {
	text: string;
	id: string;
	isCompleted: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export type BufferEncoding =
	| 'ascii'
	| 'utf8'
	| 'utf-8'
	| 'utf16le'
	| 'ucs2'
	| 'ucs-2'
	| 'base64'
	| 'base64url'
	| 'latin1'
	| 'binary'
	| 'hex';
