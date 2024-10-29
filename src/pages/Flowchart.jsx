import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Flowchart.css';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import { HelpCircle } from 'lucide-react';

function Flowchart() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState('under524');

    const handleNavigate = (path) => {
        navigate(path);
    };

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
                                <Typography variant="h6" gutterBottom><b>Under 5/24 approach:</b></Typography>
                                <ol>
                                    <li><b>Apply for a Chase card every 3+ months.</b> Occasionally getting Chase cards faster than that is fine, but repeatedly doing so will greatly heighten Chase Shutdown risk.</li>
                                    <li>Since most business cards don't impact 5/24 (see *** below), <b>get non-Chase business cards whenever you'd like as "spacers" between Chase apps.</b></li>
                                    <li>Consider burning a 5/24 slot on a few select non-Chase personal cards (see below).</li>
                                </ol>
                                <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                            </CardContent>
                        </Card>
                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Chase Cards</b></Typography>
                                <Typography variant="body1">
                                    Depending on your #/24-status, you'll be able to get up to 5 Chase personal cards in a 24-month period. My highly-subjective and rough priority order for Chase personal cards:
                                </Typography>
                                <ol>
                                    <li>Chase Sapphire Preferred/Reserve</li>
                                    <li>United Quest, Explorer and/or Club</li>
                                    <li>Aeroplan</li>
                                    <li>SW Priority or Plus (see * below)</li>
                                    <li>Marriott Boundless (see ** below)</li>
                                    <li>IHG Premier</li>
                                    <li>World of Hyatt (no good bonus in years; "good" = 50k+ with MSR less than or = $6k)</li>
                                    <li>British Airways / Aer Lingus / Iberia</li>
                                    <li>Freedom Flex and/or Unlimited</li>
                                </ol>
                                <Typography variant="body1">
                                    For Chase business cards, my suggested priority order is:
                                </Typography>
                                <ol>
                                    <li>Ink Cash, Unlimited and/or Preferred (check current bonuses to pick which)</li>
                                    <li>United Business</li>
                                    <li>Hyatt Business</li>
                                    <li>SW Business Premier and/or Performance (see * below for timing)</li>
                                    <li>IHG Business</li>
                                </ol>
                                <Typography variant="body1">
                                    <b>Remember:</b>  To avoid Chase shutdowns, one Chase card per 3+ months is the recommended sustained velocity, counting both personal and business Chase cards together.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Non-Chase Business Cards</b></Typography>
                                <Typography variant="body1">
                                    Use non-Chase business cards as <b>spacers</b> between Chase apps. No card-specific priority order here since it should mostly depend on which cards are at good bonuses, but here are banks to consider along with key rules:
                                </Typography>
                                <ul>
                                    <li><b>Amex:</b> Easiest business cards to get by-far, and lot of great options. Bonuses vary wildly though, and due to the lifetime-rule you'll want to get cards at high/near-high bonuses. Note 1/5 and 2/90 rules and the 5-credit-card limit (charge cards exempt).</li>
                                    <li><b>Barclays:</b> Has a (soft) 6/24 rule, so best to get the Barclays biz cards you want while under 5/24. Main biz options are AA, JetBlue, Hawaiian, and Wyndham.</li>
                                    <li><b>BoA:</b> Alaska Biz and the two Biz Cash cards are popular options. BoA may require you to open a CD to "secure" the card though.</li>
                                    <li><b>Cap1:</b> <u>Only Venture X Business or Spark Cash Plus!</u> Others show on your personal report.</li>
                                    <li><b>Citi:</b> AA Biz. Usually requires 5 yrs of credit history.</li>
                                    <li><b>US Bank:</b> Leverage, Biz Altitude Connect, Biz Triple Cash. Be <u>very</u> careful with MS.</li>
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
                                This is where things get fuzzy.  Essentially, <b>you should start working your way down the list from biggest sign-up bonus to smaller bonuses, 
                                while taking into account banks' application rules and sensitivity to inquiries/new accounts</b>, which is both highly-subjective and an ever-changing target 
                                (may be worth rereading the "Limitations of this Flowchart" section).  Here's a good default list to consult; please tailor to your needs.
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                        </CardContent>
                    </Card>
                );
            case 'cashback':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>For cashback signup bonuses</b></Typography>
                            <Typography variant="body1" paragraph>
                                <b>"To maximize your approval odds, ..." paragraph from Travel column applies here too.</b>  Please read that first.
                            </Typography>
                            <ol>
                              <li>Capital One Venture or Venture X (these are "travel" cards but there are ways to redeem the bonuses essentially for cash)</li>
                              <li>BoA Biz Unlimited/Customized Cash ($500-$750)</li>
                              <li>BoA Premium Rewards (regular and Elite)</li>
                              <li>US Bank Leverage Card ($750)</li>
                              <li>US Bank Business Altitude Connect ($600)</li>
                              <li>US Bank Triple Cash Business ($500)</li>
                              <li>US Bank Altitude Connect ($500)</li>
                              <li>Cap1 Spark Cash Plus (6 mo after Venture)</li>
                              <li>Cap1 Spark Miles (6 mo after Spark Cash)</li>
                              <li>Wells Fargo Signify Business (requires a 1+ year old WF bank account)</li>
                              <li>PenFed Pathfinder</li>
                              <li>NavyFed Flagship</li>
                              <li>US Bank Altitude Reserve (inquiry count probably needs to be 0/6 and less than or = 2/12)</li>
                              <li>Citi Premier 70k+ (inquiries may need to be 0-1/6)</li>
                              <li>Amex Blue Business Cash</li>
                              <li>Amex BCE (look for $250+ bonus) and BCP (look for $300+ bonus)</li>
                              <li>Capital One Savor (6 months after Spark)</li>
                              <li>Amex MR cards (with a Schwab Platinum card, MRs can be redeemed to a Schwab account for 1.1 cents each)</li>
                              <li>One-off CU credit cards with big bonuses - follow Doctor of Credit to stay informed</li>
                              <li>Plenty of $100-$150 bonus cards from smaller banks/CUs to consider when way past 5/24 and out of higher-bonus options.</li>
                            </ol>
                            <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                        </CardContent>
                    </Card>
                );
            case 'what524':
                return (
                    <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>Chase CC rules, including 5/24</b></Typography>
                            <Typography variant="body1" paragraph>
                                As of May 2015, Chase will no longer approve several of their credit cards if you have had more than 5 newly opened credit card accounts, 
                                across all lenders, in the past 2 years. This policy has been expanded to a number of co-branded cards as of May 2016, 
                                the exact cards are still being reported in, but the following are included:
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
                                Even if the policy does not apply to a particular card, Chase does deny people for having more than 15 new accounts in the last two years. 
                                Keep this in mind before you apply. The only way to bypass is to wait for all your new accounts to age beyond 2 years. To be <b>CRYSTAL CLEAR. </b> 
                                ALL Credit Cards from ANY bank can count against 5/24, including Store Cards, Authorized User cards, etc. 
                                Mortgages, Car Loans, and other types of credit does not count against 5/24.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>Sapphire Rule</i></Typography>
                            <Typography variant="body1" paragraph>
                                Starting in Sep 2018, Chase no longer will approve a 2nd Sapphire product within 48 months of previous Sapphire bonus. 
                                This rule treats CSP and CSR as one family, so if you apply for the CSP, you will not be approved for the CSR until 4 years 
                                after you receive the CSP bonus, AND that you cancel or product change the CSP.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>Chase Shutdowns</i></Typography>
                            <Typography variant="body1" paragraph>
                                <b>Dec 15, 2017:</b> There has been multiple reports that Chase closed <b>ALL CCs</b> when a customer applies to too many cards too fast. 
                                Typically it is someone with a thin credit history applies to many Chase cards in the first year. 
                                Due to this, I recommend that you take your time getting to 5/24. See <a href="https://www.reddit.com/r/churning/comments/7jb8mp/shutdown_reports_megathread/">Here</a> and <a href="https://www.reddit.com/r/churning/comments/7jla34/card_shutdowns_and_bustout_score_risk_factors/">Here</a>.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                There is also a <a href="https://www.flyertalk.com/forum/chase-ultimate-rewards/1526572-chase-closed-my-credit-card-account-s-archived-2013-mid-2019-a.html">Great Flyertalk Thread</a> that captures a lot more historical data on this. It is a slog, but even if you read just the Wiki there, you will get a sense on what NOT to do.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                From <a href="https://old.reddit.com/user/perfectviking">/u/perfectviking:</a> It maybe better to NOT start with CSR/CSP app if you are just starting out in this hobby. Take your time to apply for 4 other Chase cards first, build up some history, then do a double app to get CSR/CSP the same day. (Note: Double dipping or MDD of sapphire no longer works)
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <b>Jan 3rd, 2018: Currently Recommended Approach to prevent a Chase Shutdown</b>
                            </Typography>
                            <ul>
                              <li>Apply for Chase cards slowly. One every 3-4 months.</li>
                              <li>Get all the Chase cards you want, up to 5 or 6. It should take about 1 - 1.5 years. Don't apply for anything else during this time.</li>
                              <li>Move away from Chase now, apply to other banks. NO MORE Chase APPS!</li>
                              <li>If you ever want to apply to Chase again for a non 5/24 card, go sit in the Purgatory and not apply for anything for 6 months first.</li>
                            </ul>
                            <Typography variant="body1" paragraph>
                                There are various discussions about applying for Biz cards, etc. I think that just confuses people. Just treat them all the same and take it easy.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                MOD NOTE: Given that most people start with CSP/CSR first in the past years, there aren't a lot of data points on the effect of getting CSR/CSP 
                                combo as your 5th Chase app. I hope you have seasoned your Chase relationship well by that time, but YMMV.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>Other Limitations</i></Typography>
                            <Typography variant="body1" paragraph>
                                Chase not only has a 5/24 rule, Chase also looks at your application history for all their other cards. They can turn you down for:
                            </Typography>
                            <ul>
                              <li>Not enough credit history. If you've never had your own credit card (AU cards don't count), Chase will usually deny you. Other accounts such as Student loan can impact this decision, but don't plan on Chase being your first credit card.</li>
                              <li>Too many new cards from Chase. Don't try for more than 2 in 30 days, 3 in 6 months, or more than 4 a year. This is not a hard rule like 5/24, but many have being turned down for trying for too many Chase cards too fast.</li>
                              <li>Too many new cards overall. If you applied for more than 7-8 cards in the past 12 months, Chase can say no to you.</li>
                              <li>Reaching maximum credit limit with Chase. Data points suggest that Chase is willing to extend a credit line up to 50-60% of your total annual income. Once that limit is hit they are unlikely to approve you for any additional cards. It is highly recommended to lower your Chase credit limits to as low as you feel comfortable in order to both increase chances of auto approval and decrease your chances at shutdown.</li>
                            </ul>
                            <Typography variant="body1" paragraph>
                                Chase usually wants to see you own some other credit card for a year before approving you for a card. This means Chase should not be your first app. AU cards does not count toward this, so you need to get some other card on your own, and manage that well for a year, before applying for a Chase card.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                To get the sign-on bonus again on a Chase card, you need to meet two criteria:
                            </Typography>
                            <ul>
                              <li>You don't have the card currently</li>
                              <li>It has been 48 months since you last received a sign-on bonus on the card</li>
                            </ul>
                            <Typography variant="body1" paragraph>
                                <a href="https://www.reddit.com/r/churning/comments/77narp/faq_different_ways_to_use_chase_ultimate_rewards/">Click Here</a> to see how you can use your Chase Ultimate Rewards Points.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>Calling Chase Recon for Business Card applications</i></Typography>
                            <Typography variant="body1" paragraph>
                                The current best practice is that you <b>DO NOT</b> call recon for Chase Ink applications unless you have a paper trail for a legitimate business such as tax filings. Many people have been denied on the recon call, while folks who just wait it out often get approved. If you want to call recon regarding an Ink application, only do so AFTER you receive a denial letter.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>How long does it take to get my sign-on bonus from Chase</i></Typography>
                            <ul>
                              <li>Sapphire and Freedom cards: Pretty consistently deliver sign-on bonus UR points at statement close.</li>
                              <li>Marriott and IHG cards : can take a month after statement close.</li>
                              <li>Hyatt, Southwest and United cards usually takes a couple of days after statement close.</li>
                            </ul>
                            <Typography variant="body1" paragraph>
                                If you hit MSR too close to your statement close date, it may take an extra statement for your bonus to post.
                            </Typography>
                            <Typography variant="h6" gutterBottom><i>How long does it take to get my spend points/Miles from Chase?</i></Typography>
                            <ul>
                              <li>Chase UR are usually added to your UR balance at statement close.</li>
                              <li>Hyatt/Marriott/IHG/Southwest points are usually added to your account 2-3 days after statement close.</li>
                            </ul>

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
            <Box className='left-container'>
                <Box className='left-header'>
                    <Typography variant="h5" className="logo">Credit Compass</Typography>
                </Box>
                <Box className='nav-container'>
                    <List>
                        <ListItem button onClick={() => handleNavigate('/dashboard')}>
                            <ListItemText primary="Overview" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/flowchart')}>
                            <ListItemText primary="Flowchart" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/cards')}>
                            <ListItemText primary="Cards" />
                        </ListItem>
                    </List>
                </Box>
            </Box>

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