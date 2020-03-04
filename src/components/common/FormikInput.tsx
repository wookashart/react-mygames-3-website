import React from 'react';

// Config
import { Field, FieldProps } from 'formik';

// Helpers
import { colors, dimensions } from '../../styles/variables';

interface FormikInputProps {
  label?: string;
  name: string;
  type?: string;
  autocomplete?: string;
  maxlength?: number;
}

const FormikInput = ({ label, name, type = 'text', autocomplete = 'on', maxlength }: FormikInputProps) => {
  return (
    <>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input
              type={type}
              {...field}
              className={form.touched[name] && form.errors[name] ? 'isError' : ''}
              autoComplete={autocomplete}
              maxLength={maxlength}
            />

            {form.touched[name] && form.errors[name] && <div className="error">{form.errors[name]}</div>}
          </div>
        )}
      </Field>
      <style jsx>{`
        div {
          display: flex;
          flex-flow: column;
          position: relative;
        }

        label {
        }
        input {
          display: block;
          height: 40px;
          width: 100%;
          margin: 10px 0 20px 0;
          border: 1px solid ${colors.ui.default};
          outline: none;
          padding: 0 15px;
          font-size: ${dimensions.fontSize.regular}px;
        }
        .error {
          font-size: ${dimensions.fontSize.smaller}px;
          color: ${colors.text.error};
          position: absolute;
          bottom: 2px;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default FormikInput;
