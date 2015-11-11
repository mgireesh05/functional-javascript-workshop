/* My solution */
// function logger(namespace) {
// 	return console.log.bind(null, namespace);
// }

/* Official solution */
function logger(namespace) {
	return console.log.bind(console, namespace);
}

module.exports = logger;
