import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../Card/Card';
import Confidence from '../../assets/images/confidence.jpg';
import BlacklistImg2 from '../../assets/images/BLACKLIST2.jpg';
import Debtor from '../../assets/images/debtor.jpeg';
import './Landing.css';


const Row = props => (
    <Grid container direction={props.reverse?'row-reverse':'row'} spacing={5} alignItems='stretch'
        style={{ boxSizing: 'border-box', width: '100%', }}
        justify='space-between'>
        <Grid item md={6} >
            {/* <Card> */}
            {props.left}
            {/* </Card> */}
        </Grid>
        <Grid item md={6} >
            {/* <Card> */}
            {props.right}
            {/* </Card> */}
        </Grid>
    </Grid>
)


const Landing = props => (
    <Grid style={{ padding: 10, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}   >
        <Row reverse right={
            <Grid container direction='column' justify='center' style={{ height: '100%' }} >
                <Typography variant='h1' className="heading" style={{ fontWeight: 'bolder' }} >The Blacklist</Typography>
                <Typography style={{ fontSize: '2em' }} >
                    The blacklist is a central database which stores chronic debtors owning tech based
                    lending or loan company.
                </Typography>
            </Grid>
        }
            left={<img src={BlacklistImg2} style={{ width: '100%', boxShadow: '-5px 4px 18px 0 #b5b5b5' }} />} />
        <div style={{ marginTop: 20 }} ></div>
        <Row right={
            <Grid container direction='column' justify='center' style={{ height: '100%' }} >
                <Typography variant='h3' style={{ fontWeight: 'bolder' }} >Adding Debtors & Getting Paid</Typography>
                <div className="Olist">
                    <div className="Number">01</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }} >Create an account</Typography>
                        <Typography>
                            signup for an account with email
                            </Typography>
                    </div>
                </div>
                <div className="Olist">
                    <div className="Number">02</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }} >Add a debtor from your company</Typography>
                        <Typography>
                            By adding debtor from your company, it will help other lending company not
                            to give loan to a chronic debtor
                            </Typography>
                    </div>
                </div>
                <div className="Olist">
                    <div className="Number">03</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }}  >Make extra cash</Typography>
                        <Typography>
                            For every search on the debtor you added you get 20 NGN for api search & 400 NGN for
                            manual search on the system.
                            </Typography>
                    </div>
                </div>
            </Grid>
        }
            left={<img src={Debtor} style={{ width: '100%', boxShadow: '5px 4px 18px 0 #b5b5b5' }} />} />
        <div style={{ marginTop: 20 }} ></div>
        <Row reverse right={
            <Grid container direction='column' justify='center' style={{ height: '100%' }} >
                <Typography variant='h3' style={{ fontWeight: 'bolder' }} >
                    Increase Confidence on Who You Lend Money.
                </Typography>
                <div className="Olist">
                    <div className="Number">01</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }} >Signup/Login</Typography>
                        <Typography>
                            Login to dashboard
                        </Typography>
                    </div>
                </div>
                <div className="Olist">
                    <div className="Number">02</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }} >
                            Get api key
                        </Typography>
                        <Typography>
                            Get api key from dashboard, you can then integrate to your existing or new
                            loan system.
                        </Typography>
                    </div>
                </div>
                <div className="Olist">
                    <div className="Number">03</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }}  >Perform search via API</Typography>
                        <Typography>
                            You get fast response on wether you loan customer has an oustanding debt.
                        </Typography>
                    </div>
                </div>
                <div className="Olist">
                    <div className="Number">04</div>
                    <div className="Text">
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: 10 }}  >Or Manual Search</Typography>
                        <Typography>
                            You get full details of the borrower's debt.
                        </Typography>
                    </div>
                </div>
            </Grid>
        }
            left={<img src={Confidence} style={{ width: '100%', boxShadow: '-5px 4px 18px 0 #b5b5b5' }} />} />
    </Grid>
)

export default Landing;