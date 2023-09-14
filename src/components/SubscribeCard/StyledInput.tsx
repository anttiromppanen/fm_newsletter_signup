/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & { label: string };

function StyledInput({ label, ...props }: StyledInputProps) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <div className="mb-2 flex justify-between text-sm font-bold">
          <p>{label}</p>
          {meta.touched && meta.error && (
            <p className="text-userTomato">{meta.error}</p>
          )}
        </div>
      </label>
      <input
        className={`w-full rounded-xl border border-userGrey px-6 py-5 ${
          meta.touched &&
          meta.error &&
          "bg-userInputErrorBG text-userTomato outline-userTomato"
        }`}
        {...field}
        {...props}
      />
    </>
  );
}

export default StyledInput;
