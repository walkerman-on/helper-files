// форматирование даты из "Week's day Month Day Year hours:minutes:seconds GMT+0300 (Moscow Standard Time)" --> day month year
export const formattedDate = (date) => {
	return new Date(date).toLocaleDateString("ru-Ru", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}
