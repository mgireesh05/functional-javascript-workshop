/* 	http://stackoverflow.com/questions/9006553/slice-or-array-prototype-slice 
   	http://stackoverflow.com/questions/27307133/slice-callthis-vs-array-prototype-callthis

   	Array.prototype.slice - retrieves method slice from Array.prototype; 
   	in a nutshell - it returns you slice method without any context (internal data).
	call(data) - as in previous variant, calls this method with data as its context.

	Filter - runs on each object and executes the passed function and accumulates the true values

	Object.prototype.hasOwnProperty.call(obj, 'quack') checks if the property is set on that object
*/
function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack')
	}).length
}

module.exports = duckCount;
