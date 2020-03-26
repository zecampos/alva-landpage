import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Button,
  Grid,
  TextField,
  StepLabel,
  Step,
  Stepper,
  Typography
} from "@material-ui/core";
import TheLogin from "./TheLogin";
import TheTerms from "./TheTerms";
import TheLocal from "./TheLocal";
import TheSymptoms from "./TheSymptoms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [patient, setPatient] = React.useState({
    name: "",
    surname: "",
    cellPhone: "",
    email: "",
    cpf: "",
    acceptedTerms: false,
    gender: ""
  });
  const [adress, setAdress] = React.useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    numero: ""
  });
  function handleInputChangePatient(name, value) {
    setPatient({ ...patient, [name]: value });
  }

  function handleInputChangeAdress(name, value) {
    setAdress({ ...adress, [name]: value });
  }
  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  function getSteps() {
    return [
      "Informações de Login",
      "Termo e informação legais",
      "Sua Localização",
      "Seu Histórico"
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <TheLogin
              handleInputChange={handleInputChangePatient}
              values={patient}
            />
          </>
        );
      case 1:
        return (
          <>
            <TheTerms
              handleInputChange={handleInputChangePatient}
              values={patient}
            />
          </>
        );
      case 2:
        return (
          <>
            <TheLocal
              values={adress}
              handleInputChange={handleInputChangeAdress}
              setAdress={setAdress}
            />
          </>
        );
      case 3:
        return (
          <>
            <TheSymptoms />
          </>
        );
      default:
        return "Unknown step";
    }
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ minHeight: 400 }}>{getStepContent(activeStep)}</div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
