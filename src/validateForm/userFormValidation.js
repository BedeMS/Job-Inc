// logic to check registration form
export default (values) => {
  let errors = {};

  // fullName
  if (!values.fullName.trim()) {
    errors.fullName = "Username required";
  }

  // company
  if (Object.keys(values).includes("company")) {
    if (!values.company.trim()) {
      errors.company = "Company Name is required";
    }
  }

  // username
  // console.log(Object.keys(values))
  if (Object.keys(values).includes("username")) {
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
  }
 
  // email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // password2
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords don't match";
  }

  return errors;
};
