import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Divider,
} from '@mui/material';
import Sidebar from '../components/sidebar';

// Hardcoded redemption partners and rates
const redemptionPartners = {
    "Air Canada (Aeroplan)": {
        Airline_Partners: "https://www.aircanada.com/ca/en/aco/home/aeroplan/partners.html#/",
        Reward_Chart: "https://www.aircanada.com/content/dam/aircanada/loyalty-content/documents/flight-rewards-chart-en.pdf",
        Rates: { Amex_MR: 1, Bilt: 1, Capital_One: 1, Chase_UR: 1, Citi_ThankYou: null, Wells_Fargo: null },
    },
    "Singapore Airlines (KrisFlyer)": {
        Airline_Partners: "No list, but looking at the award charts should tell you who all of the partners are",
        Reward_Chart: "https://www.singaporeair.com/en_UK/us/ppsclub-krisflyer/use-miles/redeem-miles/",
        Rates: { Amex_MR: 1, Bilt: null, Capital_One: 1, Chase_UR: 1, Citi_ThankYou: 1, Wells_Fargo: null },
    },
    "Avianca (LifeMiles)": {
        Airline_Partners: "N/A",
        Reward_Chart: "https://thriftytraveler.com/wp-content/uploads/2022/06/Avianca-Redemption-Table.pdf",
        Rates: { Amex_MR: 1, Bilt: 1, Capital_One: 1, Chase_UR: null, Citi_ThankYou: 1, Wells_Fargo: 1 },
    },
    "United (MileagePlus)": {
        Airline_Partners: "https://www.united.com/ual/en/us/fly/mileageplus/earn-miles/airline-partners.html",
        Reward_Chart: "No official Award Chart",
        Rates: { Amex_MR: null, Bilt: 1, Capital_One: null, Chase_UR: 1, Citi_ThankYou: null, Wells_Fargo: null },
    },
    "British Airways (Executive Club)": {
        Airline_Partners: "https://www.britishairways.com/content/en/us/information/partners-and-alliances",
        Reward_Chart: "https://financebuzz.com/avios-award-chart",
        Rates: { Amex_MR: 1, Bilt: 1, Capital_One: 1, Chase_UR: 1, Citi_ThankYou: null, Wells_Fargo: 1 },
    },
    "Virgin Atlantic (Flying Club)": {
        Airline_Partners: "https://flywith.virginatlantic.com/gb/en/flying-club/airline-partners.html",
        Reward_Chart: "https://flywith.virginatlantic.com/gb/en/flying-club/spend-points/reward-flights.html",
        Rates: { Amex_MR: 1, Bilt: 1, Capital_One: 1, Chase_UR: 1, Citi_ThankYou: 1, Wells_Fargo: null },
    },
};

function Calculator() {
    const [creditCards, setCreditCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const storedCards = localStorage.getItem('creditCards');
        if (storedCards) {
            setCreditCards(JSON.parse(storedCards));
        }
    }, []);

    const handleCardSelection = (cardId) => {
        const card = creditCards.find((c) => c.id === cardId);
        setSelectedCard(card);
    };

    const calculatePointsRange = (rate) => {
        if (rate === null || rate === undefined) return { min: 'N/A', max: 'N/A' };

        return {
            min: Math.round(1000 * rate), // Minimum 1,000 points transferred
            max: Math.round(10000 * rate), // Maximum 10,000 points transferred
        };
    };

    return (
        <Box className="container">
            <Sidebar />
            <Box className="right-container" sx={{ padding: '2em' }}>
                <Typography variant="h4" gutterBottom>
                    Points Calculator
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Select a card to view its associated reward program and detailed transfer partner information.
                </Typography>

                <FormControl sx={{ minWidth: 200, marginBottom: '2em' }}>
                    <Select
                        value={selectedCard ? selectedCard.id : ''}
                        onChange={(e) => handleCardSelection(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Select a Card
                        </MenuItem>
                        {creditCards.map((card) => (
                            <MenuItem key={card.id} value={card.id}>
                                {card.company} - {card.holder}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {selectedCard && (
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Card: {selectedCard.company} - {selectedCard.holder}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Reward Program: {selectedCard.rewardProgram || 'N/A'}
                        </Typography>

                        <Divider sx={{ margin: '2em 0' }} />

                        <Typography variant="h5" gutterBottom>
                            Redemption Partners
                        </Typography>
                        <Paper sx={{ padding: '1em', marginBottom: '2em' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Partner</TableCell>
                                        <TableCell>Airline Partners</TableCell>
                                        <TableCell>Reward Chart</TableCell>
                                        <TableCell>Transfer Rates</TableCell>
                                        <TableCell>Potential Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.entries(redemptionPartners).map(([partner, details]) => {
                                        const programRate = details.Rates[selectedCard.rewardProgram];
                                        const pointsRange = calculatePointsRange(programRate);

                                        return (
                                            <TableRow key={partner}>
                                                <TableCell>{partner}</TableCell>
                                                <TableCell>
                                                    {details.Airline_Partners !== 'N/A' ? (
                                                        <a
                                                            href={details.Airline_Partners}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View
                                                        </a>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {details.Reward_Chart ? (
                                                        <a
                                                            href={details.Reward_Chart}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View
                                                        </a>
                                                    ) : (
                                                        'N/A'
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {Object.entries(details.Rates)
                                                        .map(([program, rate]) => (
                                                            <Typography key={program} variant="body2">
                                                                {program}: {rate !== null ? rate : 'N/A'}
                                                            </Typography>
                                                        ))}
                                                </TableCell>
                                                <TableCell>
                                                    {pointsRange.min} - {pointsRange.max}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Calculator;
