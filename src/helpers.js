export  function sortByKey(key) {
	return function(a, b) {
		let sortStatus = 0;
		if (a[key] > b[key]) {
			sortStatus = 1
		} else if (a[key] < b[key]) {
			sortStatus = -1
		}
		return sortStatus;
	};
}

