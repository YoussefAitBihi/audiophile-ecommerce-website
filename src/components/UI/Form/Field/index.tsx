import { FC, useId } from "react";

type FormFieldProps = {
  type: "text" | "number" | "tel" | "email" | "radio";
  label: string;
  placeholder?: string;
  name: string;
  defaultValue?: string;
  checked?: boolean;
};

const FormField: FC<FormFieldProps> = (formFields) => {
  const uniqueID = useId();

  const isRadioField = formFields.type === "radio";

  return (
    <div className={`form-field ${isRadioField ? "form-field--radio" : ""}`}>
      <label
        className={`form-field__label ${
          isRadioField ? "form-field__label--radio" : ""
        } form-field__label--failure`}
        htmlFor={`form-label-${uniqueID}`}
      >
        {formFields.label}
      </label>
      <input
        className={`form-field__control ${
          isRadioField ? "form-field__control--radio" : ""
        } form-field__control--failure`}
        id={`form-label-${uniqueID}`}
        {...formFields}
        required
      />
      {/* <p className="form-field__error-message">Error message</p> */}
    </div>
  );
};

export default FormField;
