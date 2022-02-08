/** @format */

export function formatDate(date: Date) {
	try {
		let getDate = new Date(date);

		let newDate = new Intl.DateTimeFormat('pt-BR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		}).format(getDate);

		return newDate;
	} catch {
		return 'Not Found';
	}
}
