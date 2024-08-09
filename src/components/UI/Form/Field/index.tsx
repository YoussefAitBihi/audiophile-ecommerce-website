import ExclamationMarkIcon from "@/assets/icons/ExclamationMark";
import { FormFieldProps } from "@/types";
import { FC, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FormField: FC<FormFieldProps> = (formFields) => {
  const uniqueID = useId();

  const isRadioField = formFields.type === "radio";
  const isError = formFields.errorMessage;

  return (
    <div className={`form-field ${isRadioField ? "form-field--radio" : ""}`}>
      <label
        className={`form-field__label ${isRadioField ? "form-field__label--radio" : ""} ${
          isError ? "form-field__label--failure" : ""
        }`}
        htmlFor={`form-label-${uniqueID}`}
      >
        {formFields.label}
      </label>
      <input
        className={`form-field__control ${isRadioField ? "form-field__control--radio" : ""} ${
          isError ? "form-field__control--failure" : ""
        }`}
        id={`form-label-${uniqueID}`}
        {...formFields}
        onBlur={formFields.onBlur}
        required
      />
      <AnimatePresence>
        {formFields.errorMessage && (
          <motion.p
            className="form-field__error-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <ExclamationMarkIcon />
            {formFields.errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormField;
