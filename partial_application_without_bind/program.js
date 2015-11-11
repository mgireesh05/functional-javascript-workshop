/* My solution (without using apply) */
// var slice = Array.prototype.slice;

// function logger(namespace) {
// 	return function() {
// 		var message = slice.call(arguments).join(' ');
// 		console.log(namespace + ' ' + message);
// 	};
// }

/* Official solution */
var slice = Array.prototype.slice;

function logger(namespace) {
	return function() {
		console.log.apply(console, [namespace].concat(slice.call(arguments)));
	};
}
module.exports = logger;
