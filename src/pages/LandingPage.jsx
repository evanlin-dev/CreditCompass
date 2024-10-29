/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent,
  Avatar, Box, CssBaseline, ThemeProvider, createTheme
} from '@mui/material';
import {
  CreditCard, TrendingUp, Redeem, Search, CompareArrows, EmojiEvents,
} from '@mui/icons-material';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth listener
import { auth } from '../firebase'; // Import your Firebase auth instance

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

export default function LandingPage() {
  var [isLoggedIn] = useState(false);

  const auth = getAuth();
  var user = auth.currentUser;

  if (user === null) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
        {/* Header */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CreditCompass
            </Typography>
            <Button
              component={Link}
              to={isLoggedIn ? "/dashboard" : "/sign-up"} // Conditionally render link
              color="primary"
              variant="contained"
              sx={{ mr: 2 }}
            >
              {isLoggedIn ? "Go to Dashboard" : "Sign Up"}
            </Button>
            <Button component={Link} to="/login" color="secondary" variant="outlined">
              Log In
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Navigate Your Credit Card Rewards
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Maximize your points, optimize your usage, and unlock the full potential of your credit cards with CreditCompass.
              </Typography>
              <Button
                component={Link}
                to={isLoggedIn ? "/dashboard" : "/sign-up"}
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                {isLoggedIn ? "Go to Dashboard" : "Get Started"}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
                alt="Credit cards and compass"
                src="/placeholder.svg?height=400&width=600"
              />
            </Grid>
          </Grid>
        </Container>

        {/* Features Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              Features
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                { icon: <Search />, title: 'Card Recommendations', description: 'Find the perfect card for your spending habits.' },
                { icon: <CompareArrows />, title: 'Reward Comparison', description: 'Compare rewards across multiple cards easily.' },
                { icon: <TrendingUp />, title: 'Points Optimization', description: 'Learn how to maximize your points earning potential.' },
                { icon: <Redeem />, title: 'Redemption Strategies', description: 'Discover the best ways to redeem your rewards.' },
                { icon: <CreditCard />, title: 'Card Management', description: 'Keep track of all your cards in one place.' },
                { icon: <EmojiEvents />, title: 'Bonus Alerts', description: 'Never miss out on sign-up bonuses and special offers.' },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={2}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        {React.cloneElement(feature.icon, { fontSize: 'large', color: 'primary' })}
                      </Box>
                      <Typography variant="h6" align="center" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" align="center" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* How It Works Section */}
        <Container maxWidth="md" sx={{ my: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { step: 1, title: 'Sign Up', description: 'Create your free account with CreditCompass.' },
              { step: 2, title: 'Add Your Cards', description: 'Input your current credit cards and spending habits.' },
              { step: 3, title: 'Get Personalized Advice', description: 'Receive tailored recommendations and strategies.' },
              { step: 4, title: 'Maximize Rewards', description: 'Apply our tips and watch your rewards grow!' },
            ].map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main', mb: 2 }}>
                    {step.step}
                  </Avatar>
                  <Typography variant="h6" align="center" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              What Our Users Say
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                { name: 'Alex Johnson', comment: 'CreditCompass helped me earn twice as many points last year!', avatar: '/placeholder.svg?height=60&width=60' },
                { name: 'Sarah Lee', comment: 'I never knew I could get so much value from my credit cards. Thank you, CreditCompass!', avatar: '/placeholder.svg?height=60&width=60' },
                { name: 'Mike Chen', comment: 'The card recommendations were spot-on. I\'m saving hundreds on travel now.', avatar: '/placeholder.svg?height=60&width=60' },
              ].map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card elevation={2}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                        <Typography variant="subtitle1">{testimonial.name}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        "{testimonial.comment}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Container maxWidth="md" sx={{ my: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Maximize Your Credit Card Rewards?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Join CreditCompass today and start your journey to smarter credit card usage.
          </Typography>
          <Button
            component={Link}
            to={isLoggedIn ? "/dashboard" : "/sign-up"}
            variant="contained"
            size="large"
          >
            {isLoggedIn ? "Go to Dashboard" : "Sign Up Now"}
          </Button>
        </Container>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              Â© {new Date().getFullYear()} CreditCompass. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
