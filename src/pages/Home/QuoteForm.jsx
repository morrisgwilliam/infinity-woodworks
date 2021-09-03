import React, {useState} from "react";
// @material-ui/core components
import { makeStyles, Typography, Grid, TextField, Button, CircularProgress } from "@material-ui/core";
import * as api from "../../apiAgent"
// import GridContainer from "../../components/Grid/GridContainer";
// import GridItem from "../../components/Grid/GridItem";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle";
import check from "../../assets/img/check.gif"
const useStyles = makeStyles(styles);

const initialFormState = {firstName: "", lastName: "", companyName: "", address: "", city: "", state: "", zipCode: "", email: "", phone: "", pickupDate: "", receivingHours: "", note: ""}

export default function SectionCarousel() {
  const classes = useStyles();
  const [contact, setContact] = useState(initialFormState)
  const [isLoading, setIsLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
//   const formIsValid = contact.firstName !== "" && contact.lastName !== "" && contact.companyName !== "" &&  contact.address !== "" && contact.city !== "" && contact.state !== "" && contact.zipCode !== "" && contact.email !== "" && contact.phone !== "" && contact.pickupDate !== "" && contact.receivingHours !== "" && contact.note !== ""

  const sendForm = async () => {
	  //if (!formIsValid) return
	  try {
		setIsLoading(true)
		await api.sendQuote(contact);
		setIsLoading(false)
		setShowCheck(true)
		setTimeout(() => {
			setContact(initialFormState)
			setShowCheck(false)
		}, 2500)
	  } catch (error) {
		console.error(error)  
	  }
  }
  if(showCheck){
	  return(
		<div className={classes.section} style={{ minHeight: `650px` }}>
			<Typography className="mb-5" variant="h3" align="center" display="block">Pallet Removal</Typography>
			<div className={classes.container}>
			<Grid container className="bg-white rounded p-3">
			<Grid className="p-3" item xs={12} sm={12}>
<img src={check} alt="success" className="w-100" />
	  </Grid>
				</Grid>
			</div>
		</div>
	  )
  }
  return (
    <div className={classes.section} style={{ minHeight: `650px` }}>
      <Typography className="mb-5" variant="h3" align="center" display="block">Pallet Removal</Typography>
       <div className={classes.container}>
        <Grid container className="bg-white rounded p-3">
          <Grid className="p-3" item xs={12} sm={12}>
		<TextField  fullWidth label="Company Name" value={contact.companyName} onChange={e => setContact({...contact, companyName: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} sm={12} md={6}>
		<TextField  fullWidth label="First Name" value={contact.firstName} onChange={e => setContact({...contact, firstName: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} sm={12} md={6}>
		<TextField fullWidth label="Last Name" value={contact.lastName} onChange={e => setContact({...contact, lastName: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12}>
	  	<TextField fullWidth label="Address" value={contact.address} onChange={e => setContact({...contact, address: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField fullWidth label="City" value={contact.city} onChange={e => setContact({...contact, city: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField fullWidth label="State" value={contact.state} onChange={e => setContact({...contact, state: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField fullWidth label="Zip Code" value={contact.zipCode} onChange={e => setContact({...contact, zipCode: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField type="email" fullWidth label="Email" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField type="phone" fullWidth label="Phone" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField InputLabelProps={{shrink: true}} type="date" fullWidth label="When do you want the pallets picked up by?" value={contact.pickupDate} onChange={e => setContact({...contact, pickupDate: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={6}>
	  	<TextField fullWidth label="Shipping/Receiving Hours" value={contact.receivingHours} onChange={e => setContact({...contact, receivingHours: e.target.value})}/>
	  </Grid>
          <Grid className="p-3" item xs={12} md={12}>
	  	<TextField multiline rows={4} fullWidth label="Note" value={contact.note} onChange={e => setContact({...contact, note: e.target.value})}/>
	  </Grid>
	  <Grid className="p-3 mt-3" item xs={12}>
	  	<Button variant="contained" className="mx-auto d-block" color={"primary"} disabled={isLoading} onClick={sendForm}>
			{!isLoading && "SUBMIT"}
			{isLoading && <CircularProgress size={14} />}
		</Button>
	  </Grid>
	  </Grid>
	  </div>
	  </div>
  )
}