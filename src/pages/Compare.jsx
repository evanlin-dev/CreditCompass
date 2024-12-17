import React, { useState, useEffect } from "react";
import { Box, Typography, FormControl, Select, MenuItem, Paper } from "@mui/material";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Sidebar from "../components/sidebar";

// Hardcoded point value rates for all reward programs
const pointValues = {
    Amex_MR: { cashBack: 0.01, flights: 0.02 },
    Bilt: { cashBack: 0.0125, flights: 0.018 },
    Capital_One: { cashBack: 0.01, flights: 0.015 },
    Chase_UR: { cashBack: 0.0125, flights: 0.02 },
    Citi_ThankYou: { cashBack: 0.01, flights: 0.015 },
    Wells_Fargo: { cashBack: 0.01, flights: 0.012 },
};

function Compare() {
    const [creditCards, setCreditCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [chartData, setChartData] = useState([]);

    // Load cards from local storage
    useEffect(() => {
        const storedCards = localStorage.getItem("creditCards");
        if (storedCards) {
            setCreditCards(JSON.parse(storedCards));
        }
    }, []);

    useEffect(() => {
        if (selectedCard) {
            const points = selectedCard.points || 0;

            // Generate chart data for all reward programs
            const data = Object.entries(pointValues).map(([program, rates]) => ({
                name: program,
                cashBack: points * rates.cashBack,
                flights: points * rates.flights,
            }));

            setChartData(data);
        }
    }, [selectedCard]);

    return (
        <Box className="container">
            <Sidebar />
            <Box className="right-container" sx={{ padding: "2em" }}>
                <Typography variant="h4" gutterBottom>
                    Compare Redemption Values Across Programs
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Select a credit card to compare its redemption values across all reward programs.
                </Typography>

                <FormControl sx={{ minWidth: 200, marginBottom: "2em" }}>
                    <Select
                        value={selectedCard ? selectedCard.id : ""}
                        onChange={(e) => {
                            const card = creditCards.find((c) => c.id === e.target.value);
                            setSelectedCard(card);
                        }}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Select a Card
                        </MenuItem>
                        {creditCards.map((card) => (
                            <MenuItem key={card.id} value={card.id}>
                                {card.holder}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {selectedCard && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Cardholder: {selectedCard.holder}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Points: {selectedCard.points}
                        </Typography>

                        <Paper sx={{ padding: "1em", marginTop: "2em" }}>
                            <Typography variant="h6" gutterBottom>
                                Redemption Values (All Programs)
                            </Typography>
                            {chartData.map((data) => (
                                <Box key={data.name} sx={{ marginBottom: "1em" }}>
                                    <Typography variant="body1">
                                        <strong>{data.name}</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Cash Back Value: ${data.cashBack.toFixed(2)}
                                    </Typography>
                                    <Typography variant="body2">
                                        Reward Travel Value: ${data.flights.toFixed(2)}
                                    </Typography>
                                </Box>
                            ))}
                        </Paper>

                        <Paper sx={{ padding: "1em", marginTop: "2em" }}>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis tickFormatter={(value) => `$${value.toFixed(2)}`} />
                                    <Tooltip
                                        formatter={(value) => `$${value.toFixed(2)}`}
                                        labelFormatter={(name) => `Program: ${name}`}
                                    />
                                    <Legend />
                                    <Bar dataKey="cashBack" fill="#82ca9d" name="Cash Back Value" />
                                    <Bar dataKey="flights" fill="#8884d8" name="Flights Value" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </>
                )}

                {!selectedCard && (
                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: "2em" }}>
                        Please select a card to view its point value comparison.
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Compare;
