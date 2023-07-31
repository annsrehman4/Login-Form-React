import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

const PersonalDetailsForm = ({ formData, setFormData, handleNext }) => {
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData(values);
        handleNext();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field as={TextField} name="name" label="Name" fullWidth error={touched.name && !!errors.name} helperText={touched.name && errors.name} />
          <Field as={TextField} name="phone" label="Phone" fullWidth error={touched.phone && !!errors.phone} helperText={touched.phone && errors.phone} />
          <Field as={TextField} name="email" label="Email" fullWidth error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
          <Field as={RadioGroup} name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </Field>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetailsForm;
