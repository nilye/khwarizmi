const selectionSort = require('./selection')

test('selection sort', () => {
	const a = [5,2,4,6,1,3]
	selectionSort(a)
	expect(a).toEqual([1,2,3,4,5,6])
})
