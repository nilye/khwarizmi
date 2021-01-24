const mergeSort = require('./merge')

test('merge sort', () => {
	const a = [5,2,4,7,1,3,2,6]
	mergeSort(a)
	expect(a).toEqual([1,2,2,3,4,5,6,7])
})


test('merge sort', () => {
	const a = [5,2,4,7,1,3,2,6,8]
	mergeSort(a)
	expect(a).toEqual([1,2,2,3,4,5,6,7,8])
})
