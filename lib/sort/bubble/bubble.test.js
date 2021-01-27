const bubbleSort = require('./bubble')

test('bubble sort', () => {
	const a = [2,5,2,4,6,1,3]
	bubbleSort(a)
	expect(a).toEqual([1,2,2,3,4,5,6])
})
