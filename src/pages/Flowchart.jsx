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
                                startIcon={<HelpCircle/>}
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
                                    <li>Ink Cash, Unlimited, and/or Preferred (check current bonuses to pick which)</li>
                                    <li>United Business</li>
                                    <li>Hyatt Business</li>
                                    <li>Southwest Business Premier and/or Performance (see * below for timing)</li>
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
                                    <li><b>Bank of America:</b> Alaska Biz and the two Biz Cash cards are popular options. Bank of America may require you to open a CD to "secure" the card though.</li>
                                    <li><b>Capital One:</b> <u>Only Venture X Business or <i>Spark Cash Plus!</i></u> Others show on your personal report.</li>
                                    <li><b>Citi:</b> AA Business. Usually requires 5 years of credit history.</li>
                                    <li><b>US Bank:</b> Leverage, Business Altitude Connect, Business Triple Cash. Be <u>very</u> careful with MS.</li>
                                    <li><b>Wells Fargo:</b> Requires a WF bank account 1+ year old.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Cards possibly worth burning a 5/24-slot for:</b></Typography>
                                <Typography variant="body1" paragraph>
                                A handful of cards may be worth burning a 5/24-slot for, depending on your goals and your 5/24 status.  Note that these cards will reduce how many of the Chase personal cards you can get, so see how many of those cards you'd like to get and make sure you have enough slots for those.  Whether it is worth burning a 5/24-slot for these cards is a <i>judgement call</i> you'll have to make.
                                </Typography>
                                <ul>
                                    <li><b>Capital One Venture or Venture X 75k+ offer:</b> Capital One does not have a hard #/24-like rule, though they almost never approve above 5-6/24. Capital One Venture points can be quite valuable (transfer 1:1 to various airlines), so can be worth burning a 5/24 slot for.</li>
                                    <li><b>Citi Premier 75k+ offer:</b> Citi has a restricted 48-month rule on this card, so may be worth starting the timer on that sooner rather than later.</li>
                                    <li><b>Bilt:</b> But only if you have high monthly rent (I'd start considering it with rent at $4k+/month, but more like $5.5k+ to really consider it), have plenty of non-rent spend to meet other card bonuses, and will be under 5/24 for a year+ still.</li>
                                    <li><b>New all-time high offers:</b> We cannot predict every possible bonus offer for every card in the future, very occasionally a "too good to pass up" offer comes around worth burning a 5/24 slot on.  For example, if US Bank Altitude Reserve has a 100k bonus.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="question-card" sx={{ mt: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>NOTES FOR UNDER 5/24 SECTION:</b></Typography>
                                <Typography variant="body1" paragraph>
                                    <b>Recommended gap between Chase apps (both personal and business) is <u>3+ months.</u></b> Occasionally breaking that rule is okay, but doing so repeatedly will greatly heighten Chase Shutdown risk.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    * <b>If you get the Southwest cards in fall/early-winter so that the bonuses post in January/February</b>, you'll maximize how long you have the Companion Pass.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    ** <b>Read the "NOTES FOR MARRIOTT CARDS" section</b> before getting a Marriott card. (see below)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    *** <b>Most business cards</b> (Chase, Amex, Citi, Barclays, Bank of America, Wells Fargo, US Bank) <b><u>do not</u></b> show on your credit-report and hence <b><u>do not</u></b> count against 5/24. Capital One "<i>Spark Cash Plus</i>" and "<i>Venture X Business</i>" also <b><u>do not</u></b> show on personal report, though other Capital One biz cards <b><u>do</u></b> show. Discover biz cards <b><u>do</u></b> too. Avoid biz cards which show on your personal report if under 5/24.
                                </Typography>
                                <Button
                                startIcon={<HelpCircle/>}
                                onClick={() => setCurrentQuestion('MARRIOTTCARDS')}
                                sx={{ mt: 2 }}
                                >
                                    NOTES FOR MARRIOTT CARDS
                                </Button>
                            </CardContent>
                        </Card>
                        <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
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
                    <Box>
                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Recommended Travel Cards</b></Typography>
                                <Typography variant="body1" paragraph>
                                    This is where things get fuzzy. Essentially, <b>you should start working your way down the list from biggest sign-up bonus to smaller bonuses, while taking into account banks' application rules and sensitivity to inquiries/new accounts</b>, which is both highly subjective and an ever-changing target. Here's a good default list to consult; please tailor to your needs.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <b>To maximize your approval odds</b>, you'll usually want to spread applications among banks over time, and <b>respect banks' application rules</b> (Amex's 2/90 and 5-credit-card-limit, and 1/90 same-card rule; Barclay's 6/24; Citi's 8/65 and 6/6; Bank of America's 2/3/4 and 3/12-or-7/12).
                                </Typography>
                                <ol>
                                    <li>If you are exactly 5/24, 1-2 Barclays cards (same day if 2).  JetBlue Plus, AA, Hawaiian, Wyndham.  If you are 6+/24, expect denial (maybe worth trying anyway at 6/24).</li>
                                    <li>If you are 5-6/24, Capital One Venture or Venture X.  Note Capital One approvals are an enigma, and Capital One doesn't have reconsideration.</li>
                                    <li>Citi Premier 70k+ offers.  Sometimes inquiry-sensitive, may need to be 0-1/6.</li>
                                    <li>Bank of America card:  Alaska personal or biz, Virgin Atlantic, Air France, Premium Rewards (regular and Elite). Having a Bank of America bank account helps greatly with approvals.  Some folks can get 2 in the same day, though highly YMMV now.</li>
                                    <li>Amex charge cards and co-branded cards: key factors are which cards have good bonuses at the moment, the annoying new card family rules (see the "NOTES FOR AMEX CARD-FAMILY RULES" below explaining this).</li>
                                    <li>Targeted NLL offers for, or upgrade offers into, Amex cards <i>you've had before.</i></li>
                                    <li>Amex Blue Business Plus. Great keeper card for 2x earning and no-AF way to keep MR account alive.</li>
                                    <li>Wells Fargo Autograph Journey.</li>
                                    <li>US Bank Altitude Reserve (inquiry-count likely needs to be 0/6 and ≤ 2/12, and <b>don't</b> buy any gift cards at all).</li>
                                    <li>Citi AA personal and/or biz.</li>
                                    <li>Bilt card if you pay rent.  Priority of this highly depends on how much your rent is.  If less than $2k then low priority. If $4k+, then may be worth getting fairly soon after reaching 5/24.</li>
                                    <li>High-bonus cash-back cards from other column (e.g. Bank of America and US Bank Biz cards, NavyFed Flagship, etc), even if you mostly want travel rewards.</li>
                                    <li>Citi Custom Cash 30k bonus.  Good way to add to TYP balance without resetting TYP-card 24-month counter.</li>
                                    <li>US Bank FlexPerks Gold.</li>
                                    <li>Amex Everyday and Everyday Preferred</li>
                                    <li>Other travel cards, e.g. Avianca Vuela, Lufthansa, Korean Air, Amtrak, Best Western, Choice, Expedia.</li>
                                    <li>One-off CU credit cards with big bonuses - follow Doctor of Credit to stay informed</li>
                                </ol>
                                <Button
                                    startIcon={<HelpCircle/>}
                                    onClick={() => setCurrentQuestion('AMEX CARD-FAMILY RULES')}
                                    sx={{ mt: 2 }}
                                >
                                    NOTES FOR AMEX CARD-FAMILY RULES
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>Popular travel-rewards for category-spend</b></Typography>
                            <ul>
                                <li><b>Amex Gold:</b> 4x on restaurants + groceries</li>
                                <li><b>Amex Green:</b> 3x on travel + restaurants</li>
                                <li><b>Amex Biz Gold:</b> 4x on 2 categories among 6 options</li>
                                <li><b>Bilt:</b> 1x on rent with no fee</li>
                                <li><b>CSR:</b> 3x on travel + restaurants</li>
                                <li><b>Chase Ink Cash:</b> 5x on internet/TV/phone/streaming bills + office-supply-stores</li>
                                <li><b>Chase Ink Preferred:</b> 3x on online-advertising + shipping + travel + internet/TV/phone/streaming bills</li>
                                <li><b>Chase Freedom (either one):</b> 3x on dining + drugstores</li>
                                <li><b>Chase Freedom Flex:</b> 5x in rotating categories</li>
                                <li><b>Citi Premier:</b> 3x on restaurants + gas + groceries + travel</li>
                            </ul>
                        </CardContent>
                        </Card>

                        <Card className="question-card">
                        <CardContent>
                            <Typography variant="h6" gutterBottom><b>Popular travel-rewards for unbonused spend</b></Typography>
                            <ul>
                                <li><b>For MRs:</b> Amex Blue Business Plus earns 2 MR/$</li>
                                <li><b>For URs:</b> Chase Freedom Unlimited / Ink Unlimited earn 1.5 URs/$</li>
                                <li><b>For TYPs:</b> Citi DoubleCash earns 2 TYPs/$</li>
                                <li><b>For Capital One Venture points:</b> Capital One Venture and Spark Miles earn 2 points/$</li>         
                            </ul>
                        </CardContent>
                        </Card>
                        <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>
                            Back to Start
                        </Button>
                    </Box>
                );
            case 'cashback':
                return (
                    <Box>
                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>For Cashback Signup Bonuses</b></Typography>
                                <Typography variant="body1" paragraph>
                                <b>To maximize your approval odds</b>, you'll usually want to spread applications among banks over time, and <b>respect banks' application rules</b> (Amex's 2/90 and 5-credit-card-limit, and 1/90 same-card rule; Barclay's 6/24; Citi's 8/65 and 6/6; Bank of America's 2/3/4 and 3/12-or-7/12).
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
                            </CardContent>
                        </Card>

                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Popular cash-back for category-spend</b></Typography>
                                <Typography variant="body1" paragraph>
                                    <b>Fixed-bonus-category cards:</b>
                                </Typography>
                                <ul>
                                    <li><b>Amex BCP:</b> 6% on groceries + streaming, 3% on transit + gas</li>
                                    <li><b>Amex BCE:</b> 3% on select US Online Retail + groceries + gas</li>
                                    <li><b>Capital One SavorOne:</b> 3% on restaurants + entertainment + streaming + groceries</li>
                                    <li><b>Citi Costco Visa:</b> 4% on gas, 3% on restaurants + travel, 2% at Costco</li>
                                    <li><b>Chase Freedom Flex/Unlimited:</b> 3% on restaurants + drugstores</li>
                                    <li><b>Chase Ink Cash:</b> 5% on office-supply stores + Internet/TV/phone/streaming bills</li>
                                    <li><b>Chase Amazon Prime Rewards:</b> 5% at Amazon + Whole Foods</li>
                                    <li><b>Wells Fargo Autograph:</b> 3% on dining + travel+transit + gas + streaming + phone bills</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    <b>Rotating-bonus-category cards</b> (5% in categories):
                                </Typography>
                                <ul>
                                    <li><b>Discover It</b></li>
                                    <li><b>Chase Freedom Flex</b></li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    <b>Choose-your-own/automatic-highest bonus-category cards</b> (% listed for particular category):
                                </Typography>
                                <ul>
                                    <li><b>Bank of America Customized Cash Rewards:</b> 3%</li>
                                    <li><b>Citi Custom Cash:</b> 5%</li>
                                    <li><b>US Bank Cash+:</b> 5%</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>Popular cash-back for unbonused spend</b></Typography>
                                <ul>
                                    <li><b>Discover it Miles (1st year only):</b> 3%.</li>
                                    <li><b>Alliant Cashback:</b> 2.5% if you have an Alliant High-Rate Checking account with $1k+ balance and make monthly deposits.</li>
                                    <li><b>Citi DoubleCash, Wells Fargo Active Cash, Fidelity Rewards Visa, SoFi, Amex Blue Business Cash:</b> 2%.</li>
                                    <li><b>Capital One Spark Cash Plus:</b> 2%, $95 AF.  Useful for legit high-spend businesses.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('under524')}>Back to Start</Button>
                    </Box>
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
                case 'MARRIOTTCARDS':
                    return (
                        <Card className="question-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom><b>NOTES FOR MARRIOTT CARDS:</b></Typography>
                                <Typography variant="body1" paragraph>
                                    Marriott cards have very confusing eligibility rules. There are multiple possible paths around these restrictions, depending on how much you value Marriott cards and points:
                                </Typography>
                                <ul>
                                    <li><b>Get all the Marriott cards:</b> May not be possible if you already have a Marriott card.</li>
                                    <ol>
                                        <li>Start with Chase Boundless and Bountiful while under 5/24.</li>
                                        <li>24 months after receiving those bonuses, start getting Amex Marriott cards.  If under 5/24 start with Business.  Note that to get Bevy, you need to cancel Boundless+Bountiful and wait 30 days -- up to you if that's worth doing (Boundless can be a keeper for some, whereas Bevy is a useless card after a year).  Also note that you can't get Bevy if you've had Brilliant.</li>
                                    </ol>
                                    <li><b>Focus on possibly-useful keeper cards:</b> Most useful cards in long-term are Boundless, Ritz (only available via upgrade from a Chase personal Marriott card), Business, and Brilliant.  One way to get all these:</li>
                                    <ol>
                                        <li>Get Chase Boundless and Bountiful.</li>
                                        <li>Downgrade Bountiful to Bold after a year.</li>
                                        <li>Get Business and Brilliant 24 months after receiving Boundless + Bountiful bonuses.</li>
                                        <li>Upgrade Bold to Ritz after receiving Brilliant bonus.</li>
                                    </ol>
                                    <li><b>Just get either Chase or Amex cards:</b> No complicated restrictions if you stick to just one card-issuer.  Advantage of going with Amex is that those cards aren't subject to 5/24 and there are 3 worthwhile Amex Marriott cards to get (compared to Chase's 2).  Advantage of going with Chase is they won't use slots in Amex's 5 credit card limit.</li>
                                </ul>
                                <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('yes524')}>Back to Under 5/24 Approach</Button>
                            </CardContent>
                        </Card>
                    );
                    case 'AMEX CARD-FAMILY RULES':
                        return (
                            <Card className="question-card">
                                <CardContent>
                                    <Typography variant="h6" gutterBottom><b>NOTES FOR AMEX CARD-FAMILY RULES:</b></Typography>
                                    <Typography variant="body1" paragraph>
                                        Starting in Fall 2023, Amex has been introducing family-level rules in a unique and confusing way. <b>Within affected card families, once you ever have a "higher" card, you are ineligible for a "lower" card's bonus.</b> So for example getting Platinum means you can't get Green or Gold bonus; and getting Gold means you can't get Green bonus.  And similar for personal Delta cards, personal Marriott cards, Everyday cards, and Blue Cash cards.  Business cards haven't been impacted yet thankfully, nor personal Hilton.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        This changes the order and timing for Amex cards significantly.  For example, we used to say that Amex Platinum could often be worth burning a 5/24 slot for.  But it's likely <b>not</b> worth burning a 5/24 slot for AND losing opportunity to get Gold and Green bonus, and it's also likely <b>not</b> worth burning three 5/24 slots for Green then Gold then Platinum.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        <b>So we now recommend avoiding Amex personal cards until 5+/24</b>, but there are exceptions.  If you've already had Green and/or Gold cards, then getting Platinum may be fine. Or if you can't get business cards and would make really good use out of free checked bag on Delta, maybe Amex Delta Gold would be worth burning a 5/24 slot on.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        <b>Once you are 5+/24, then working your way up each card family allows you to get all the bonuses.</b> This will delay getting the "higher" cards though -- up to you if it's worth skipping some bonuses to get to the higher cards faster. Of course skip super low bonus cards like Delta Blue regardless.
                                    </Typography>
                                    <Button variant="contained" color="secondary" onClick={() => setCurrentQuestion('travel')}>Back to Recommended Travel Cards</Button>
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
