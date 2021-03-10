import React from "react";
import ModalWrapper from "../../app/common/modals/modalWrapper";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";

export default function LoginForm() {
  return (
    <ModalWrapper size="mini" header="Sign in to Re-vents">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <TextInput name="email" placeholder="Email Address" />
            <TextInput name="password" placeholder="Password" type="password" />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
