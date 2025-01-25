import React, { useState, useRef } from "react";
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
  Grid2,
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
  const [investmentType, setInvestmentType] = useState("");
  const [safestPlace, setSafestPlace] = useState("");
  const [safestInvestment, setSafestInvestment] = useState("");
  const [country, setCountry] = useState("");
  const resultsRef = useRef(null);

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
    setSafestPlace("Tokyo, Japan");
    setSafestInvestment(" Zurich, Switzerland ");
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        <Box my={2}>
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

          <Box sx={{ height: "100vh" }}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "background.paper",
              }}>
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
                  label="Preferred Investment Type (e.g., real estate, stock market)"
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
          </Box>

          <Box
            my={4}
            ref={resultsRef}
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}>
            <Box
              sx={{
                maxWidth: "1200px",
                width: "100%",
                backgroundColor: "background.paper",
              }}
              p={2}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Results:
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6} mx={3}>
                  <Box
                    sx={{ width: "100%" }}
                    border={1}
                    borderColor="grey.300"
                    borderRadius={2}
                    p={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                      Safest Place to Save
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom>
                      {`The safest place for your money is in ${safestPlace}` ||
                        "No data available"}
                    </Typography>
                    <Box
                      height={300}
                      borderRadius={2}
                      overflow="hidden"
                      width="100%"
                      display="flex"
                      justifyContent="center">
                      {/* Map for Safest Place */}
                      <iframe
                        title="Safest Place Map"
                        src={`https://www.google.com/maps?q=${safestPlace}&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                      />
                    </Box>
                  </Box>
                </Grid2>

                {/* Safest Investment */}
                <Grid2 item xs={12} sm={6}>
                  <Box
                    sx={{ width: "100%" }}
                    border={1}
                    borderColor="grey.300"
                    borderRadius={2}
                    p={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                      Safest Investment
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom>
                      {`The safest investment place is in ${safestInvestment}` ||
                        "No data available"}
                    </Typography>
                    <Box
                      height={300}
                      borderRadius={2}
                      overflow="hidden"
                      width="100%"
                      display="flex"
                      justifyContent="center">
                      {/* Map for Safest Investment */}
                      <iframe
                        title="Safest Investment Map"
                        src={`https://www.google.com/maps?q=${safestInvestment}&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                      />
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
