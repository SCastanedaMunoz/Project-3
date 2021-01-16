import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function RegisteredAgent({ handleRADetailChange }) {

    const validatorSubmit = () => {

    }

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Registered Agent Information
      </Typography>
            <ValidatorForm
                onSubmit={validatorSubmit}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextValidator
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            onChange={handleRADetailChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextValidator
                            required
                            id="address1"
                            name="address1"
                            label="Address Line 1"
                            fullWidth
                            onChange={handleRADetailChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextValidator
                            id="address2"
                            name="address2"
                            label="Address Line 2"
                            fullWidth
                            onChange={handleRADetailChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextValidator
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            onChange={handleRADetailChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextValidator
                            required
                            id="state"
                            name="state"
                            label="State"
                            fullWidth
                            onChange={handleRADetailChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextValidator
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal Code"
                            onChange={handleRADetailChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Fragment>
    );
}