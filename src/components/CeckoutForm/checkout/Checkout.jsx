import React from "react";
import { useEffect } from "react";
import {useState} from 'react'
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../../../lib/commerce";

import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import useStyles from "./styles";

    
const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const classes = useStyles();


   

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken()
           
      } catch (error) {
        
         }
       }
   },[])
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
             
          </Stepper>
          <hr></hr>
          {activeStep === steps.length ? <Confirmation />  : <Form/>}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
