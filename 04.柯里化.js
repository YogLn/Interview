function add(...arg1) {
	let x = arg1.reduce((a, b) => a + b);
	return function (...arg2) {
		if(arg2.length === 0) return x;
		let y = arg2.reduce((a, b) => a + b);
		return add(x + y);
	}
}

console.log(add(1)(2)(3, 4, 5)())