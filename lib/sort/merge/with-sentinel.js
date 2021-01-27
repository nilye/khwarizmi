function mergeSort(arr, p, r) {
	p = p ?? 0
	r = r ?? arr.length
	if (p < r && r - p > 1) {
		let q = Math.ceil((p + r) / 2)
		mergeSort(arr, p, q)
		mergeSort(arr, q, r)
		merge(arr, p, q, r)
	}
}

function merge(arr, p, q, r){
	let left = arr.slice(p, q),
		right = arr.slice(q, r)

	left.push(Infinity)
	right.push(Infinity)

	let i = 0, j = 0
	for (let k = p; k < r; k++) {
		if (left[i] <= right[j]) {
			arr[k] = left[i]
			i++
		} else {
			arr[k] = right[j]
			j++
		}
	}
}

module.exports = mergeSort
