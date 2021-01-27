function mergeSort(array){
	if (array.length < 2) return array
	const mid = Math.ceil(array.length / 2),
		left = array.splice(0, mid)
	return merge(mergeSort(left), mergeSort(array))
}

function merge(left, right){
	let n = 0, m = 0
	const merged = []
	while(n < left.length || m < right.length){
		if (n === left.length){
			merged.push(right[m])
			m++
		} else if (left[n] < right[m] || m === right.length){
			merged.push(left[n])
			n++
		} else {
			merged.push(right[m])
			m++
		}
	}
	return merged
}

module.exports = mergeSort
