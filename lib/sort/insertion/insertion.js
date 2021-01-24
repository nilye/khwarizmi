function baseIncrementalInsertionSort (arr){
	for (let i = 0; i < arr.length; i++){
		let item = arr[i],
			j = i - 1
		while (j >= 0 && arr[j] > item){
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = item
	}
}

/*
* 2.1-2
* Rewrite the INSERTION-SORT procedure to sort into nonincreasing instead of non- decreasing order.
* */
function baseDecrementalInsertionSort (arr){
	for (let i = 0; i < arr.length; i++){
		let item = arr[i],
			j = i - 1
		while (j >= 0 && arr[j] < item){
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = item
	}
}

module.exports = {
	baseIncrementalInsertionSort,
	baseDecrementalInsertionSort
}
