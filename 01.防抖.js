const debounce = (fn, delay) => {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		let that = this;
		timer = setTimeout(() => {
			fn.call(that, ...args);
		}, delay)
	}
}