import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, 
  CardActions, CardMedia, Tabs, Tab, Box, ThemeProvider, createTheme, CssBaseline,
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

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
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2c2c2c',
          borderColor: '#3d3d3d',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.Mui-selected': {
    color: '#bb86fc',
    borderBottom: '2px solid #bb86fc',
  },
}));

export default function Cards() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const userCards = [
    { id: 1, name: 'Sapphire Preferred', issuer: 'Chase', balance: 1234.56, limit: 10000, rewards: '2x on travel and dining' },
    { id: 2, name: 'Gold Card', issuer: 'American Express', balance: 567.89, limit: 15000, rewards: '4x on dining and groceries' },
    { id: 3, name: 'Cash Rewards', issuer: 'Bank of America', balance: 789.01, limit: 5000, rewards: '3% cash back on category of choice' },
  ];

  const recommendedCards = [
    { id: 4, name: 'Freedom Unlimited', issuer: 'Chase', rewards: '1.5% cash back on all purchases', annualFee: 0 },
    { id: 5, name: 'Platinum Card', issuer: 'American Express', rewards: '5x on flights and hotels', annualFee: 695 },
    { id: 6, name: 'Venture', issuer: 'Capital One', rewards: '2x miles on all purchases', annualFee: 95 },
  ];

  const insights = [
    { icon: <TrendingUpIcon />, text: 'Your top spending category this month is Dining.' },
    { icon: <StarIcon />, text: 'You\'ve earned 5,000 points across all your cards this month.' },
    { icon: <CreditCardIcon />, text: 'Consider using your Sapphire Preferred for travel purchases to maximize points.' },
    { icon: <TrendingUpIcon />, text: 'Your spending on groceries has increased by 15% compared to last month.' },
    { icon: <StarIcon />, text: 'You\'re just 1,000 points away from redeeming a free flight!' },
    { icon: <CreditCardIcon />, text: 'Your Cash Rewards card has a 0% APR offer ending next month. Plan accordingly!' },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#121212' }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <CreditCardIcon sx={{ mr: 1, color: '#bb86fc' }} />
              <span style={{ color: '#bb86fc' }}>CreditCompass</span>
            </Typography>
            <Button color="inherit" sx={{ '&:hover': { color: '#03dac6' } }}>Dashboard</Button>
            <Button color="inherit" sx={{ '&:hover': { color: '#03dac6' } }}>Profile</Button>
            <Button color="inherit" sx={{ '&:hover': { color: '#03dac6' } }}>Settings</Button>
          </Toolbar>
        </AppBar>

        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#bb86fc' }}>
            Your Credit Card Dashboard
          </Typography>
          <Typography variant="h5" sx={{ color: '#b0b0b0' }} paragraph>
            Manage your cards, track rewards, and discover new opportunities.
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="dashboard tabs" textColor="inherit">
              <StyledTab label="My Cards" />
              <StyledTab label="Recommendations" />
              <StyledTab label="Insights" />
            </Tabs>
          </Box>

          {activeTab === 0 && (
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {userCards.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://via.placeholder.com/150"
                      alt="Placeholder Image"
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: '#bb86fc', mb: 1 }}>
                        {card.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: '#ffffff' }}>
                        {card.issuer}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff' }}>Balance: ${card.balance.toFixed(2)}</Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff' }}>Limit: ${card.limit.toFixed(2)}</Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: '#03dac6' }}>
                        {card.rewards}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ 
                        color: '#bb86fc', 
                        borderColor: '#bb86fc', 
                        '&:hover': { 
                          bgcolor: '#bb86fc', 
                          color: '#121212' 
                        } 
                      }} variant="outlined">
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {activeTab === 1 && (
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {recommendedCards.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://via.placeholder.com/150"
                      alt="Placeholder Image"
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: '#bb86fc', mb: 1 }}>
                        {card.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: '#ffffff' }}>
                        {card.issuer}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#03dac6' }}>
                        {card.rewards}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: '#ffffff' }}>
                        Annual Fee: ${card.annualFee}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ 
                        bgcolor: '#03dac6', 
                        color: '#121212', 
                        '&:hover': { 
                          bgcolor: 'rgba(3, 218, 198, 0.8)' 
                        } 
                      }}>
                        Apply Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {activeTab === 2 && (
            <List sx={{ mt: 2 }}>
              {insights.map((insight, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: '#03dac6' }}>
                    {insight.icon}
                  </ListItemIcon>
                  <ListItemText primary={insight.text} sx={{ color: '#ffffff' }} />
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
