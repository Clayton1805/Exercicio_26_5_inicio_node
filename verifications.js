const checkEmail = (email) => {
	const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return !regex.test(email);  
}

const checkPasswordRegex = (password) => {
	const regex = /^\d{4,8}$/gm;
  return !regex.test(password)
}

module.exports = { checkEmail, checkPasswordRegex };