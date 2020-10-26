const bcrypt = require('bcryptjs');

const check = async (password, hash) => {
	const comparison = await bcrypt.compare(password, hash);
	console.log('A resposta é ', comparison);
	return comparison;
};
const encrypt = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	return hash;
};

// encrypt('');

module.exports = { check, encrypt };
