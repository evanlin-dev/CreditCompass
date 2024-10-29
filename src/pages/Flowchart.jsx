import React, { useState } from 'react';
import './Flowchart.css';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import { HelpCircle } from 'lucide-react';
import Sidebar from '../components/sidebar';

function Flowchart() {
    const [currentQuestion, setCurrentQuestion] = useState('under524');

    const renderQuestion = () => {
        switch (currentQuestion) {
            case 'under524':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Are you under 5/24?</Typography>
                            <Box className="button-container">
                                <Button variant="contained" color="primary" onClick={() => setCurrentQuestion('yes524')}>Yes</Button>
                                <Button variant="contained" color="primary" onClick={() => setCurrentQuestion('travelOrCashback')}>No</Button>
                            </Box>
                            <Button
                                startIcon={<HelpCircle />}
                                onClick={() => setCurrentQuestion('what524')}
                                sx={{ mt: 2 }}
                            >
                                What is 5/24?
                            </Button>
                        </CardContent>
                    </Card>
                );
            case 'yes524':
                return (
                    <Box>
                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Under 5/24 Approach:</b></Typography>
                                <ol>
                                    <li><b>Apply for a Chase card every 3+ months.</b> Occasionally getting Chase cards faster than that is fine, but repeatedly doing so will greatly heighten Chase shutdown risk.</li>
                                    <li>Since most business cards don't impact 5/24 (see *** below), <b>get non-Chase business cards whenever you'd like as "spacers" between Chase apps.</b></li>
                                    <li>Consider burning a 5/24 slot on a few select non-Chase personal cards (see below).</li>
                                </ol>
                                <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                            </CardContent>
                        </Card>

                        {/* Additional Information Cards */}
                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Chase Cards</b></Typography>
                                <Typography variant="body1" paragraph>
                                    Depending on your #/24 status, you'll be able to get up to 5 Chase personal cards in a 24-month period. My highly subjective and rough priority order for Chase personal cards:
                                </Typography>
                                <ol>
                                    <li>Chase Sapphire Preferred/Reserve</li>
                                    <li>United Quest, Explorer, and/or Club</li>
                                    <li>Aeroplan</li>
                                    <li>Southwest Priority or Plus (see * below)</li>
                                    <li>Marriott Boundless (see ** below)</li>
                                    <li>IHG Premier</li>
                                    <li>World of Hyatt</li>
                                    <li>British Airways / Aer Lingus / Iberia</li>
                                    <li>Freedom Flex and/or Unlimited</li>
                                </ol>
                                <Typography variant="body1" paragraph>
                                    For Chase business cards, my suggested priority order is:
                                </Typography>
                                <ol>
                                    <li>Ink Cash, Unlimited, and/or Preferred</li>
                                    <li>United Business</li>
                                    <li>Hyatt Business</li>
                                    <li>Southwest Business Premier and/or Performance</li>
                                    <li>IHG Business</li>
                                </ol>
                                <Typography variant="body1">
                                    <b>Remember:</b> To avoid Chase shutdowns, one Chase card per 3+ months is the recommended sustained velocity, counting both personal and business Chase cards together.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Non-Chase Business Cards</b></Typography>
                                <Typography variant="body1" paragraph>
                                    Use non-Chase business cards as <b>spacers</b> between Chase apps. No card-specific priority order here since it should mostly depend on which cards are at good bonuses, but here are banks to consider along with key rules:
                                </Typography>
                                <ul>
                                    <li><b>Amex:</b> Easiest business cards to get by far, and lots of great options. Bonuses vary wildly though, and due to the lifetime rule you'll want to get cards at high/near-high bonuses. Note 1/5 and 2/90 rules and the 5-credit-card limit (charge cards exempt).</li>
                                    <li><b>Barclays:</b> Has a (soft) 6/24 rule, so best to get the Barclays biz cards you want while under 5/24. Main biz options are AA, JetBlue, Hawaiian, and Wyndham.</li>
                                    <li><b>BoA:</b> Alaska Biz and the two Biz Cash cards are popular options. BoA may require you to open a CD to "secure" the card though.</li>
                                    <li><b>Capital One:</b> Only Venture X Business or Spark Cash Plus! Others show on your personal report.</li>
                                    <li><b>Citi:</b> AA Business. Usually requires 5 years of credit history.</li>
                                    <li><b>US Bank:</b> Leverage, Business Altitude Connect, Business Triple Cash. Be <u>very</u> careful with MS.</li>
                                    <li><b>Wells Fargo:</b> Requires a WF bank account 1+ year old.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Box>
                );
            case 'travelOrCashback':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Are you focusing on travel or cashback?</Typography>
                            <Box className="button-container">
                                <Button variant="contained" color="primary" onClick={() => setCurrentQuestion('travel')}>Travel</Button>
                                <Button variant="contained" color="primary" onClick={() => setCurrentQuestion('cashback')}>Cashback</Button>
                            </Box>
                        </CardContent>
                    </Card>
                );
            case 'travel':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>Recommended Travel Cards</b></Typography>
                            <Typography variant="body1" paragraph>
                                This is where things get fuzzy. Essentially, <b>you should start working your way down the list from biggest sign-up bonus to smaller bonuses, while taking into account banks' application rules and sensitivity to inquiries/new accounts</b>, which is both highly subjective and an ever-changing target. Here's a good default list to consult; please tailor to your needs.
                            </Typography>
                            {/* Include your list or additional content here */}
                            <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                        </CardContent>
                    </Card>
                );
            case 'cashback':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>For Cashback Signup Bonuses</b></Typography>
                            <Typography variant="body1" paragraph>
                                <b>"To maximize your approval odds, ..." paragraph from Travel column applies here too.</b> Please read that first.
                            </Typography>
                            <ol>
                                <li>Capital One Venture or Venture X (these are "travel" cards but there are ways to redeem the bonuses essentially for cash)</li>
                                <li>Bank of America Business Unlimited/Customized Cash ($500-$750)</li>
                                <li>Bank of America Premium Rewards (regular and Elite)</li>
                                <li>US Bank Leverage Card ($750)</li>
                                <li>US Bank Business Altitude Connect ($600)</li>
                                <li>US Bank Triple Cash Business ($500)</li>
                                <li>US Bank Altitude Connect ($500)</li>
                                <li>Capital One Spark Cash Plus (6 months after Venture)</li>
                                <li>Capital One Spark Miles (6 months after Spark Cash)</li>
                                <li>Wells Fargo Signify Business (requires a 1+ year old WF bank account)</li>
                                <li>PenFed Pathfinder</li>
                                <li>Navy Federal Flagship</li>
                                <li>US Bank Altitude Reserve (inquiry count probably needs to be 0/6 and ≤ 2/12)</li>
                                <li>Citi Premier 70k+ (inquiries may need to be 0-1/6)</li>
                                <li>Amex Blue Business Cash</li>
                                <li>Amex Blue Cash Everyday (look for $250+ bonus) and Blue Cash Preferred (look for $300+ bonus)</li>
                                <li>Capital One Savor (6 months after Spark)</li>
                                <li>Amex Membership Rewards cards (with a Schwab Platinum card, MRs can be redeemed to a Schwab account for 1.1 cents each)</li>
                                <li>One-off credit union credit cards with big bonuses - follow Doctor of Credit to stay informed</li>
                                <li>Plenty of $100-$150 bonus cards from smaller banks/credit unions to consider when way past 5/24 and out of higher-bonus options</li>
                            </ol>
                            <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                        </CardContent>
                    </Card>
                );
            case 'what524':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>Chase Credit Card Rules, Including 5/24</b></Typography>
                            <Typography variant="body1" paragraph>
                                As of May 2015, Chase will no longer approve several of their credit cards if you have had more than 5 newly opened credit card accounts, across all lenders, in the past 2 years. This policy has been expanded to a number of co-branded cards as of May 2016. The following are included:
                            </Typography>
                            <ul>
                                <li>Sapphire cards</li>
                                <li>Freedom cards</li>
                                <li>Slate</li>
                                <li>Ink cards</li>
                                <li>Southwest cards</li>
                                <li>United cards</li>
                                <li>Marriott Personal</li>
                            </ul>
                            <Typography variant="body1" paragraph>
                                Even if the policy does not apply to a particular card, Chase does deny people for having more than 15 new accounts in the last two years. Keep this in mind before you apply. The only way to bypass is to wait for all your new accounts to age beyond 2 years. To be <b>CRYSTAL CLEAR:</b> ALL credit cards from ANY bank can count against 5/24, including store cards, authorized user cards, etc. Mortgages, car loans, and other types of credit do not count against 5/24.
                            </Typography>
                            {/* Additional content continues here */}
                            {/* ... */}
                            <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Question</Button>
                        </CardContent>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <Box className='container'>
            {/* Left Sidebar */}
            <Sidebar />

            {/* Right Content */}
            <Box className='right-container'>
                {/* Header */}
                <Box className='right-header-container'>
                    <Typography variant="h4">Credit Card Flowchart</Typography>
                    <Typography variant="subtitle1">Find which cards you should get.</Typography>
                </Box>

                {/* Flowchart Content */}
                <Box className='flowchart-content'>
                    {renderQuestion()}
                </Box>
            </Box>
        </Box>
    );
}

export default Flowchart;
