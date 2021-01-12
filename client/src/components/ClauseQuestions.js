import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export default function ClauseQuestions({
    members,
    certificateTerm, handleCertificateChange,
    standardVoteTerm, handleStandardVoteChange,
    // fundamentalVoteTerm, handleFundamentalVoteChange,
    taxDistributionTerm, handleTaxDistributionChange,
    pushPullTerm, handlePushPullChange,
    fiduciaryDutyTerm, handleFiduicaryDutyChange
}) {

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Add Clauses and Finish
            </Typography>
            {members.length < 2 ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Will this company be certificated or uncertificated?</FormLabel>
                            <RadioGroup aria-label="Certificates" name="certificates" value={certificateTerm} onChange={handleCertificateChange}>
                                <FormControlLabel value="Certificated" control={<Radio />} label="Certificated" />
                                <FormControlLabel value="Uncertificated" control={<Radio />} label="Uncertificated" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            ) : (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Will this company be certificated or uncertificated?</FormLabel>
                                <RadioGroup aria-label="Certificated?" name="certificated" value={certificateTerm} onChange={handleCertificateChange}>
                                    <FormControlLabel value="Certificated" control={<Radio />} label="Certificated" />
                                    <FormControlLabel value="Uncertificated" control={<Radio />} label="Uncertificated" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Should votes on normal company matters be unanimous or by majority-in-interest?</FormLabel>
                                <RadioGroup aria-label="Votes" name="votes" value={standardVoteTerm} onChange={handleStandardVoteChange}>
                                    <FormControlLabel value="Unanimous" control={<Radio />} label="Unanimous" />
                                    <FormControlLabel value="Majority-in-Interest" control={<Radio />} label="Majority-in-Interest" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Should the company agreemeent include a term for mandatory annual tax distributions?</FormLabel>
                                <RadioGroup aria-label="Tax Distribution" name="tax-distribution" value={taxDistributionTerm} onChange={handleTaxDistributionChange}>
                                    <FormControlLabel value="Include" control={<Radio />} label="Include" />
                                    <FormControlLabel value="Omit" control={<Radio />} label="Omit" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Should the company agreemeent include a push-pull buyout provision?</FormLabel>
                                <RadioGroup aria-label="Push-Pull Buyout" name="push-pull" value={pushPullTerm} onChange={handlePushPullChange}>
                                    <FormControlLabel value="Include" control={<Radio />} label="Include" />
                                    <FormControlLabel value="Omit" control={<Radio />} label="Omit" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Should the members have default fiduciary duties to the company or should the members' fiduicary duties be limited?</FormLabel>
                                <RadioGroup aria-label="Fiduciary Duties" name="fiduciary duties" value={fiduciaryDutyTerm} onChange={handleFiduicaryDutyChange}>
                                    <FormControlLabel value="Default" control={<Radio />} label="Default" />
                                    <FormControlLabel value="Limited" control={<Radio />} label="Limited" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                )}
        </Fragment>
    );
}