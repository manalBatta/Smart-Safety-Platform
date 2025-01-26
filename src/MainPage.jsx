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
  AppBar,
  Toolbar,
  Grid2,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import countries from "./data/countries.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
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

  const countryList = countries.map((c) => c.name.common);
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
    setSafestInvestment("Zurich, Switzerland");
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "black",
          borderBottom: "2px solid #FFFFFF",
          padding: "5px",
        }}>
        <Toolbar>
          <Box sx={{ flexGrow: 0.5 }}>
            <img src="/logo.png" alt="logo" style={{ width: "100px" }} />
          </Box>
          <Button color="inherit">Logo</Button>
          <Button color="inherit">Compute</Button>
          <Button color="inherit">Result</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: 10,
          backgroundColor: "#121212",
          color: "white",
        }}>
        <Box>
          <Typography variant="h2" gutterBottom>
            Welcome to Smart Safety
          </Typography>
          <Typography variant="h5">
            Your personalized investment advisor for secure savings and
            investments.
          </Typography>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 500,
          }}>
          <DotLottieReact
            src="https://lottie.host/76b08c78-a0de-47b4-9de9-c89e3612fe2c/dgABlnL66X.lottie"
            loop
            autoplay
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Container>
        <Box mt={4} sx={{ height: "100vh" }}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            mb={4}
            mt={10}>
            Enter your preferences to find the safest place and investment type
            for your money!
          </Typography>

          <Box>
            <Paper
              sx={{
                padding: 3,
                width: "80%",
                margin: "1px auto",
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
        </Box>

        {/* Results Section */}
        <Box
          my={4}
          ref={resultsRef}
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "background.paper",
              borderRadius: "5px",
            }}
            p={2}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              Results
            </Typography>
            <Grid2 container spacing={6}>
              {/* Safest Place to Save */}
              <Grid2 item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    border: 1,
                    borderColor: "grey.300",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    Safest Place to Save
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom>
                    {`The safest place for your money is in ${safestPlace} ` ||
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
                      width="450px"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </Box>
                  {/* Go to Button */}
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`https://www.google.com/maps?q=${safestPlace}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      Investment
                    </Button>
                  </Box>
                </Box>
              </Grid2>

              {/* Safest Investment */}
              <Grid2 item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    border: 1,
                    borderColor: "grey.300",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    Safest Investment
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom>
                    {`The safest investment place is in ${safestInvestment} ` ||
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
                      width="450px"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </Box>
                  {/* Go to Button */}
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`https://www.google.com/maps?q=${safestInvestment}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      Safety
                    </Button>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
