import React from "react";

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [prevValue, setPrevValue] = React.useState('')

  const handleChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    if (target.name === "telephone" && value.length >=prevValue.length) {
      if (value.length === 6) {
        value = value + ')';
      } else if (value.length === 10) {
        value = value + '-';
      } else if (value.length === 13) {
        value = value + '-'
      } else if (value.length <= 3) {
        value = '+7('
      }
    } 
    setPrevValue(value);
    setIsValid(target.closest("form").checkValidity());
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const resetInput = (e) => {
    const name = e.target.previousSibling.name;
    setValues({ ...values, [name]: "" });
    setErrors({ ...errors, [name]: "" });
    setIsValid(false);
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    setErrors,
    setValues,
    resetForm,
    resetInput,
  };
}

export default useFormWithValidation;
