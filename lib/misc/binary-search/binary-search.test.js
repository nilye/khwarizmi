const binarySearchRecursive = require('./binary-search-recursive')

test('binarySearchRecursive', () => {
	let a = [5,3,2,7,4,8,12]
	expect(binarySearchRecursive(a, 6)).toBeNull()
	expect(binarySearchRecursive(a, 3)).toBe(1)
})
