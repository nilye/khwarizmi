const { baseIncrementalInsertionSort, baseDecrementalInsertionSort } = require('./insertion')

describe('insertion sort', () => {
	test('incremental', () => {
		const a = [5,2,4,6,1,3]
		baseIncrementalInsertionSort(a)
		expect(a).toEqual([1,2,3,4,5,6])
	})

	test('decremental', () => {
		const a = [5,2,4,6,1,3]
		baseDecrementalInsertionSort(a)
		expect(a).toEqual([6,5,4,3,2,1])
	})
})
