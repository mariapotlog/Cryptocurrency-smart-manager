import Validator from 'validator';
import { isEmpty } from "@helpers"

const validateRegisterInput = (data) => {
  let errors = [];
  //email
  data.email = !isEmpty(data.email) ? data.email : '';

  if (Validator.isEmpty(data.email)) {
    errors.push('The email is required');
  } else if (!Validator.isEmail(data.email)) {
    errors.push('The email is not valid');
  }

  //password checks
  data.password = !isEmpty(data.password) ? data.password : '';
  if (Validator.isEmpty(data.password)) {
    errors.push("This field is required");
  }

  data.confirmedPassword = !isEmpty(data.confirmedPassword) ? data.confirmedPassword : '';
  if (Validator.isEmpty(data.confirmedPassword)) {
    errors.confirmedPassword = "This field is required";
  }

  if (!Validator.isLength(data.password, {
    min: 4,
    max: 30
  })) {
    errors.push("Password must contain at least 4 characters");
  }

  if (!Validator.equals(data.password, data.confirmedPassword)) {
    errors.push("Passwords do not match");
  }

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  if (Validator.isEmpty(data.firstName)) {
    errors.push('The first name is required');
  } else if (!Validator.isAlpha(data.firstName)) {
    errors.push('The first name needs to only contain characters');
  } else if (!Validator.isLength(data.firstName, {
    min: 3,
    max: 50
  })) {
    errors.push('Your first name cannot be shorter than 3 characters or longer than 50 characters ');
  }

  //last name
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  if (Validator.isEmpty(data.lastName)) {
    errors.push('The last name is required');
  } else if (!Validator.isAlpha(data.lastName)) {
    errors.push('The last name needs to only contain characters');
  } else if (!Validator.isLength(data.lastName, {
    min: 3,
    max: 50
  })) {
    errors.push('Your last name cannot be shorter than 3 or longer than 50 characters');
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

const validateLoginInput = (data) => {
  const errors = [];

  //email
  data.email = !isEmpty(data.email) ? data.email : '';

  if (Validator.isEmpty(data.email)) {
    errors.push('The email is required');
  } else if (!Validator.isEmail(data.email)) {
    errors.push('The email is not valid');
  }

  //password checks
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.password)) {
    errors.push("This field is required");
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

const AuthValidation = {
  validateRegisterInput,
  validateLoginInput
}

export default AuthValidation