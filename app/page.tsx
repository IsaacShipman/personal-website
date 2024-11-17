'use client';
import { Box, Typography, Button, Grid, Paper, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Home() {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={8} lg={6}>
          <Box sx={{ mb: 5, width: '100%', overflow: 'hidden' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              noWrap
              sx={{ 
                fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                whiteSpace: 'nowrap'
              }}
            >
              Hi, I'm <span style={{ color: '#90caf9' }}>Isaac Shipman</span>
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Aspiring Software Engineer
            </Typography>
            <Typography variant="body1" paragraph>
            I'm constantly exploring new technologies and working on projects that challenge my skills. 
  Currently in my third year of studies, I combine academic excellence with practical project experience, 
  always eager to apply my knowledge to real-world problems.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button variant="contained" href="/projects">
                View Projects
              </Button>
              <Button variant="outlined" href="/contact">
                Contact Me
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <IconButton color="inherit" href="https://github.com/IsaacShipman">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="www.linkedin.com/in/isaac-shipman-b54731285">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="mailto:your.email@example.com">
              <Email />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}