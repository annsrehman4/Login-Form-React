import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@material-ui/core';
import PersonalDetailsForm from './PersonalForm';
import TravelHistoryForm from './TravelHistory';
import EducationDetailsForm from './EducationForm';

const steps = ['Personal Details', 'Education Details', 'Travel History'];

const ThreeStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    institute: '',
    duration: '',
    joiningYear: '',
    presentOrEndDate: '',
    places: [],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Typography variant="h5" align="center">
            Thank you for submitting the form.
          </Typography>
        ) : (
          <div>
            {activeStep === 0 && <PersonalDetailsForm formData={formData} setFormData={setFormData} handleNext={handleNext} />}
            {activeStep === 1 && <EducationDetailsForm formData={formData} setFormData={setFormData} handleNext={handleNext} />}
            {activeStep === 2 && <TravelHistoryForm formData={formData} setFormData={setFormData} handleNext={handleNext} />}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ThreeStepForm;
