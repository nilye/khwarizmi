function binarySearchRecursive(arr, v, start = 0, end = arr.length){
	if (start > end) return null
	let mid = ~~((start + end) / 2)
	if (v == arr[mid]){
		return mid
	} else if (v > arr[mid]){
		return binarySearchRecursive(arr, v, mid + 1, end)
	} else {
		return binarySearchRecursive(arr, v, start, mid - 1)
	}
}


module.exports = binarySearchRecursive
