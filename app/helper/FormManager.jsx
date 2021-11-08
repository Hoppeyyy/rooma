import { useState } from "react";

export default function FormManager({ initialValues, children }) {
  const [values, setValues] = useState({ ...initialValues });

  const setValue = (name, value) => {
    if (name in values) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return children({
    values,
    setValue,
  });
}
