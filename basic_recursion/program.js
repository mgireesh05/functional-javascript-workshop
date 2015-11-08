/* My solution */
function reduce(arr, fn, initial) {
	if (arr.length) {
		var prev = initial;
		var curr = arr[0];
		initial = fn(prev, curr);
		return reduce(arr.slice(1), fn, initial);
	} else {
		return initial;
	}
}

/* Official solution */
// function reduce(arr, fn, initial) {
// 	return (function reduceOne(index, value) {
// 			if (index > arr.length - 1) return value // end condition
// 			return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
// 		})(0, initial) // IIFE. kick off recursion with initial values
// }

module.exports = reduce;
