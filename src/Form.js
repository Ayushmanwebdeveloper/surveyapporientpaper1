import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Form.css';
export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data
      };
  return (
    <form onSubmit={handleSubmit}>
    <div id="form">
      <Typography variant="h6" gutterBottom sx={{color: '#ed1c24'}}>
        Fresh Employee Survey 2023
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name:"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Employee Code:"
            name="Employee Code:"
            label="Employee Code:"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Grade:"
            name="Grade:"
            label="Grade:"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Department"
            name="Department:"
            label="Department:"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Designation"
            name="Designation"
            label="Designation:"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>1.</span>Did your induction / onboarding make you feel confident that you could do your job well?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          fullWidth
          rows={3}
          label="Answer:"
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>2.</span>Looking back, is there anything you think that could have been done / organised better?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          fullWidth
          rows={3}
          label="Answer:"
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>3.</span>Your reporting manager has clearly communicated your job responsibilities to you?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          fullWidth
          label="Answer:"
          rows={3}
          variant="filled"
        />
        </Grid> <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>4.</span>How well informed and confident do you feel after completing initial months in the
organisation and have the desired tools and resources necessary to perform your job well?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          label="Answer:"
          fullWidth
          rows={3}
          variant="filled"
        />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>5.</span>How you rate your awareness on organisation’s goals, vision and values?
</Typography>
<Rating name="half-rating" sx={{marginTop:"10px"}} defaultValue={2.5} precision={0.5} size="large" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>6.</span>How you will rate your clarity about your KRAs and management’s expectation from you?
</Typography>
<Rating name="half-rating" sx={{marginTop:"10px"}} defaultValue={2.5} precision={0.5} size="large" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>7.</span>Did you receive useful feedback from your RM during these months?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          label="Answer:"
          fullWidth
          rows={3}
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>8.</span>After your joining (till date), have you attended any training program?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          label="Answer:"
          fullWidth
          rows={3}
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>9.</span>How do you describe the overall working culture of the organisation (in 1 – 3 words)?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          fullWidth
          label="Answer:"
          rows={2}
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>10.</span>Would you like to give some suggestions to further improve & create a positive working
culture in the organisation?
</Typography>
<TextField
          id="filled-multiline-static"
          multiline
          label="Answer:"
          fullWidth
          rows={3}
          variant="filled"
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">
        <span style={{color: '#ed1c24'}}>11.</span>Please rate your overall experience on below scale:
</Typography>
<Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" sx={{marginTop:"10px"}}/>
        </Grid>
        
      </Grid>
      <Button type='submit' sx={{backgroundColor:'#ed1c24'}} size="large" variant="contained">Submit</Button>
    </div>
    </form>
  );
}