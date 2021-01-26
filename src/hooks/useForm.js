import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const [validationError, setValidationError] = useState({});
  const [isValid, setIsValid] = useState({});

  let isFormValid = Object.values(isValid).every(Boolean);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
    setValidationError({
      ...validationError,
      [name]: event.target.validationMessage,
    })
    setIsValid({
      ...isValid,
      [name]: event.target.validity.valid,
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Done') /// здесь будет callback function
  }

  return {
    handleInputChange,
    handleSubmit,
    setValidationError,
    setValues,
    setIsValid,
    values,
    validationError,
    isValid,
    isFormValid
  }
};

export default useForm;