import React from 'react';
import { Box, Typography, Button, Container, Avatar, Stack, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import Projects from './Projects';

function Home() {
  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
    <Box
      sx={{
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundImage: 'url(/background2.jpg)',
        backgroundSize: 'cover',
        position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        filter: 'blur(5px)',
        padding: 5,
        zIndex: -1,
        
      }}
    />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Profile Picture */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Avatar
              alt="Ye Thu"
              src='/member2.jpg'
              sx={{ width: 200, height: 200, margin: '0 auto' }}
            />
          </Grid>

          {/* Introduction Section */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" component="h1" color='white' gutterBottom>
              Ye Thu Aung
            </Typography>
            <Typography variant="h5" color="white" >
              Full Stack Developer | AI Enthusiast | Open Source Contributor
            </Typography>
            <Typography variant="body1" color="white" component="paragraph" >
              I’m a passionate Full Stack Developer with a knack for building performant, scalable web applications. I love exploring cutting-edge technologies and contributing to the open-source community. Let's build something innovative together!
            </Typography>

            {/* Call to Action Buttons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ marginY: 3 }}
            >
              <Button variant="contained" color="primary" size="large" href="/projects">
                View Projects
              </Button>
              <Button variant="outlined" color="secondary" size="large" href="/contact">
                Contact Me
              </Button>
            </Stack>

            {/* Social Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ marginY: 3 }}
        >
          <IconButton color="primary" href="https://www.linkedin.com/">
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton color="primary" href="https://github.com/">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton color="primary" href="https://twitter.com/">
            <Twitter fontSize="large" />
          </IconButton>
        </Stack>
          </Grid>
        </Grid>
        
      </Container>
      
      </Box>
    <Projects />
    </>
  );
}

export default Home;