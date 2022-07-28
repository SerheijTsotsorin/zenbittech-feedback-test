import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormSection,
  Forma,
  FieldInput,
  FieldMessage,
  Title,
  Button,
  ErrorText,
} from './Form.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FeedbackForm = () => {
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
  });

  return (
    <FormSection>
      <Title>Reach out to us!</Title>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Forma>
          <div>
            <FieldInput name="name" placeholder="Your name*" />
            <FormError name="name" />
          </div>

          <div>
            <FieldInput name="email" type="email" placeholder="Your e-mail*" />
            <FormError name="email" />
          </div>

          <div>
            <FieldMessage
              name="message"
              type="textarea"
              placeholder="Your message*"
            />
            <FormError name="message" />
          </div>

          <Button type="submit">Submit</Button>
        </Forma>
      </Formik>
    </FormSection>
  );
};
