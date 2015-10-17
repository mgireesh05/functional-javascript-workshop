function getShortMessages(messages) {

	var filtered = messages.filter(function(msg) {
		if (msg.message.length < 50) {
			return msg.message;
		}
	}).map(function(item) {
		return item.message;
	});

	return filtered;
}

module.exports = getShortMessages;
