function repeat(operation, num) {

	//loop
	// for(var i = 0; i < num; i++){
	// 	operation;
	// }

	//recursion
	if (num) {
		repeat(operation, num - 1);
	} else {
		return operation;
	}
}

module.exports = repeat;
