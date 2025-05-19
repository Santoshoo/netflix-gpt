
export const isValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  if (!isValidEmail) {
    return "Please enter a valid email address";
  }

  if (!isValidPassword) {
    return "Password must be at least 8 characters long and contain at least one letter and one number";
  }

  return null;
};
