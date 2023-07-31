import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  institute: Yup.string().required('Institute name is required'),
  duration: Yup.string().required('Duration is required'),
  joiningYear: Yup.number().required('Joining year is required'),
  presentOrEndDate: Yup.string().required('Present or end date is required'),
});

const EducationDetailsForm = ({ formData, setFormData, handleNext }) => {
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
          <Field as={TextField} name="institute" label="Institute Name" fullWidth error={touched.institute && !!errors.institute} helperText={touched.institute && errors.institute} />
          <Field as={TextField} name="duration" label="Duration" fullWidth error={touched.duration && !!errors.duration} helperText={touched.duration && errors.duration} />
          <Field as={TextField} name="joiningYear" type="number" label="Joining Year" fullWidth error={touched.joiningYear && !!errors.joiningYear} helperText={touched.joiningYear && errors.joiningYear} />
          <Field as={TextField} name="presentOrEndDate" label="Currently Present or End Date" fullWidth error={touched.presentOrEndDate && !!errors.presentOrEndDate} helperText={touched.presentOrEndDate && errors.presentOrEndDate} />
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EducationDetailsForm;
