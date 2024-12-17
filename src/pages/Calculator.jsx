import React, { useState } from "react";
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
    TextField,
    Collapse,
} from "@mui/material";
import Sidebar from "../components/sidebar";

// Comprehensive redemption partners data mapped to issuers
const redemptionPartners = [
    {
        partner: "Aeromexico (Aeromexico Rewards)",
        airlinePartners: "https://www.aeromexico.com/en-us/aeromexico-rewards/award-ticket",
        rewardChart: "https://www.aeromexico.com/en-us/aeromexico-rewards/award-ticket",
        Amex_MR: "1:1.6\nTransfer Time: 1-7 Days",
        Bilt: null,
        Capital_One: "1:1\nTransfer Time: Instant",
        Chase_UR: null,
        Citi_ThankYou: "1:1\nTransfer Time: Instant",
        Wells_Fargo: null,
    },
    {
        partner: "EVA AIR (Infinity MileageLands)",
        airlinePartners: null,
        rewardChart:
            "https://www.evaair.com/en-us/infinity-mileagelands/mileage-award-program/mileage-redemption/award-ticket/eva-uni-air/",
        Amex_MR: null,
        Bilt: null,
        Capital_One: "2:1.5\nTransfer Time: 1-2 Days",
        Chase_UR: null,
        Citi_ThankYou: "1:1\nTransfer Time: 1-2 Days",
        Wells_Fargo: null,
    },
    {
        partner: "Hilton (Hilton Honors)",
        airlinePartners: null,
        rewardChart: "https://www.hilton.com/en/hilton-honors/",
        Amex_MR: "1:2\nTransfer Time: Instant",
        Bilt: null,
        Capital_One: null,
        Chase_UR: null,
        Citi_ThankYou: null,
        Wells_Fargo: null,
    },
    {
        partner: "JetBlue (True Blue)",
        airlinePartners: "https://www.jetblue.com/airline-partners",
        rewardChart: null,
        Amex_MR: "1:0.8\nTransfer Time: Instant",
        Bilt: null,
        Capital_One: null,
        Chase_UR: "1:1\nTransfer Time: Instant",
        Citi_ThankYou: "1:1\nTransfer Time: Instant",
        Wells_Fargo: null,
    },
];

const oneToOnePartners = {
    Amex_MR: [
        "Air Canada (Aeroplan)",
        "Singapore Airlines (KrisFlyer)",
        "Virgin Atlantic (Flying Club)",
        "Hyatt (World of Hyatt)",
        "Marriott Bonvoy",
    ],
    Bilt: ["Air Canada (Aeroplan)", "United (MileagePlus)", "Hyatt (World of Hyatt)"],
    Capital_One: [
        "Air Canada (Aeroplan)",
        "Singapore Airlines (KrisFlyer)",
        "British Airways (Executive Club)",
        "Choice Hotels (Choice Privileges)",
    ],
    Chase_UR: ["Air Canada (Aeroplan)", "Virgin Atlantic (Flying Club)", "Hyatt (World of Hyatt)"],
    Citi_ThankYou: ["Avianca (LifeMiles)", "Singapore Airlines (KrisFlyer)", "Choice Hotels"],
    Wells_Fargo: ["Choice Hotels (Choice Privileges)", "British Airways (Executive Club)"],
};

function Calculator() {
    const [selectedProgram, setSelectedProgram] = useState("Amex_MR");
    const [pointInput, setPointInput] = useState(""); // Input for point conversion
    const [showOneToOnePartners, setShowOneToOnePartners] = useState(false);

    const filteredPartners = redemptionPartners.filter(
        (partner) => partner[selectedProgram] && !partner[selectedProgram]?.includes("1:1")
    );

    const calculatePoints = (rate) => {
        if (!rate || !pointInput) return "N/A";
        const match = rate.match(/(\d+):(\d+)/);
        if (!match) return "N/A";
        const [_, from, to] = match.map(Number);
        return ((pointInput * to) / from).toLocaleString();
    };

    return (
        <Box className="container">
            <Sidebar />
            <Box className="right-container" sx={{ padding: "2em" }}>
                <Typography variant="h4" gutterBottom>
                    Points Calculator
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Select a reward program and enter points to calculate their value with redemption partners.
                </Typography>

                <FormControl sx={{ minWidth: 200, marginTop: "1em", marginBottom: "2em" }}>
                    <Select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                        <MenuItem value="Amex_MR">Amex MR</MenuItem>
                        <MenuItem value="Bilt">Bilt</MenuItem>
                        <MenuItem value="Capital_One">Capital One</MenuItem>
                        <MenuItem value="Chase_UR">Chase UR</MenuItem>
                        <MenuItem value="Citi_ThankYou">Citi ThankYou</MenuItem>
                        <MenuItem value="Wells_Fargo">Wells Fargo</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Points"
                    variant="outlined"
                    type="number"
                    value={pointInput}
                    onChange={(e) => setPointInput(e.target.value)}
                    sx={{ marginBottom: "2em", minWidth: 200 }}
                />

                <Paper sx={{ padding: "1em" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Partner</TableCell>
                                <TableCell>Conversion Rate</TableCell>
                                <TableCell>Converted Points</TableCell>
                                <TableCell>Airline Partners</TableCell>
                                <TableCell>Reward Chart</TableCell>
                                <TableCell>Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPartners.map((partner) => (
                                <TableRow key={partner.partner}>
                                    <TableCell>{partner.partner}</TableCell>
                                    <TableCell>{partner[selectedProgram] || "N/A"}</TableCell>
                                    <TableCell>
                                        {calculatePoints(partner[selectedProgram])}
                                    </TableCell>
                                    <TableCell>
                                        {partner.airlinePartners ? (
                                            <a
                                                href={partner.airlinePartners}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Airline Partners
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {partner.rewardChart ? (
                                            <a
                                                href={partner.rewardChart}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Reward Chart
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <a
                                            href={`https://www.google.com/search?q=${partner.partner}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Details
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>All Other Partners</TableCell>
                                <TableCell>1:1</TableCell>
                                <TableCell>{pointInput || "N/A"}</TableCell>
                                <TableCell colSpan={3}>
                                    <Typography
                                        variant="body2"
                                        onClick={() =>
                                            setShowOneToOnePartners((prev) => !prev)
                                        }
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            color: "blue",
                                        }}
                                    >
                                        {showOneToOnePartners
                                            ? "Hide Partners"
                                            : "Show Partners"}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                <Collapse in={showOneToOnePartners}>
                    <Paper sx={{ padding: "1em", marginTop: "1em" }}>
                        <Typography variant="h6">1:1 Partners</Typography>
                        <ul>
                            {oneToOnePartners[selectedProgram]?.map((partner) => (
                                <li key={partner}>{partner}</li>
                            ))}
                        </ul>
                    </Paper>
                </Collapse>
            </Box>
        </Box>
    );
}

export default Calculator;
