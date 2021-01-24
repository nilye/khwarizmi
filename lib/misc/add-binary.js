function addBinary(a, b){
	const c = []
	let carry = 0
	for (let i = a.length - 1; i >= 0; i--){
		let sum = a[i] + b[i] + carry
		c.push(sum % 2)
		carry = ~~(sum / 2)
	}
	c.push(carry)
	return c.reverse()
}

module.exports = addBinary
