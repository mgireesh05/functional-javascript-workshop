 function checkUsersValid(goodUsers) {
 	return function allUsersValid(submittedUsers) {
 		return submittedUsers.every(function(submittedUser) {
 			return goodUsers.some(function(goodUser) {
 				if (submittedUser.id == goodUser.id) {
 					return true;
 				} else {
 					return false;
 				}
 			});
 		});
 	};
 }

 module.exports = checkUsersValid;
