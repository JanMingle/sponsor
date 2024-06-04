import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Account Management",
      description: "Overview of current active bursary programs, ability to create and manage new programs.",
      color: "#ffcc00",
      link: "/AccountManagement"
    },
    {
      title: "Donation/Sponsorship Tracker",
      description: "Track incoming donations and sponsorships, visual representation of donation trends.",
      color: "#87ceeb",
      link: "/DonationManagement"
    },
    {
      title: "Campaigns",
      description: "List of bursary applications pending review, tools for reviewing and processing applications.",
      color: "#90ee90",
      link: "/Campaigns"
    },
    {
      title: "Reporting and Analytics Section",
      description: "Generate reports on program performance, analytics on donation/sponsorship trends.",
      color: "#f0e68c",
      link: "/reporting-analytics"
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, mt: 10, px: 2, overflowX: 'hidden' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <SectionCard section={section} navigate={navigate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const SectionCard = ({ section, navigate }) => (
  <Card sx={{ minWidth: 275, maxWidth: 500, bgcolor: section.color }}>
    <CardContent>
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
        {section.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {section.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => navigate(section.link)}>Explore</Button>
    </CardActions>
  </Card>
);
