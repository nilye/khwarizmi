const addBinary = require('./add-binary')

test('add-binary', () => {
	expect(addBinary([1,0,1,1], [0,0,1,1])).toEqual([0,1,1,1,0])
	expect(addBinary([1,1,1], [1,1,1])).toEqual([1,1,1,0])

})
