import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import StyledButton from "./StyledButton";

import StyledInput from "./StyledInput";

function StyledForm() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Valid email required"),
      })}
      onSubmit={(values) =>
        navigate("/subscribed", { state: { email: values.email } })
      }
    >
      <Form className="mb-6">
        <StyledInput
          label="Email address"
          name="email"
          id="email"
          type="email"
          placeholder="email@company.com"
        />
        <StyledButton
          type="submit"
          text="Subscribe to monthly newsletter"
          className="mt-6"
        />
      </Form>
    </Formik>
  );
}

export default StyledForm;
