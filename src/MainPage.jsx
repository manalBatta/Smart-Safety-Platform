import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import countries from "./data/countries.json";

// Creating a dark theme
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#b0b0b0",
    },
  },
});

const App = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [location, setLocation] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [safestPlace, setSafestPlace] = useState("");
  const [safestInvestment, setSafestInvestment] = useState("");
  const [country, setCountry] = useState("");

  // Get country names from the world-countries library
  const countryList = countries.map((c) => c.name.common);
  console.log(countries);
  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "JPY", symbol: "¥" },
    { code: "AUD", symbol: "A$" },
    { code: "CAD", symbol: "C$" },
    { code: "CHF", symbol: "CHF" },
    { code: "CNY", symbol: "¥" },
    { code: "INR", symbol: "₹" },
  ];
  const handleCompute = () => {
    setSafestPlace(`The safest place for your money is in ${location}`);
    setSafestInvestment(`The safest investment type is ${investmentType}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          background:
            "url(/undraw_the-search_cjxa.svg) center center / cover no-repeat",
          height: "100vh", // Full height background
          animation: "moveBackground 5s infinite linear",
        }}>
        <Box my={4}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            color="textPrimary">
            Welcome to Your Investment Advisor
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            Enter your preferences to find the safest place and investment type
            for your money!
          </Typography>

          <Paper sx={{ padding: 3, backgroundColor: "background.paper" }}>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Amount of Money"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Preferred Currency</InputLabel>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  label="Preferred Currency">
                  {currencies.map(({ code, symbol }) => (
                    <MenuItem key={code} value={code}>
                      {symbol} - {code}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <Autocomplete
                options={countryList}
                value={country}
                onChange={(event, newValue) => setCountry(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Preferred Country"
                    variant="outlined"
                  />
                )}
                fullWidth
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label="Preferred Investment Type"
                value={investmentType}
                onChange={(e) => setInvestmentType(e.target.value)}
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box mb={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleCompute}>
                Compute
              </Button>
            </Box>
          </Paper>
          <Box my={4}>
            <Typography variant="h6" color="textPrimary">
              Results:
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {safestPlace}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {safestInvestment}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
