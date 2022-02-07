// function flatten(arr) {
//     let res = [];
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             res = res.concat(flatten(item));
//         } else {
//             res.push(item);
//         }
//     }
//     return res;
// }

// function flatten(arr) {
// 	while(arr.some(item => Array.isArray(item))) {
// 		arr = [].concat(...arr)
// 	}
// 	return arr
// }

function flatten(arr) {
	return arr.flat(Infinity)
}
console.log(flatten([1, 2, [3, [4]]]));
