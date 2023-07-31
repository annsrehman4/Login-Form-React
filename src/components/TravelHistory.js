import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  places: Yup.array().of(
    Yup.object().shape({
      placeName: Yup.string().required('Place name is required'),
      city: Yup.string().required('City is required'),
    })
  ),
});

const TravelHistoryForm = ({ formData, setFormData, handleNext }) => {
  const handleAddPlace = () => {
    setFormData((prevData) => ({
      ...prevData,
      places: [...prevData.places, { placeName: '', city: '' }],
    }));
  };

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
          <FieldArray name="places">
            {(arrayHelpers) => (
              <div>
                {formData.places.map((_, index) => (
                  <div key={index}>
                    <Field as={TextField} name={`places[${index}].placeName`} label="Place Name" fullWidth error={touched.places && touched.places[index]?.placeName && !!errors.places[index]?.placeName} helperText={touched.places && touched.places[index]?.placeName && errors.places[index]?.placeName} />
                    <Field as={TextField} name={`places[${index}].city`} label="City" fullWidth error={touched.places && touched.places[index]?.city && !!errors.places[index]?.city} helperText={touched.places && touched.places[index]?.city && errors.places[index]?.city} />
                    <Button type="button" variant="contained" color="secondary" onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="contained" color="primary" onClick={handleAddPlace}>
                  Add Place
                </Button>
              </div>
            )}
          </FieldArray>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TravelHistoryForm;
