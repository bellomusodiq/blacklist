import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../Card/Card';


const Footer = props => (
    <Card>
        <Grid container style={{ padding: 20, boxSizing: 'border-box' }} justify="flex-start">
            <Grid item md={4} xs={6} style={{ marginTop: 20 }} >
                <Typography variant="button">Company</Typography>
                <Typography>About Us</Typography>
                <Typography>Press & Media</Typography>
                <Typography>Careers</Typography>
                <Typography>Ambassadors</Typography>
                <Typography>Customer Stories</Typography>
                <Typography>FAQ</Typography>
                <Typography>Security</Typography>
            </Grid>
            <Grid item md={4} xs={6} style={{ marginTop: 20 }} >
                <Typography variant="button">Legal</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Terms</Typography>
            </Grid>
            <Grid item md={4} xs={6} style={{ marginTop: 20 }} >
                <Typography variant="button">Connect</Typography>
                <Typography>support@theblacklist.com</Typography>
                <Typography>+234 812 325 8600</Typography>
            </Grid>
        </Grid>
    </Card>
)

export default Footer;