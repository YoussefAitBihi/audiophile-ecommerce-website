import { FC, ReactNode } from "react";

type FormSectionProps = {
  title: string;
  children: ReactNode;
};

const FormSection: FC<FormSectionProps> = ({ title, children }) => {
  return (
    <fieldset className="form-section">
      <legend className="form-section__title">{title}</legend>
      {children}
    </fieldset>
  );
};

export default FormSection;
