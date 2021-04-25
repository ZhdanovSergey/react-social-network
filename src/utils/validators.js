export let required = (value) => {
	if (!value) return 'Field is required';
}

export let maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
}