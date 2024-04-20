import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
  Typography,
  TextField
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import { commerce } from "../../../lib/commerce";

const AddressForm = ({ checkoutToken, next ,hideCheck}) => {
 const [shippingCountries, setShippingContries ] =useState([])
 const [shippingCountry, setShippingContry ] =useState('')
 const [shippingSubdivisions, setShippingSubdivisions] = useState([])
 const [shippingSubdivision, setShippingSubdivision] = useState('')
 const [shippingOptions, setShippingOptions] = useState([])
 const [shippingOption, setShippingOption] = useState('')

   


  const methods = useForm()
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}) )
 


////////////////////////////////////////////////////////////////////////////////////////////////////
   const fetchShippingCountries = async (checkoutToken) => {
     const { countries } = await commerce.services.localeListShippingCountries(checkoutToken)


     setShippingContries(countries)
     setShippingContry(Object.keys(countries)[0])   //give me just key of countries ...AD  give me the firstone
       //[AL,AT,BA]

  }
  /////////////////////////////////////////////////////////////
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])

  }
  ////////////////////////////////////////////////

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
          const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})

    setShippingOptions(options)
    setShippingOption(options[0].id)
  }


    /////////////////////////////////////////////////////
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
    
        
  }, [])

  //////////////////////////////////////////////////
  
  useEffect(() => {
   if(shippingCountry) fetchSubdivisions(shippingCountry)
    
        
  }, [shippingCountry])
  ///////////////////////////////////////// options

  useEffect(() => {
   if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    
        
  }, [shippingSubdivision])


  return <>
     <Typography variant="h6" gutterBottom>
           Shipping Address
     </Typography>
     <FormProvider {...methods}>
       <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
         <Box  sx={{
    display: 'grid',
    gap: 20,
          gridTemplateColumns: 'repeat(2, 1fr)',
    width: '50rem'
    
  }}>

             <TextField required name="firstName" label="First name" />
            <TextField required name="lastName" label="Last name" />
            <TextField required name="address1" label="Address" />
            <TextField required name="email" label="Email" />
            <TextField required name="city" label="City" />
            <TextField required name="zip" label="ZIP / Postal code" />
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Country</InputLabel>
            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingContry(e.target.value)} >
              {countries.map((country) => (
                   <MenuItem key={country.id} value={country.id}>
                    {country.label}
                   </MenuItem>
                        
                      ))}
                

                 </Select>
            </Grid>
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)} >
              {subdivisions.map((subdivision) => (
                   <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                   </MenuItem>
                        
                      ))}
                

                 </Select>
            </Grid>
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Options</InputLabel>
                    <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)} >
              {options.map((option) => (
                   <MenuItem key={option.id} value={option.id}>
                    {option.label}
                   </MenuItem>
                        
                      ))}
                

                 </Select>
            </Grid>
         </Box>

        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => hideCheck()} variant="outlined">Back to Cart</Button>
          <Button type="submit" variant="contained" color="primary">Next</Button>
        </div>

       </form>
     </FormProvider>
  
  </>;
};

export default AddressForm;
