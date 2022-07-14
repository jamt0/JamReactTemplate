export const rulesName = (texts: any) => ({
	required: texts('error.required'),
	minLength: {
		value: 3,
		message: texts('error.min_character', { numero: 3 }),
	},
});

export const rulesEmail = (texts: any) => ({
	required: texts('error.required'),
	pattern: {
		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
		message: texts('error.email_invalid'),
	},
});

export const rulesPassword = (texts: any) => ({
	required: texts('error.required'),
	minLength: {
		value: 8,
		message: texts('error.min_character', { numero: 8 }),
	},
});
