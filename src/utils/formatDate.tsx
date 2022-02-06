/** @format */

export function formatDate(date: Date) {
	let getDate = new Date(date);

	let newDate = new Intl.DateTimeFormat('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(getDate);

	return newDate;
}
