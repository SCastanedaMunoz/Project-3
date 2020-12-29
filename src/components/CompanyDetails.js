import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function CompanyDetails({ handleCompanyDetailChange }) {
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Company Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="companyName"
                        name="companyName"
                        label="Company Name"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="filingDate"
                        name="filingDate"
                        label="Filing Date"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="effectiveDate"
                        name="effectiveDate"
                        label="Effective Date"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="businessPurpose"
                        name="businessPurpose"
                        label="Business Purpose"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address Line 1"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address Line 2"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal Code"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        onChange={handleCompanyDetailChange}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}